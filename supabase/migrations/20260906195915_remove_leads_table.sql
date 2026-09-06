/*
# Remove unused leads table

## Purpose
The leads table was created for a database-backed contact form workflow
that has been replaced by a simpler email-only flow (Resend → inbox).
The table contains zero rows and is no longer referenced by any code.

## Changes
- DROP TABLE leads (including all policies, indexes, and grants)
*/

DROP TABLE IF EXISTS leads;
