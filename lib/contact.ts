import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(120),
  email: z.string().email('A valid work email is required').max(200),
  company: z.string().max(200).optional().or(z.literal('')),
  building: z.string().min(1, 'Select what you are building'),
  happening: z.array(z.string()).min(1, 'Select at least one symptom'),
  stage: z.string().min(1, 'Select your current stage'),
  technology: z.string().max(2000).optional().or(z.literal('')),
  outcome: z.string().min(10, 'Describe a useful outcome').max(3000),
  budget: z.string().optional().or(z.literal('')),
  engagement: z.string().optional().or(z.literal('')),
  // honeypot
  website: z.string().max(0).optional().or(z.literal('')),
});

export type ContactInput = z.infer<typeof contactSchema>;
