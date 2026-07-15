import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { lessonsFaqs } from "@/content/faqs";
import { PricingComparison } from "@/components/pricing/PricingComparison";
import { BookingLink } from "@/components/booking/BookingLink";
import { bookingLinks } from "@/config/booking-links";
import { analyticsEvents } from "@/lib/analytics";
import { PrimaryCTA, SecondaryCTA } from "@/components/ui/cta";
import { ConversionSection } from "@/components/sections/ConversionSection";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Private Baseball & Softball Lessons",
  description:
    "Book private baseball and softball lessons at Batter Up. Browse instructors, compare pricing, and schedule through our booking system.",
  path: "/lessons",
});

export default function LessonsPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Lessons", path: "/lessons" },
        ])}
      />
      <StructuredData data={faqJsonLd(lessonsFaqs)} />
      <PageHero
        eyebrow="Private Lessons"
        title="Instruction built around the player"
        description="At Batter Up, lessons keep the ballplayer as the focus while involving parents during the session. Instructors work with athletes at every level — and rely on parent feedback from games."
        image="/images/facility/cages.jpg"
        imageAlt="Training at Batter Up"
        actions={
          <>
            <PrimaryCTA href="/instructors">Choose an Instructor</PrimaryCTA>
            <SecondaryCTA href="/pricing">View Pricing</SecondaryCTA>
            <BookingLink
              href={bookingLinks.lessons}
              variant="outline"
              eventName={analyticsEvents.bookLesson}
              confirmOutbound
            >
              Book a Lesson
            </BookingLink>
          </>
        }
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Breadcrumbs items={[{ label: "Lessons" }]} />
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading title="Who lessons serve" />
            <p className="text-muted leading-relaxed">
              Baseball and softball athletes looking for focused development —
              from foundational skills to advanced game preparation. Parents are
              part of the process so progress continues between sessions.
            </p>
            <SectionHeading title="How booking works" />
            <ol className="list-decimal space-y-3 pl-5 text-muted">
              <li>Browse baseball or softball instructors.</li>
              <li>Open an instructor profile or book directly.</li>
              <li>Complete scheduling in Batter Up’s secure booking system.</li>
            </ol>
          </div>
          <div className="rounded-lg border border-border bg-surface p-6">
            <h2 className="font-display text-2xl text-white">Membership savings</h2>
            <p className="mt-3 text-sm text-muted">
              Gold members save 20% on lessons. Platinum members save 30%. Compare
              full rates below or on the Pricing page.
            </p>
            <div className="mt-6">
              <PricingComparison />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <SectionHeading title="Lessons FAQ" className="mb-6" />
          <FAQAccordion items={lessonsFaqs} />
        </div>
      </div>
      <ConversionSection title="Ready to book a lesson?" />
    </>
  );
}
