import { Resend } from 'resend';

export type InquiryRecord = {
  submission_id: string;
  name: string;
  email: string;
  company: string | null;
  summary: string;
  systems: string | null;
  timeline: string | null;
  landing_page: string | null;
  form_page: string | null;
  cta_source: string | null;
  referrer: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
};

type EmailResult = { success: boolean; error: string | null };

function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error('RESEND_API_KEY is not configured');
  return new Resend(apiKey);
}

function getContactEmails() {
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!to || !from) throw new Error('CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL is not configured');
  return { to, from };
}

export async function sendInternalNotification(
  inquiry: InquiryRecord
): Promise<EmailResult> {
  try {
    const resend = getResendClient();
    const { to, from } = getContactEmails();

    const subject = `New Forward Deployment Inquiry — ${inquiry.company || inquiry.name}`;

    const lines = [
      `Submission ID: ${inquiry.submission_id}`,
      `Timestamp: ${new Date().toISOString()}`,
      '',
      `Name: ${inquiry.name}`,
      `Email: ${inquiry.email}`,
      `Company: ${inquiry.company || '—'}`,
      `Timeline: ${inquiry.timeline || '—'}`,
      '',
      '--- What they want to build or improve ---',
      inquiry.summary,
    ];

    if (inquiry.systems) {
      lines.push('', `Systems involved: ${inquiry.systems}`);
    }

    lines.push(
      '',
      '--- Attribution ---',
      `CTA Source: ${inquiry.cta_source || '—'}`,
      `Landing Page: ${inquiry.landing_page || '—'}`,
      `Form Page: ${inquiry.form_page || '—'}`,
      `Referrer: ${inquiry.referrer || '—'}`,
      `UTM Source: ${inquiry.utm_source || '—'}`,
      `UTM Medium: ${inquiry.utm_medium || '—'}`,
      `UTM Campaign: ${inquiry.utm_campaign || '—'}`,
      `UTM Content: ${inquiry.utm_content || '—'}`,
      `UTM Term: ${inquiry.utm_term || '—'}`
    );

    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: inquiry.email,
      subject,
      text: lines.join('\n'),
    });

    if (error) {
      return { success: false, error: error.message };
    }

    if (!data || !data.id) {
      return { success: false, error: 'No message ID returned' };
    }

    return { success: true, error: null };
  } catch (e) {
    return { success: false, error: e instanceof Error ? e.message : 'Unknown error' };
  }
}

export async function sendProspectAcknowledgment(
  inquiry: InquiryRecord
): Promise<EmailResult> {
  try {
    const resend = getResendClient();
    const { from } = getContactEmails();

    const subject = 'Your inquiry was received';

    const body = [
      `${inquiry.name},`,
      '',
      'We received your inquiry and will review the objective, systems and context you shared.',
      'If you need to add anything, reply directly to this email.',
      '',
      '— Forward Deployment',
      'AI Systems Engineering',
    ].join('\n');

    const { data, error } = await resend.emails.send({
      from,
      to: inquiry.email,
      replyTo: from,
      subject,
      text: body,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    if (!data || !data.id) {
      return { success: false, error: 'No message ID returned' };
    }

    return { success: true, error: null };
  } catch (e) {
    return { success: false, error: e instanceof Error ? e.message : 'Unknown error' };
  }
}

export function isEmailConfigured(): boolean {
  return !!(
    process.env.RESEND_API_KEY &&
    process.env.CONTACT_TO_EMAIL &&
    process.env.CONTACT_FROM_EMAIL
  );
}
