/*
# Create leads table for contact form submissions

## Purpose
Durable storage for all contact form submissions (project briefs).
This is the authoritative intake ledger — no lead is ever lost even if
email delivery fails.

## New Table: leads
- id (uuid, primary key, auto-generated)
- submission_id (text, unique — server-generated ID for idempotency)
- created_at (timestamptz, defaults to now())
- name (text, not null)
- email (text, not null)
- company (text, nullable)
- project_summary (text, not null — the "process" field)
- systems_involved (text, nullable)
- information (text, nullable)
- automatic (text, nullable)
- judgment (text, nullable)
- failing (text, nullable)
- project_type (text, not null)
- timeline (text, nullable)
- details (text, nullable)
- landing_page (text, nullable — page user was on before /contact)
- form_page (text, nullable — always /contact but stored for completeness)
- cta_source (text, nullable — e.g. "hero", "forward-deployment", "industrial-case-study")
- referrer (text, nullable — HTTP referer header)
- utm_source (text, nullable)
- utm_medium (text, nullable)
- utm_campaign (text, nullable)
- utm_content (text, nullable)
- utm_term (text, nullable)
- notification_status (text, defaults to 'pending' — pending/sent/failed)
- notification_sent_at (timestamptz, nullable)
- acknowledgment_status (text, defaults to 'pending' — pending/sent/failed)
- acknowledgment_sent_at (timestamptz, nullable)
- status (text, defaults to 'new')
- user_agent (text, nullable)
- initial_referrer (text, nullable)
- error_code (text, nullable)
- last_notification_error (text, nullable)

## Security
- RLS ENABLED on leads.
- INSERT-only for anon role (the contact form submits via server API
  which uses the service-role key, but the anon INSERT policy exists
  as a defense-in-depth measure if the server ever falls back to anon).
- NO SELECT, UPDATE, or DELETE policies for anon or authenticated.
  This means no one can read, modify, or delete lead records through
  the Supabase client API. All access is server-side only via the
  service-role key.

## Indexes
- Unique index on submission_id for idempotency
- Index on created_at for chronological queries
- Index on status for operational filtering
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  project_summary text NOT NULL,
  systems_involved text,
  information text,
  automatic text,
  judgment text,
  failing text,
  project_type text NOT NULL,
  timeline text,
  details text,
  landing_page text,
  form_page text,
  cta_source text,
  referrer text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  utm_term text,
  notification_status text NOT NULL DEFAULT 'pending',
  notification_sent_at timestamptz,
  acknowledgment_status text NOT NULL DEFAULT 'pending',
  acknowledgment_sent_at timestamptz,
  status text NOT NULL DEFAULT 'new',
  user_agent text,
  initial_referrer text,
  error_code text,
  last_notification_error text
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- INSERT-only policy for anon (defense-in-depth; server uses service-role key)
DROP POLICY IF EXISTS "anon_insert_leads" ON leads;
CREATE POLICY "anon_insert_leads" ON leads FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- No SELECT, UPDATE, or DELETE policies — leads are unreadable via client API

CREATE UNIQUE INDEX IF NOT EXISTS idx_leads_submission_id ON leads (submission_id);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads (status);
