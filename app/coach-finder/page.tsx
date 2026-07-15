import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CoachFinder } from "@/components/instructors/CoachFinder";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = createMetadata({
  title: "AI Coach Finder",
  description:
    "Answer a few questions and get Batter Up instructor recommendations matched to your athlete’s sport and goals.",
  path: "/coach-finder",
});

export default function CoachFinderPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Instructors", path: "/instructors" },
          { name: "Coach Finder", path: "/coach-finder" },
        ])}
      />
      <PageHero
        eyebrow="Signal Works technology"
        title="AI Coach Finder"
        description="Parents don’t want a directory — they want a recommendation. Tell us about your athlete and we’ll suggest our instructors to book."
        image="/images/facility/hitting.jpg"
        imageAlt="Athlete training imagery from Batter Up"
        compact
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
        <Breadcrumbs
          items={[
            { label: "Instructors", href: "/instructors" },
            { label: "Coach Finder" },
          ]}
        />
        <CoachFinder />
      </div>
    </>
  );
}
