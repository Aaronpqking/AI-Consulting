import type { MetadataRoute } from 'next';
import { siteIdentity } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteIdentity.siteUrl;
  const pages = ['', '/services', '/work', '/firm', '/contact', '/demonstrations'];

  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));
}
