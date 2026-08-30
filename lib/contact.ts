import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(120),
  email: z.string().email('A valid work email is required').max(200),
  company: z.string().max(200).optional().or(z.literal('')),
  process: z.string().min(10, 'Describe the business process you want to improve').max(3000),
  systems: z.string().min(3, 'List the systems involved').max(2000).optional().or(z.literal('')),
  information: z.string().max(2000).optional().or(z.literal('')),
  automatic: z.string().max(2000).optional().or(z.literal('')),
  judgment: z.string().max(2000).optional().or(z.literal('')),
  failing: z.string().max(2000).optional().or(z.literal('')),
  projectType: z.string().min(1, 'Select a project type'),
  timeline: z.string().max(200).optional().or(z.literal('')),
  details: z.string().max(5000).optional().or(z.literal('')),
  // honeypot
  website: z.string().max(0).optional().or(z.literal('')),
});

export type ContactInput = z.infer<typeof contactSchema>;
