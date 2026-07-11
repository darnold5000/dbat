import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  FacilityInfoCard,
  MapCard,
} from "@/components/facility/FacilityCards";
import { site } from "@/content/site";
import { ConversionSection } from "@/components/sections/ConversionSection";
import { PrimaryCTA } from "@/components/ui/cta";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Facility",
  description:
    "Tour the indoor, climate-controlled D-BAT Avon facility — cages, instruction, pro shop, and more in Avon, Indiana.",
  path: "/facility",
});

const gallery = [
  "/images/facility/avon-facility-1.jpg",
  "/images/facility/avon-facility-2.jpg",
  "/images/facility/avon-facility-3.jpg",
  "/images/facility/pro-shop-1.jpeg",
];

export default function FacilityPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([{ name: "Facility", path: "/facility" }])}
      />
      <PageHero
        eyebrow="Facility"
        title="Indoor training in Avon, Indiana"
        description="A climate-controlled academy for baseball and softball — pitching machines, rental cages, instruction, pro shop, and birthday parties."
        image="/images/facility/avon-facility-2.jpg"
        imageAlt="D-BAT Avon indoor facility"
        actions={<PrimaryCTA href="/contact">Contact Us</PrimaryCTA>}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Breadcrumbs items={[{ label: "Facility" }]} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.facilityHighlights.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-border bg-surface px-5 py-4 text-sm text-muted"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {gallery.map((src) => (
            <div key={src} className="relative aspect-[16/10] overflow-hidden rounded-lg">
              <Image
                src={src}
                alt="D-BAT Avon facility"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <FacilityInfoCard />
          <div className="space-y-6">
            <SectionHeading title="Find us" description="Hendricks County’s indoor training destination." />
            <MapCard />
          </div>
        </div>
      </div>
      <ConversionSection />
    </>
  );
}
