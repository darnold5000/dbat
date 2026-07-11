import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(80),
  lastName: z.string().trim().min(1, "Last name is required").max(80),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().min(7, "Enter a valid phone").max(30),
  subject: z.string().trim().min(1, "Subject is required").max(120),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(4000),
  acknowledgeMembership: z.boolean().refine((v) => v === true, {
    message: "Please acknowledge the membership notice",
  }),
  acknowledgeCancellations: z.boolean().refine((v) => v === true, {
    message: "Please acknowledge the cancellation notice",
  }),
  website: z.string().max(0).optional(),
});

export const birthdaySchema = z.object({
  parentName: z.string().trim().min(1, "Parent/guardian name is required").max(120),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().min(7, "Enter a valid phone").max(30),
  requestedDate: z.string().trim().min(1, "Requested date is required"),
  requestedTime: z.string().trim().min(1, "Requested time is required"),
  guestCount: z.string().trim().min(1, "Estimated guests is required").max(10),
  childAge: z.string().trim().min(1, "Child age is required").max(10),
  notes: z.string().trim().max(2000).optional(),
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type BirthdayInput = z.infer<typeof birthdaySchema>;

const rateMap = new Map<string, { count: number; reset: number }>();

export function rateLimit(key: string, limit = 5, windowMs = 60_000) {
  const now = Date.now();
  const entry = rateMap.get(key);
  if (!entry || now > entry.reset) {
    rateMap.set(key, { count: 1, reset: now + windowMs });
    return { ok: true };
  }
  if (entry.count >= limit) {
    return { ok: false, retryAfterMs: entry.reset - now };
  }
  entry.count += 1;
  return { ok: true };
}

export function sanitizeText(value: string) {
  return value.replace(/[<>]/g, "").trim();
}
