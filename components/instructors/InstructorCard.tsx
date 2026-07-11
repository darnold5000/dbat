"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Instructor } from "@/content/instructors";
import { availabilityLabels } from "@/content/instructors";
import { BookingLink } from "@/components/booking/BookingLink";
import { analyticsEvents } from "@/lib/analytics";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function InstructorCard({ instructor }: { instructor: Instructor }) {
  const reduce = useReducedMotion();
  const availability = instructor.availability ?? "ask";

  return (
    <motion.article
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.2 }}
      className="group overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-brand/50"
    >
      <div className="relative aspect-[4/5] bg-surface-elevated">
        <Image
          src={instructor.image}
          alt={instructor.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width:768px) 100vw, 25vw"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent p-4 pt-16">
          <div className="flex flex-wrap gap-2">
            <span className="rounded bg-brand px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
              {instructor.sport}
            </span>
            <span
              className={cn(
                "rounded px-2 py-1 text-[10px] font-semibold uppercase tracking-wider",
                availability === "accepting" && "bg-success/20 text-success",
                availability === "limited" && "bg-amber-500/20 text-amber-300",
                availability === "ask" && "bg-white/10 text-muted",
              )}
            >
              {availabilityLabels[availability]}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h3 className="font-display text-xl text-white">{instructor.name}</h3>
          {instructor.yearsCoaching ? (
            <p className="mt-1 text-xs text-muted">
              {instructor.yearsCoaching}+ years coaching
            </p>
          ) : null}
        </div>

        {instructor.specialties?.length ? (
          <ul className="flex flex-wrap gap-1.5">
            {instructor.specialties.map((s) => (
              <li
                key={s}
                className="rounded border border-border px-2 py-1 text-[11px] uppercase tracking-wide text-muted"
              >
                {s}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs text-muted">
            {/* TODO: Owner to supply verified specialties */}
            Focus areas available on request — ask when booking.
          </p>
        )}

        {instructor.favoriteDrill ? (
          <p className="text-sm text-muted">
            <span className="text-white">Favorite drill:</span>{" "}
            {instructor.favoriteDrill}
          </p>
        ) : null}

        {instructor.philosophy ? (
          <p className="text-sm italic leading-relaxed text-muted">
            “{instructor.philosophy}”
          </p>
        ) : null}

        <div className="flex flex-wrap gap-2 pt-1">
          <BookingLink
            href={instructor.bookingUrl}
            size="sm"
            eventName={analyticsEvents.bookInstructor}
            eventPayload={{ instructor: instructor.slug }}
            confirmOutbound
            className="transition-transform hover:-translate-y-0.5"
          >
            Book Lesson
          </BookingLink>
          <Link
            href={`/instructors/${instructor.slug}`}
            className={cn(
              buttonVariants({ variant: "secondary", size: "sm" }),
              "transition-transform hover:-translate-y-0.5",
            )}
          >
            Profile
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
