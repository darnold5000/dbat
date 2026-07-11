import { NextResponse } from "next/server";
import { contactSchema, rateLimit, sanitizeText } from "@/lib/forms";
import { getEnv } from "@/lib/env";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  const limited = rateLimit(`contact:${ip}`);
  if (!limited.ok) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ message: "Thanks — your request has been received." });
  }

  const data = {
    ...parsed.data,
    firstName: sanitizeText(parsed.data.firstName),
    lastName: sanitizeText(parsed.data.lastName),
    subject: sanitizeText(parsed.data.subject),
    message: sanitizeText(parsed.data.message),
  };

  const env = getEnv();

  // Log without dumping full PII in production-like environments
  console.info("[contact-form]", {
    subject: data.subject,
    hasEmail: Boolean(data.email),
    demo: !env.emailReady,
  });

  if (env.emailReady && env.RESEND_API_KEY) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(env.RESEND_API_KEY);
      await resend.emails.send({
        from: env.CONTACT_FROM_EMAIL!,
        to: env.CONTACT_TO_EMAIL!,
        subject: `[D-BAT Avon Contact] ${data.subject}`,
        text: [
          `Name: ${data.firstName} ${data.lastName}`,
          `Email: ${data.email}`,
          `Phone: ${data.phone}`,
          `Subject: ${data.subject}`,
          "",
          data.message,
        ].join("\n"),
      });
      return NextResponse.json({
        message:
          "Thanks — your message has been received. A D-BAT Avon team member will get back to you.",
      });
    } catch (error) {
      console.error("[contact-form] email failed", error instanceof Error ? error.name : "error");
      return NextResponse.json(
        { error: "Unable to send message right now. Please call the facility." },
        { status: 500 },
      );
    }
  }

  return NextResponse.json({
    message:
      "Thanks — your message has been received (demo mode). A D-BAT Avon team member will get back to you as soon as possible.",
    demo: true,
  });
}
