# Forward Deployment — AI Systems Engineering

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-8y1rhzas)

## Environment Variables

The following environment variables are required for the contact form lead capture workflow. All are server-side only and must not be prefixed with `NEXT_PUBLIC_`.

### Supabase (pre-populated)

- `SUPABASE_URL` — Supabase project URL
- `SUPABASE_SERVICE_ROLE_KEY` — Supabase service-role key (server-only, never exposed to client)

### Email (Resend)

- `RESEND_API_KEY` — Resend API key for transactional email delivery
- `CONTACT_TO_EMAIL` — Email address that receives internal lead notifications
- `CONTACT_FROM_EMAIL` — Sender address for outgoing emails (must be verified in Resend)

### Optional

- `NEXT_PUBLIC_SITE_URL` — Public site URL used for canonical links and sitemap
