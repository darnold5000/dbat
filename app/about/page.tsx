import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = createMetadata({
  title: "About Batter Up",
  description:
    "Learn about Batter Up — indoor baseball and softball training built around player development.",
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
        description="Batter Up is focused on quality instruction and a player-first environment — private lessons, cages, camps, and year-round development."
        compact
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Breadcrumbs items={[{ label: "About" }]} />
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6 text-muted leading-relaxed">
            <SectionHeading title="About Batter Up" />
            <p>
              Batter Up started with a simple idea: give athletes a place to
              train with purpose, regardless of the weather. What began as
              private lessons grew into a full indoor academy built for serious
              reps and confident play.
            </p>
            <p>
              Today Batter Up offers private baseball and softball instruction,
              machine lanes with real balls, cage rentals, camps and clinics,
              memberships, and a stocked pro shop — all under one roof.
            </p>
            <p>
              Parents are part of the process. Coaches focus on the player,
              invite feedback from games, and help athletes build skills they
              can trust when it counts.
            </p>
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-lg">
            <Image
              src="/images/facility/interior.jpg"
              alt="Athletes training at Batter Up"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-16 rounded-lg border border-border bg-surface p-8">
          <SectionHeading
            title="Want to join the team?"
            description="Explore coaching and staff opportunities at Batter Up."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className={cn(buttonVariants())}>
              Contact Us
            </Link>
            <Link
              href="/instructors"
              className={cn(buttonVariants({ variant: "secondary" }))}
            >
              Meet the Coaches
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
