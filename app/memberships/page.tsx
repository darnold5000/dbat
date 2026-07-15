import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MembershipComparison } from "@/components/memberships/MembershipCard";
import { memberships } from "@/content/memberships";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { membershipFaqs } from "@/content/faqs";
import { BookingLink } from "@/components/booking/BookingLink";
import { bookingLinks } from "@/config/booking-links";
import { analyticsEvents } from "@/lib/analytics";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Memberships",
  description:
    "Compare Gold and Platinum memberships at Batter Up — machine tokens, lesson discounts, and more.",
  path: "/memberships",
});

export default function MembershipsPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([{ name: "Memberships", path: "/memberships" }])}
      />
      <StructuredData data={faqJsonLd(membershipFaqs)} />
      <PageHero
        eyebrow="Memberships"
        title="Train more. Save more."
        description={memberships.intro}
        image="/images/facility/avon-facility-1.jpg"
        imageAlt="Batter Up facility"
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
              href={bookingLinks.membershipManagement}
              variant="secondary"
              eventName={analyticsEvents.membershipManage}
            >
              Manage Existing Membership
            </BookingLink>
          </>
        }
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Breadcrumbs items={[{ label: "Memberships" }]} />
        <MembershipComparison />
        <p className="mt-6 text-sm text-muted">{memberships.validityNote}</p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-surface p-5">
            <h2 className="font-display text-xl text-white">Platinum</h2>
            <p className="mt-2 text-sm text-muted">
              {memberships.plans.find((p) => p.id === "platinum")?.whoFits}
            </p>
          </div>
          <div className="rounded-lg border border-border bg-surface p-5">
            <h2 className="font-display text-xl text-white">Gold</h2>
            <p className="mt-2 text-sm text-muted">
              {memberships.plans.find((p) => p.id === "gold")?.whoFits}
            </p>
          </div>
          <div className="rounded-lg border border-border bg-surface p-5">
            <h2 className="font-display text-xl text-white">No membership</h2>
            <p className="mt-2 text-sm text-muted">{memberships.noMembershipNote}</p>
          </div>
        </div>

        <div className="mt-16">
          <SectionHeading title="Membership FAQ" className="mb-6" />
          <FAQAccordion items={membershipFaqs} />
        </div>
      </div>
    </>
  );
}
