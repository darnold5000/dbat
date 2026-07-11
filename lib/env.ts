import { z } from "zod";

const envSchema = z.object({
  RESEND_API_KEY: z.string().optional(),
  CONTACT_TO_EMAIL: z.string().email().optional().or(z.literal("")),
  CONTACT_FROM_EMAIL: z.string().email().optional().or(z.literal("")),
  NEXT_PUBLIC_SITE_URL: z.string().url().optional().or(z.literal("")),
  NEXT_PUBLIC_GA_ID: z.string().optional(),
});

export function getEnv() {
  const parsed = envSchema.safeParse({
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
    CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  });

  if (!parsed.success) {
    return {
      RESEND_API_KEY: undefined,
      CONTACT_TO_EMAIL: undefined,
      CONTACT_FROM_EMAIL: undefined,
      NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
      NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
      emailReady: false,
    };
  }

  const data = parsed.data;
  const emailReady = Boolean(
    data.RESEND_API_KEY && data.CONTACT_TO_EMAIL && data.CONTACT_FROM_EMAIL,
  );

  return { ...data, emailReady };
}
