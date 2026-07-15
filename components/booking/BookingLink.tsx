"use client";

import Link from "next/link";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";
import { trackEvent } from "@/lib/analytics";

type Props = {
  href: string;
  children: React.ReactNode;
  eventName?: string;
  eventPayload?: Record<string, string | number | boolean | undefined>;
  className?: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  showExternalIcon?: boolean;
  confirmOutbound?: boolean;
  external?: boolean;
};

export function BookingLink({
  href,
  children,
  eventName,
  eventPayload,
  className,
  variant = "primary",
  size = "default",
  showExternalIcon = false,
  confirmOutbound = false,
  external,
}: Props) {
  const [open, setOpen] = useState(false);
  const isExternal =
    external ?? (href.startsWith("http") || href.startsWith("tel:"));

  function handleClick(e: React.MouseEvent) {
    if (eventName) trackEvent(eventName, eventPayload);
    if (confirmOutbound && isExternal && href.startsWith("http")) {
      e.preventDefault();
      setOpen(true);
    }
  }

  return (
    <>
      <Link
        href={href}
        onClick={handleClick}
        className={cn(buttonVariants({ variant, size }), className)}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
        {showExternalIcon ? <ExternalLink className="size-4" aria-hidden /> : null}
      </Link>

      {open ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-handoff-title"
        >
          <div className="w-full max-w-md rounded-lg border border-border bg-surface p-6 shadow-none">
            <h2 id="booking-handoff-title" className="font-display text-2xl text-white">
              Continue to Booking
            </h2>
            <p className="mt-3 text-sm text-muted">
              You’re continuing to Batter Up’s secure booking system. This redesign
              concept does not process bookings itself.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={href}
                className={cn(buttonVariants({ variant: "primary" }))}
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                Continue to Booking
              </a>
              <button
                type="button"
                className={cn(buttonVariants({ variant: "secondary" }))}
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
