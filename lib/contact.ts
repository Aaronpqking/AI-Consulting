import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(120),
  email: z.string().email('A valid work email is required').max(200),
  company: z.string().max(200).optional().or(z.literal('')),
  summary: z.string().min(10, 'Please describe what you are trying to build or improve').max(3000),
  systems: z.string().max(2000).optional().or(z.literal('')),
  timeline: z.string().max(200).optional().or(z.literal('')),
  // honeypot
  website: z.string().max(0).optional().or(z.literal('')),
  // submission ID (client-generated UUID)
  submissionId: z.string().uuid().optional().or(z.literal('')),
  // attribution
  landingPage: z.string().max(500).optional().or(z.literal('')),
  formPage: z.string().max(500).optional().or(z.literal('')),
  ctaSource: z.string().max(200).optional().or(z.literal('')),
  referrer: z.string().max(500).optional().or(z.literal('')),
  utmSource: z.string().max(200).optional().or(z.literal('')),
  utmMedium: z.string().max(200).optional().or(z.literal('')),
  utmCampaign: z.string().max(200).optional().or(z.literal('')),
  utmContent: z.string().max(200).optional().or(z.literal('')),
  utmTerm: z.string().max(200).optional().or(z.literal('')),
});

export type ContactInput = z.infer<typeof contactSchema>;
