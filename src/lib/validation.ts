import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(1, "Name is required").max(120),
  email: z.string().email("Valid email required").max(200),
  company: z.string().max(200).optional(),
  message: z.string().min(1, "Message is required").max(4000),
  source: z.string().max(100).default("contact-form"),
});

export type LeadInput = z.infer<typeof leadSchema>;
