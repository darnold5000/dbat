"use client";

import Image from "next/image";
import { useState } from "react";
import type { Camp } from "@/content/camps";
import { BookingLink } from "@/components/booking/BookingLink";
import { analyticsEvents } from "@/lib/analytics";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CampCard({ camp }: { camp: Camp }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="overflow-hidden rounded-lg border border-border bg-surface">
        <button
          type="button"
          className="relative block aspect-[3/4] w-full bg-surface-elevated"
          onClick={() => setOpen(true)}
          aria-label={`View flyer for ${camp.title}`}
        >
          <Image
            src={camp.image}
            alt={`Flyer for ${camp.title}`}
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 33vw"
          />
        </button>
        <div className="space-y-3 p-5">
          <h3 className="font-display text-xl text-white">{camp.title}</h3>
          <p className="text-xs text-muted">
            Details on flyer. Confirm dates and pricing in the registration system.
          </p>
          <div className="flex flex-wrap gap-2">
            <BookingLink
              href={camp.registrationUrl}
              size="sm"
              eventName={analyticsEvents.campRegistration}
              eventPayload={{ camp: camp.id }}
              confirmOutbound
            >
              Register
            </BookingLink>
            <button
              type="button"
              className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}
              onClick={() => setOpen(true)}
            >
              View Flyer
            </button>
          </div>
        </div>
      </article>

      {open ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${camp.title} flyer`}
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-lg overflow-auto rounded-lg bg-surface p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={camp.image}
              alt={`Flyer for ${camp.title}`}
              width={800}
              height={1100}
              className="h-auto w-full"
            />
            <button
              type="button"
              className={cn(buttonVariants({ variant: "secondary" }), "mt-4 w-full")}
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
