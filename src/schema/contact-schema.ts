import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),

  email: z.string().email("Please enter a valid email"),

  subject: z.string().min(3, "Subject is required"),

  message: z.string().min(20, "Message must be at least 20 characters"),
});

export type ContactSchema = z.infer<typeof contactSchema>;
