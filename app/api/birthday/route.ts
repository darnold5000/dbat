import { NextResponse } from "next/server";
import { birthdaySchema, rateLimit, sanitizeText } from "@/lib/forms";
import { getEnv } from "@/lib/env";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  const limited = rateLimit(`birthday:${ip}`);
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

  const parsed = birthdaySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({
      message:
        "Thanks — your request has been received. A Batter Up team member will contact you to discuss availability and details.",
    });
  }

  const data = {
    ...parsed.data,
    parentName: sanitizeText(parsed.data.parentName),
    notes: sanitizeText(parsed.data.notes ?? ""),
  };

  const env = getEnv();
  console.info("[birthday-form]", {
    requestedDate: data.requestedDate,
    demo: !env.emailReady,
  });

  if (env.emailReady && env.RESEND_API_KEY) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(env.RESEND_API_KEY);
      await resend.emails.send({
        from: env.CONTACT_FROM_EMAIL!,
        to: env.CONTACT_TO_EMAIL!,
        subject: "[Batter Up] Birthday party inquiry",
        text: [
          `Parent: ${data.parentName}`,
          `Email: ${data.email}`,
          `Phone: ${data.phone}`,
          `Date: ${data.requestedDate}`,
          `Time: ${data.requestedTime}`,
          `Guests: ${data.guestCount}`,
          `Child age: ${data.childAge}`,
          "",
          data.notes,
        ].join("\n"),
      });
    } catch (error) {
      console.error("[birthday-form] email failed", error instanceof Error ? error.name : "error");
      return NextResponse.json(
        { error: "Unable to send inquiry right now. Please call the facility." },
        { status: 500 },
      );
    }
  }

  return NextResponse.json({
    message:
      "Thanks — your request has been received. A Batter Up team member will contact you to discuss availability and details.",
    demo: !env.emailReady,
  });
}
