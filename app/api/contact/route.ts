import { NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import { contactSchema } from '@/lib/contact';
import {
  sendInternalNotification,
  sendProspectAcknowledgment,
  isEmailConfigured,
  type InquiryRecord,
} from '@/lib/email';

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const rateMap = new Map<string, { count: number; resetAt: number }>();

function getRateLimitKey(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';
  return ip;
}

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(key);

  if (!entry || now > entry.resetAt) {
    rateMap.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count++;
  return true;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  // Rate limiting
  const rlKey = getRateLimitKey(request);
  if (!checkRateLimit(rlKey)) {
    return NextResponse.json(
      { error: 'Too many submissions. Please try again in a minute.' },
      { status: 429 }
    );
  }

  // Honeypot check — silently accept without doing anything
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

  // Use client-provided submission ID or generate one
  const submissionId = data.submissionId || randomUUID();
  const timestamp = new Date().toISOString();

  // Check email configuration
  if (!isEmailConfigured()) {
    console.error('[contact] Email not configured', { submissionId });
    return NextResponse.json(
      {
        error:
          'We could not send your submission at this time. Please email us directly at ' +
          (process.env.CONTACT_TO_EMAIL || 'our contact address') +
          '.',
      },
      { status: 503 }
    );
  }

  // Build the inquiry record
  const inquiry: InquiryRecord = {
    submission_id: submissionId,
    name: data.name,
    email: data.email,
    company: data.company || null,
    summary: data.summary,
    systems: data.systems || null,
    timeline: data.timeline || null,
    landing_page: data.landingPage || null,
    form_page: data.formPage || '/contact',
    cta_source: data.ctaSource || null,
    referrer: data.referrer || null,
    utm_source: data.utmSource || null,
    utm_medium: data.utmMedium || null,
    utm_campaign: data.utmCampaign || null,
    utm_content: data.utmContent || null,
    utm_term: data.utmTerm || null,
  };

  // STEP 1: Send internal notification — this is the acceptance boundary
  const internalResult = await sendInternalNotification(inquiry);

  if (!internalResult.success) {
    console.error('[contact] Internal notification failed:', {
      submissionId,
      error: internalResult.error,
    });
    return NextResponse.json(
      {
        error:
          'We could not send your project brief. Please email us directly at ' +
          (process.env.CONTACT_TO_EMAIL || 'our contact address') +
          '.',
      },
      { status: 502 }
    );
  }

  // Internal notification accepted — the inquiry is received.
  // STEP 2: Attempt prospect acknowledgment
  let acknowledgmentSent = false;

  const ackResult = await sendProspectAcknowledgment(inquiry);

  if (ackResult.success) {
    acknowledgmentSent = true;
  } else {
    console.error('[contact] Prospect acknowledgment failed:', {
      submissionId,
      error: ackResult.error,
    });
    // Lead is still received — do not fail
  }

  // STEP 3: Return truthful status
  return NextResponse.json({
    ok: true,
    submissionId,
    timestamp,
    acknowledgmentSent,
  });
}
