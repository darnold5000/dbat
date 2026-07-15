import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrimaryCTA } from "@/components/ui/cta";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Pro Shop",
  description:
    "Browse bats, gloves, apparel, and accessories at the Batter Up pro shop. Members receive merchandise discounts.",
  path: "/pro-shop",
});

const photos = [
  "/images/facility/pro-shop.jpg",
  "/images/facility/hitting.jpg",
  "/images/facility/cages.jpg",
  "/images/facility/training.jpg",
  "/images/facility/interior.jpg",
  "/images/programs/camps.jpg",
];

export default function ProShopPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([{ name: "Pro Shop", path: "/pro-shop" }])}
      />
      <PageHero
        eyebrow="Pro Shop"
        title="Gear for the next session"
        description="Stock up on bats, gloves, apparel, and accessories at the Batter Up pro shop. Members save on merchandise — Gold 10% off, Platinum 15% off."
        image="/images/facility/pro-shop.jpg"
        imageAlt="Batter Up pro shop"
        actions={<PrimaryCTA href="/contact">Ask About Gear</PrimaryCTA>}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Breadcrumbs items={[{ label: "Pro Shop" }]} />
        <SectionHeading
          title="In-facility shopping"
          description="Visit the facility to browse current inventory. Online ordering is not part of this redesign concept."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((src) => (
            <div key={src} className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={src}
                alt="Pro shop merchandise at Batter Up"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
