"use client";

import Link from "next/link";
import { Phone, CalendarDays, Grid2x2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { bookingLinks } from "@/config/booking-links";
import { trackEvent, analyticsEvents } from "@/lib/analytics";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface/95 backdrop-blur md:hidden">
      <nav
        className="mx-auto grid max-w-lg grid-cols-3 gap-1 px-2 py-2"
        aria-label="Quick actions"
      >
        <a
          href={siteConfig.phoneTel}
          className="flex min-h-11 flex-col items-center justify-center gap-1 rounded-md text-xs text-muted hover:bg-surface-elevated hover:text-white"
          onClick={() => trackEvent(analyticsEvents.phone)}
        >
          <Phone className="size-4" aria-hidden />
          Call
        </a>
        <Link
          href={bookingLinks.lessons}
          className="flex min-h-11 flex-col items-center justify-center gap-1 rounded-md bg-brand text-xs text-white"
          onClick={() => trackEvent(analyticsEvents.bookLesson)}
        >
          <CalendarDays className="size-4" aria-hidden />
          Lessons
        </Link>
        <Link
          href={bookingLinks.cages}
          className="flex min-h-11 flex-col items-center justify-center gap-1 rounded-md text-xs text-muted hover:bg-surface-elevated hover:text-white"
          onClick={() => trackEvent(analyticsEvents.bookCage)}
        >
          <Grid2x2 className="size-4" aria-hidden />
          Cage
        </Link>
      </nav>
    </div>
  );
}
