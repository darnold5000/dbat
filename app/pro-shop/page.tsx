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
    "Browse bats, gloves, apparel, and accessories at the D-BAT Avon pro shop. Members receive merchandise discounts.",
  path: "/pro-shop",
});

const photos = [
  "/images/facility/pro-shop-1.jpeg",
  "/images/facility/pro-shop-2.jpeg",
  "/images/facility/pro-shop-3.jpg",
  "/images/facility/pro-shop-4.jpeg",
  "/images/facility/pro-shop-5.jpg",
  "/images/facility/pro-shop-6.jpg",
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
        description="Stock up on bats, gloves, apparel, and accessories at the Avon pro shop. Members save on merchandise — Gold 10% off, Platinum 15% off."
        image="/images/facility/pro-shop-1.jpeg"
        imageAlt="D-BAT Avon pro shop"
        actions={<PrimaryCTA href="/contact">Ask About Gear</PrimaryCTA>}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Breadcrumbs items={[{ label: "Pro Shop" }]} />
        <SectionHeading
          title="In-facility shopping"
          description="Visit the Avon location to browse current inventory. Online ordering is not part of this redesign concept."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((src) => (
            <div key={src} className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={src}
                alt="Pro shop merchandise at D-BAT Avon"
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
