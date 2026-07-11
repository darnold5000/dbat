import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = createMetadata({
  title: "About D-BAT Avon",
  description:
    "Learn about D-BAT’s founding story and the Avon, Indiana baseball and softball training academy.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([{ name: "About", path: "/about" }])}
      />
      <PageHero
        eyebrow="About"
        title="Premier indoor baseball & softball training"
        description="D-BAT Avon is part of the D-BAT network of training academies — focused on quality instruction and a player-first environment in Avon, Indiana."
        compact
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Breadcrumbs items={[{ label: "About" }]} />
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6 text-muted leading-relaxed">
            <SectionHeading title="About D-BAT" />
            <p>
              D-BAT was founded in 1998 by Cade and Kyle Griffis. Starting with
              CEO Cade Griffis traveling to different cities giving private
              lessons, Cade and Kyle realized they had an opportunity to provide
              an indoor facility that matched the quality of players in the area.
              Their first location opened in Addison, Texas.
            </p>
            <p>
              In 2009 the D-BAT team began offering others the opportunity to own
              a D-BAT Academy. The network has grown to over 145 locations, with
              a mission to provide a quality teaching environment with
              professional instruction for players at all levels.
            </p>
            <p>
              D-BAT Academies feature well-lit, indoor climate-controlled
              facilities, invite parents into the development process, and
              include pro shops for equipment needs.
            </p>
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-lg">
            <Image
              src="/images/programs/cade-and-kyle.jpg"
              alt="D-BAT founders Cade and Kyle Griffis"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-16 rounded-lg border border-border bg-surface p-8">
          <SectionHeading
            title="Want to join the team?"
            description="Explore career opportunities across the D-BAT network."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={siteConfig.franchise.jobs}
              className={cn(buttonVariants())}
              rel="noopener noreferrer"
            >
              Explore Jobs at D-BAT
            </a>
            <a
              href={siteConfig.franchise.corporate}
              className={cn(buttonVariants({ variant: "secondary" }))}
              rel="noopener noreferrer"
            >
              Own a D-BAT
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
