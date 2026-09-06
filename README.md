# Forward Deployment — AI Systems Engineering

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-8y1rhzas)

## Contact Workflow

```
Contact Form → Next.js API → Resend → Practice Inbox
                                    → Prospect Acknowledgment
```

The inbox is the system of record for inbound inquiries. No database is used for lead intake.

### Required Environment Variables

All server-side only (do not prefix with `NEXT_PUBLIC_`):

- `RESEND_API_KEY` — Resend API key for transactional email
- `CONTACT_TO_EMAIL` — Practice inbox that receives lead notifications
- `CONTACT_FROM_EMAIL` — Verified Resend sender address for outgoing email

### Optional

- `NEXT_PUBLIC_SITE_URL` — Public site URL for canonical links and sitemap

### Failure Behavior

- If Resend rejects the internal notification, the API returns a non-2xx response and the visitor sees a direct-email fallback — no false success.
- If the internal notification succeeds but the prospect acknowledgment fails, the visitor still sees "Project brief received" but is not told a confirmation email was sent.
- Honeypot field silently accepts bot submissions without sending any email.
- In-memory rate limiting (5 requests/minute/IP) protects against scripted abuse.

### Attribution

CTA source (`?source=`), UTM parameters, landing page, and referrer are captured client-side and included in the internal notification email. No PII is sent to analytics.
