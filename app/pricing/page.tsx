import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PricingComparison } from "@/components/pricing/PricingComparison";
import { MembershipComparison } from "@/components/memberships/MembershipCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookingLink } from "@/components/booking/BookingLink";
import { bookingLinks } from "@/config/booking-links";
import { analyticsEvents } from "@/lib/analytics";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Pricing",
  description:
    "Compare lesson and cage rental pricing for Platinum, Gold, and non-members at Batter Up.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([{ name: "Pricing", path: "/pricing" }])}
      />
      <PageHero
        eyebrow="Pricing"
        title="Clear rates for lessons and cages"
        description="Membership discounts applied to verified current pricing. Walk-ins welcome."
        compact
        actions={
          <>
            <BookingLink
              href={bookingLinks.membershipSignup}
              eventName={analyticsEvents.membershipSignup}
              confirmOutbound
            >
              Become a Member
            </BookingLink>
            <BookingLink
              href={bookingLinks.lessons}
              variant="secondary"
              eventName={analyticsEvents.bookLesson}
              confirmOutbound
            >
              Book a Lesson
            </BookingLink>
          </>
        }
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Breadcrumbs items={[{ label: "Pricing" }]} />
        <SectionHeading title="Lesson & cage comparison" className="mb-8" />
        <PricingComparison />

        <div className="mt-20">
          <SectionHeading
            title="Membership plans"
            description="See what Gold and Platinum include."
            className="mb-8"
          />
          <MembershipComparison />
        </div>
      </div>
    </>
  );
}
