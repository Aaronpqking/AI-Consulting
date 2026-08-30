export function bookingUrl(): string | null {
  const url = process.env.NEXT_PUBLIC_BOOKING_URL;
  return url && url.trim().length > 0 ? url.trim() : null;
}

export function bookingHref(engagement?: string): string {
  const url = bookingUrl();
  if (url) return url;
  const params = new URLSearchParams();
  if (engagement) params.set('engagement', engagement);
  const qs = params.toString();
  return qs ? `/contact?${qs}` : '/contact';
}

import { siteIdentity } from '@/data/site';

export function siteUrl(): string {
  return siteIdentity.siteUrl;
}
