import { BookingLink } from "@/components/booking/BookingLink";
import { bookingLinks } from "@/config/booking-links";
import { siteConfig } from "@/config/site";
import { analyticsEvents } from "@/lib/analytics";

export function ConversionSection({
  title = "Ready for More Reps?",
  description = "Book a lesson, rent a cage, or call Batter Up to get started.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl text-white md:text-5xl">{title}</h2>
          <p className="mt-4 text-muted">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <BookingLink
            href={bookingLinks.lessons}
            eventName={analyticsEvents.bookLesson}
            confirmOutbound
          >
            Book a Lesson
          </BookingLink>
          <BookingLink
            href={bookingLinks.cages}
            variant="secondary"
            eventName={analyticsEvents.bookCage}
            confirmOutbound
          >
            Rent a Cage
          </BookingLink>
          <BookingLink
            href={siteConfig.phoneTel}
            variant="outline"
            eventName={analyticsEvents.phone}
          >
            Call Batter Up
          </BookingLink>
        </div>
      </div>
    </section>
  );
}
