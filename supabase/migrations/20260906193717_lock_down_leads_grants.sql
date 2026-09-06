/*
# Lock down leads table grants

## Purpose
The default Postgres grants give anon and authenticated SELECT, UPDATE, and DELETE
on every table. While RLS blocks these (no policy = denied), we revoke those
grants explicitly as defense-in-depth so the principle of least privilege is
enforced at the grant level, not just the policy level.

## Changes
- REVOKE SELECT, UPDATE, DELETE from anon and authenticated on leads
- GRANT INSERT only to anon and authenticated on leads
*/

REVOKE SELECT, UPDATE, DELETE ON leads FROM anon, authenticated;
GRANT INSERT ON leads TO anon, authenticated;
