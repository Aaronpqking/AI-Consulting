import { Resend } from 'resend';

export type LeadRecord = {
  submission_id: string;
  name: string;
  email: string;
  company: string | null;
  project_summary: string;
  systems_involved: string | null;
  project_type: string;
  timeline: string | null;
  details: string | null;
  landing_page: string | null;
  cta_source: string | null;
  referrer: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
};

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

export async function sendInternalNotification(lead: LeadRecord): Promise<void> {
  const resend = getResendClient();
  const { to, from } = getContactEmails();

  const subject = `New Forward Deployment Project Brief — ${lead.company || lead.name}`;

  const lines = [
    `Submission ID: ${lead.submission_id}`,
    `Timestamp: ${new Date().toISOString()}`,
    '',
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Company: ${lead.company || '—'}`,
    `Project Type: ${lead.project_type}`,
    `Timeline: ${lead.timeline || '—'}`,
    '',
    '--- Project Summary ---',
    lead.project_summary,
    '',
    lead.systems_involved ? `Systems Involved: ${lead.systems_involved}` : '',
    lead.details ? `Additional Details: ${lead.details}` : '',
    '',
    '--- Attribution ---',
    `Landing Page: ${lead.landing_page || '—'}`,
    `CTA Source: ${lead.cta_source || '—'}`,
    `Referrer: ${lead.referrer || '—'}`,
    `UTM Source: ${lead.utm_source || '—'}`,
    `UTM Medium: ${lead.utm_medium || '—'}`,
    `UTM Campaign: ${lead.utm_campaign || '—'}`,
    `UTM Content: ${lead.utm_content || '—'}`,
    `UTM Term: ${lead.utm_term || '—'}`,
  ].filter(Boolean);

  await resend.emails.send({
    from,
    to,
    replyTo: lead.email,
    subject,
    text: lines.join('\n'),
  });
}

export async function sendProspectAcknowledgment(lead: LeadRecord): Promise<void> {
  const resend = getResendClient();
  const { from } = getContactEmails();

  const subject = 'Your project brief was received';

  const body = [
    `${lead.name},`,
    '',
    'We received your project brief and will review the objective, systems and constraints you shared.',
    'If you need to add anything, reply directly to this email.',
    '',
    '— Forward Deployment',
    'AI Systems Engineering',
  ].join('\n');

  await resend.emails.send({
    from,
    to: lead.email,
    replyTo: from,
    subject,
    text: body,
  });
}

export function isEmailConfigured(): boolean {
  return !!(
    process.env.RESEND_API_KEY &&
    process.env.CONTACT_TO_EMAIL &&
    process.env.CONTACT_FROM_EMAIL
  );
}
