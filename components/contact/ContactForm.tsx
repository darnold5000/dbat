"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { contactSchema, type ContactInput } from "@/lib/forms";
import { Button } from "@/components/ui/button";
import { trackEvent, analyticsEvents } from "@/lib/analytics";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      acknowledgeMembership: false,
      acknowledgeCancellations: false,
    },
  });

  async function onSubmit(data: ContactInput) {
    setStatus("loading");
    setMessage("");
    trackEvent(analyticsEvents.contactSubmit);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Submission failed");
      setStatus("success");
      setMessage(json.message);
      reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-lg border border-border bg-surface p-6"
      noValidate
      onFocus={() => trackEvent(analyticsEvents.contactStart)}
    >
      <p className="rounded-md border border-border bg-surface-elevated px-3 py-2 text-xs text-muted">
        Demo mode: submissions are validated and logged. They are not emailed
        unless Resend environment variables are configured.
      </p>

      {/* honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
        {...register("website")}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First name" error={errors.firstName?.message}>
          <input className={inputClass} {...register("firstName")} />
        </Field>
        <Field label="Last name" error={errors.lastName?.message}>
          <input className={inputClass} {...register("lastName")} />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" error={errors.email?.message}>
          <input type="email" className={inputClass} {...register("email")} />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input type="tel" className={inputClass} {...register("phone")} />
        </Field>
      </div>
      <Field label="Subject" error={errors.subject?.message}>
        <input className={inputClass} {...register("subject")} />
      </Field>
      <Field label="Message" error={errors.message?.message}>
        <textarea rows={5} className={inputClass} {...register("message")} />
      </Field>

      <label className="flex gap-3 text-sm text-muted">
        <input
          type="checkbox"
          className="mt-1 size-4 accent-[var(--brand)]"
          {...register("acknowledgeMembership")}
        />
        <span>
          I acknowledge that memberships cannot be suspended or terminated using
          this form. Use Manage Membership instead.
        </span>
      </label>
      {errors.acknowledgeMembership ? (
        <p className="text-sm text-brand">{errors.acknowledgeMembership.message}</p>
      ) : null}

      <label className="flex gap-3 text-sm text-muted">
        <input
          type="checkbox"
          className="mt-1 size-4 accent-[var(--brand)]"
          {...register("acknowledgeCancellations")}
        />
        <span>
          I acknowledge that lessons and cage rentals cannot be cancelled using
          this form. Call the facility for cancellations.
        </span>
      </label>
      {errors.acknowledgeCancellations ? (
        <p className="text-sm text-brand">{errors.acknowledgeCancellations.message}</p>
      ) : null}

      {status === "success" ? (
        <p className="rounded-md border border-success/40 bg-success/10 px-3 py-2 text-sm text-success">
          {message}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-md border border-brand/40 bg-brand/10 px-3 py-2 text-sm text-brand">
          {message}
        </p>
      ) : null}

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-2 text-sm">
      <span className="text-muted">{label}</span>
      {children}
      {error ? <span className="block text-brand">{error}</span> : null}
    </label>
  );
}

const inputClass =
  "min-h-11 w-full rounded-md border border-border bg-background px-3 text-white placeholder:text-muted";
