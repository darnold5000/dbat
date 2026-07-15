import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { cagesFaqs } from "@/content/faqs";
import { BookingLink } from "@/components/booking/BookingLink";
import { bookingLinks } from "@/config/booking-links";
import { analyticsEvents } from "@/lib/analytics";
import { SecondaryCTA } from "@/components/ui/cta";
import { ConversionSection } from "@/components/sections/ConversionSection";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/schema";
import { siteConfig } from "@/config/site";

export const metadata = createMetadata({
  title: "Batting Cages",
  description:
    "Pitching-machine cages with real baseballs and softballs, plus reservable cage rentals at Batter Up.",
  path: "/batting-cages",
});

export default function BattingCagesPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([{ name: "Batting Cages", path: "/batting-cages" }])}
      />
      <StructuredData data={faqJsonLd(cagesFaqs)} />
      <PageHero
        eyebrow="Batting Cages"
        title="Machine lanes and cage rentals"
        description="Use pitching machines for authentic swings, or reserve a rental cage for individual or team practice."
        image="/images/facility/avon-facility-3.jpg"
        imageAlt="Batting cages at Batter Up"
        actions={
          <>
            <BookingLink
              href={bookingLinks.cages}
              eventName={analyticsEvents.bookCage}
              confirmOutbound
            >
              Book Cage Rental
            </BookingLink>
            <SecondaryCTA href="/pricing">View Pricing</SecondaryCTA>
            <SecondaryCTA href="/memberships">Explore Memberships</SecondaryCTA>
          </>
        }
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Breadcrumbs items={[{ label: "Batting Cages" }]} />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-lg border border-border bg-surface p-6">
            <h2 className="font-display text-3xl text-white">Pitching-machine cages</h2>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>Our cages throw real baseballs and softballs.</li>
              <li>
                Machines accommodate baseball, slow-pitch softball, and fast-pitch
                softball.
              </li>
              <li>
                Machine lanes are first come, first served and are not reserved in
                advance.
              </li>
              <li>
                Use them with your membership or by purchasing swings.
              </li>
            </ul>
          </article>
          <article className="rounded-lg border border-border bg-surface p-6">
            <h2 className="font-display text-3xl text-white">Cage rentals</h2>
            <p className="mt-3 text-sm uppercase tracking-wide text-brand">
              Does not include pitching machines
            </p>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              Cage rentals are a great way to work individually or bring in a team
              for batting practice. Rentals are available in half-hour increments.
            </p>
            <h3 className="mt-6 font-display text-xl text-white">Included in rental</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>Baseballs / softballs</li>
              <li>Batting tee</li>
              <li>L-screen</li>
            </ul>
            <div className="mt-6">
              <BookingLink
                href={bookingLinks.cages}
                eventName={analyticsEvents.bookCage}
                confirmOutbound
              >
                Rent a Cage Today
              </BookingLink>
            </div>
          </article>
        </div>

        <div className="mt-12 rounded-lg border border-border bg-surface p-6">
          <SectionHeading title="Questions?" description="Call the facility anytime." />
          <div className="mt-6">
            <BookingLink
              href={siteConfig.phoneTel}
              variant="secondary"
              eventName={analyticsEvents.phone}
            >
              Call {siteConfig.phone}
            </BookingLink>
          </div>
        </div>

        <div className="mt-16">
          <SectionHeading title="Cage FAQ" className="mb-6" />
          <FAQAccordion items={cagesFaqs} />
        </div>
      </div>
      <ConversionSection />
    </>
  );
}
