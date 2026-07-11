import Image from "next/image";
import Link from "next/link";
import type { Instructor } from "@/content/instructors";
import { BookingLink } from "@/components/booking/BookingLink";
import { analyticsEvents } from "@/lib/analytics";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function InstructorCard({ instructor }: { instructor: Instructor }) {
  return (
    <article className="overflow-hidden rounded-lg border border-border bg-surface">
      <div className="relative aspect-[4/5] bg-surface-elevated">
        <Image
          src={instructor.image}
          alt={instructor.name}
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, 25vw"
        />
      </div>
      <div className="space-y-3 p-5">
        <div>
          <h3 className="font-display text-xl text-white">{instructor.name}</h3>
          <p className="mt-1 text-xs uppercase tracking-wider text-brand">
            {instructor.sport}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <BookingLink
            href={instructor.bookingUrl}
            size="sm"
            eventName={analyticsEvents.bookInstructor}
            eventPayload={{ instructor: instructor.slug }}
            confirmOutbound
          >
            Book
          </BookingLink>
          <Link
            href={`/instructors/${instructor.slug}`}
            className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}
          >
            Profile
          </Link>
        </div>
      </div>
    </article>
  );
}
