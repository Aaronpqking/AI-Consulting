import { NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import { contactSchema } from '@/lib/contact';
import { getSupabaseServerClient } from '@/lib/supabase-server';
import {
  sendInternalNotification,
  sendProspectAcknowledgment,
  isEmailConfigured,
  type LeadRecord,
} from '@/lib/email';

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  // Honeypot check — silently reject if populated
  if (body.website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    const errors: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const key = issue.path[0]?.toString();
      if (key && !errors[key]) {
        errors[key] = issue.message;
      }
    }
    return NextResponse.json({ errors }, { status: 400 });
  }

  const data = result.data;

  // Generate server-side submission ID and timestamp
  const submissionId = randomUUID();
  const timestamp = new Date().toISOString();

  // Build the lead record
  const lead = {
    submission_id: submissionId,
    name: data.name,
    email: data.email,
    company: data.company || null,
    project_summary: data.process,
    systems_involved: data.systems || null,
    information: data.information || null,
    automatic: data.automatic || null,
    judgment: data.judgment || null,
    failing: data.failing || null,
    project_type: data.projectType,
    timeline: data.timeline || null,
    details: data.details || null,
    landing_page: data.landingPage || null,
    form_page: data.formPage || '/contact',
    cta_source: data.ctaSource || null,
    referrer: data.referrer || null,
    utm_source: data.utmSource || null,
    utm_medium: data.utmMedium || null,
    utm_campaign: data.utmCampaign || null,
    utm_content: data.utmContent || null,
    utm_term: data.utmTerm || null,
    notification_status: 'pending' as const,
    acknowledgment_status: 'pending' as const,
    status: 'new' as const,
    user_agent: request.headers.get('user-agent') || null,
  };

  // STEP 1: Durable insert into Supabase — must succeed before anything else
  let supabase;
  try {
    supabase = getSupabaseServerClient();
  } catch {
    return NextResponse.json(
      { error: 'Service temporarily unavailable. Please email us directly.' },
      { status: 503 }
    );
  }

  let insertError: { code?: string; message?: string } | null = null;

  try {
    const { error } = await supabase.from('leads').insert(lead);
    insertError = error;
  } catch (e) {
    insertError = { message: e instanceof Error ? e.message : 'Unknown error' };
  }

  if (insertError) {
    // Check for duplicate submission_id (idempotency)
    if (insertError.code === '23505') {
      return NextResponse.json(
        { ok: true, message: 'This submission was already received.' },
        { status: 200 }
      );
    }

    console.error('[contact] Supabase insert failed:', {
      submissionId,
      code: insertError.code,
      message: insertError.message,
    });

    return NextResponse.json(
      {
        error:
          'We could not save your submission at this time. Please email us directly at ' +
          (process.env.CONTACT_TO_EMAIL || 'our contact address') +
          '.',
      },
      { status: 503 }
    );
  }

  // Lead is durably stored. Now attempt email delivery.
  const emailLead: LeadRecord = {
    submission_id: submissionId,
    name: data.name,
    email: data.email,
    company: data.company || null,
    project_summary: data.process,
    systems_involved: data.systems || null,
    project_type: data.projectType,
    timeline: data.timeline || null,
    details: data.details || null,
    landing_page: data.landingPage || null,
    cta_source: data.ctaSource || null,
    referrer: data.referrer || null,
    utm_source: data.utmSource || null,
    utm_medium: data.utmMedium || null,
    utm_campaign: data.utmCampaign || null,
    utm_content: data.utmContent || null,
    utm_term: data.utmTerm || null,
  };

  let notificationStatus = 'pending';
  let notificationSentAt: string | null = null;
  let notificationError: string | null = null;

  let acknowledgmentStatus = 'pending';
  let acknowledgmentSentAt: string | null = null;
  let acknowledgmentError: string | null = null;

  if (!isEmailConfigured()) {
    notificationStatus = 'failed';
    notificationError = 'Email provider not configured';
    acknowledgmentStatus = 'failed';
    acknowledgmentError = 'Email provider not configured';
  } else {
    // STEP 2: Internal notification email
    try {
      await sendInternalNotification(emailLead);
      notificationStatus = 'sent';
      notificationSentAt = new Date().toISOString();
    } catch (e) {
      notificationStatus = 'failed';
      notificationError = e instanceof Error ? e.message : 'Unknown error';
      console.error('[contact] Internal notification failed:', {
        submissionId,
        error: notificationError,
      });
    }

    // STEP 3: Prospect acknowledgment email
    try {
      await sendProspectAcknowledgment(emailLead);
      acknowledgmentStatus = 'sent';
      acknowledgmentSentAt = new Date().toISOString();
    } catch (e) {
      acknowledgmentStatus = 'failed';
      acknowledgmentError = e instanceof Error ? e.message : 'Unknown error';
      console.error('[contact] Prospect acknowledgment failed:', {
        submissionId,
        error: acknowledgmentError,
      });
    }
  }

  // STEP 4: Update delivery status fields in Supabase
  try {
    await supabase
      .from('leads')
      .update({
        notification_status: notificationStatus,
        notification_sent_at: notificationSentAt,
        acknowledgment_status: acknowledgmentStatus,
        acknowledgment_sent_at: acknowledgmentSentAt,
        last_notification_error: notificationError,
      })
      .eq('submission_id', submissionId);
  } catch (e) {
    console.error('[contact] Failed to update delivery status:', {
      submissionId,
      error: e instanceof Error ? e.message : 'Unknown error',
    });
  }

  // STEP 5: Return truthful status
  const acknowledgmentSent = acknowledgmentStatus === 'sent';

  return NextResponse.json({
    ok: true,
    submissionId,
    timestamp,
    acknowledgmentSent,
  });
}
