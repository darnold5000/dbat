import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { camps, campsListingUrl } from "@/content/camps";
import { CampCard } from "@/components/camps/CampCard";
import { BookingLink } from "@/components/booking/BookingLink";
import { analyticsEvents } from "@/lib/analytics";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Camps & Clinics",
  description:
    "Browse camps and clinics at Batter Up and register through our booking system.",
  path: "/camps",
});

export default function CampsPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([{ name: "Camps & Clinics", path: "/camps" }])}
      />
      <PageHero
        eyebrow="Camps & Clinics"
        title="Register for the next session"
        description="Flyers and registration links preserved from the current Batter Up site. Confirm dates, ages, and pricing in the booking system."
        image="/images/facility/avon-facility-2.jpg"
        imageAlt="Athletes training at Batter Up"
        actions={
          <BookingLink
            href={campsListingUrl}
            eventName={analyticsEvents.campRegistration}
            confirmOutbound
          >
            Browse All Events
          </BookingLink>
        }
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Breadcrumbs items={[{ label: "Camps & Clinics" }]} />
        {camps.length === 0 ? (
          <p className="rounded-lg border border-border bg-surface p-10 text-center text-muted">
            No camps are published right now. Check back soon or call Batter Up.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {camps.map((camp) => (
              <CampCard key={camp.id} camp={camp} />
            ))}
          </div>
        )}
        <p className="mt-8 text-sm text-muted">
          {/* TODO: Owner approval needed to mark camps as upcoming vs archived and add verified dates/prices. */}
          Flyer text may include dates and prices — verify in our booking system before registering.
        </p>
      </div>
    </>
  );
}
