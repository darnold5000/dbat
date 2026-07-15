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
  title: "Softball Training",
  description:
    "Private softball lessons, indoor cages, and clinics at Batter Up.",
  path: "/softball-training",
});

export default function SoftballTrainingPage() {
  const softball = instructors.filter((i) => i.sport === "softball");

  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Training", path: "/training" },
          { name: "Softball Training", path: "/softball-training" },
        ])}
      />
      <PageHero
        eyebrow="Softball"
        title="Softball training"
        description="Private lessons, machine work for slow-pitch and fast-pitch, cage rentals, and clinics for softball athletes."
        image="/images/facility/training.jpg"
        imageAlt="Softball training at Batter Up"
        actions={
          <>
            <BookingLink
              href={bookingLinks.lessons}
              eventName={analyticsEvents.bookLesson}
              confirmOutbound
            >
              Book a Lesson
            </BookingLink>
            <SecondaryCTA href="/instructors">Softball Instructors</SecondaryCTA>
          </>
        }
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Training", href: "/training" },
            { label: "Softball Training" },
          ]}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {softball.map((instructor) => (
            <InstructorCard key={instructor.slug} instructor={instructor} />
          ))}
        </div>
      </div>
    </>
  );
}
