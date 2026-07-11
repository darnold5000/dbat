import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "@/components/contact/ContactForm";
import {
  FacilityInfoCard,
  HoursCard,
  MapCard,
} from "@/components/facility/FacilityCards";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { contactFaqs } from "@/content/faqs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact D-BAT Avon for general inquiries. Call for lesson or cage cancellations. Manage memberships through the membership portal.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([{ name: "Contact", path: "/contact" }])}
      />
      <StructuredData data={faqJsonLd(contactFaqs)} />
      <PageHero
        eyebrow="Contact"
        title="Talk with D-BAT Avon"
        description="General inquiries welcome. Membership changes and lesson/cage cancellations have specific processes — see notices below."
        compact
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Breadcrumbs items={[{ label: "Contact" }]} />
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <FacilityInfoCard />
            <HoursCard />
            <MapCard />
            <div className="rounded-lg border border-border bg-surface p-6">
              <h2 className="font-display text-xl text-white">Follow us</h2>
              <div className="mt-4">
                <SocialLinks />
              </div>
            </div>
          </div>
          <div>
            <SectionHeading title="Send a message" className="mb-6" />
            <ContactForm />
            <div className="mt-10">
              <SectionHeading title="Before you submit" className="mb-6" />
              <FAQAccordion items={contactFaqs} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
