import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { instructors } from "@/content/instructors";
import { InstructorCard } from "@/components/instructors/InstructorCard";
import { BookingLink } from "@/components/booking/BookingLink";
import { bookingLinks } from "@/config/booking-links";
import { analyticsEvents } from "@/lib/analytics";
import { SecondaryCTA } from "@/components/ui/cta";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Baseball Training",
  description:
    "Private baseball lessons, indoor cages, and camps at Batter Up.",
  path: "/baseball-training",
});

export default function BaseballTrainingPage() {
  const baseball = instructors.filter((i) => i.sport === "baseball");

  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Training", path: "/training" },
          { name: "Baseball Training", path: "/baseball-training" },
        ])}
      />
      <PageHero
        eyebrow="Baseball"
        title="Baseball training"
        description="Private lessons, machine work, cage rentals, and camps for baseball athletes."
        image="/images/facility/cages.jpg"
        imageAlt="Baseball training at Batter Up"
        actions={
          <>
            <BookingLink
              href={bookingLinks.lessons}
              eventName={analyticsEvents.bookLesson}
              confirmOutbound
            >
              Book a Lesson
            </BookingLink>
            <SecondaryCTA href="/instructors">Baseball Instructors</SecondaryCTA>
          </>
        }
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Training", href: "/training" },
            { label: "Baseball Training" },
          ]}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {baseball.map((instructor) => (
            <InstructorCard key={instructor.slug} instructor={instructor} />
          ))}
        </div>
      </div>
    </>
  );
}
