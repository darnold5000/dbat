"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { birthdaySchema, type BirthdayInput } from "@/lib/forms";
import { Button } from "@/components/ui/button";
import { trackEvent, analyticsEvents } from "@/lib/analytics";

export function BirthdayPartyInquiryForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BirthdayInput>({
    resolver: zodResolver(birthdaySchema),
  });

  async function onSubmit(data: BirthdayInput) {
    setStatus("loading");
    setMessage("");
    trackEvent(analyticsEvents.birthdaySubmit);
    try {
      const res = await fetch("/api/birthday", {
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
    >
      <p className="rounded-md border border-border bg-surface-elevated px-3 py-2 text-xs text-muted">
        Demo inquiry form — submitting does not reserve a party date. Availability
        must be confirmed with Batter Up.
      </p>
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
        {...register("website")}
      />

      <Field label="Parent / guardian name" error={errors.parentName?.message}>
        <input className={inputClass} {...register("parentName")} />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" error={errors.email?.message}>
          <input type="email" className={inputClass} {...register("email")} />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input type="tel" className={inputClass} {...register("phone")} />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Requested date" error={errors.requestedDate?.message}>
          <input type="date" className={inputClass} {...register("requestedDate")} />
        </Field>
        <Field label="Requested time" error={errors.requestedTime?.message}>
          <input type="time" className={inputClass} {...register("requestedTime")} />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Estimated guests" error={errors.guestCount?.message}>
          <input className={inputClass} {...register("guestCount")} />
        </Field>
        <Field label="Child age" error={errors.childAge?.message}>
          <input className={inputClass} {...register("childAge")} />
        </Field>
      </div>
      <Field label="Notes" error={errors.notes?.message}>
        <textarea rows={4} className={inputClass} {...register("notes")} />
      </Field>

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
        {status === "loading" ? "Sending…" : "Request a Party"}
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
