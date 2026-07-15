import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { birthdayFaqs } from "@/content/faqs";
import { BirthdayPartyInquiryForm } from "@/components/contact/BirthdayPartyInquiryForm";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Birthday Parties",
  description:
    "Request a birthday party at Batter Up. Party options range from DIY to all-inclusive.",
  path: "/birthday-parties",
  image: "/images/programs/birthday-parties.jpg",
});

export default function BirthdayPartiesPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Birthday Parties", path: "/birthday-parties" },
        ])}
      />
      <StructuredData data={faqJsonLd(birthdayFaqs)} />
      <PageHero
        eyebrow="Birthday Parties"
        title="Celebrate at the cages"
        description="Party options range from DIY to all-inclusive — find the right fit for your budget. Submitting a request does not guarantee availability."
        image="/images/programs/birthday-parties.jpg"
        imageAlt="Birthday party at Batter Up"
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Breadcrumbs items={[{ label: "Birthday Parties" }]} />
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Party overview"
              description="Host a memorable baseball or softball birthday at Batter Up’s indoor facility."
            />
            <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-lg">
              <Image
                src="/images/programs/birthday-parties.jpg"
                alt="Kids celebrating at Batter Up"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
            <p className="mt-6 text-sm text-muted">
              {/* TODO: Owner approval needed for detailed package inclusions and pricing. */}
              Package details and inclusions should be confirmed directly with the
              facility when you inquire.
            </p>
            <div className="mt-10">
              <SectionHeading title="FAQ" className="mb-6" />
              <FAQAccordion items={birthdayFaqs} />
            </div>
          </div>
          <div id="inquire">
            <SectionHeading title="Request a party" className="mb-6" />
            <BirthdayPartyInquiryForm />
          </div>
        </div>
      </div>
    </>
  );
}
