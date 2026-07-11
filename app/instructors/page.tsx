import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { InstructorDirectory } from "@/components/instructors/InstructorDirectory";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Instructors",
  description:
    "Meet baseball and softball instructors at D-BAT Avon and book private lessons online.",
  path: "/instructors",
});

export default function InstructorsPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([{ name: "Instructors", path: "/instructors" }])}
      />
      <PageHero
        eyebrow="Coaching staff"
        title="Find your instructor"
        description="Filter by baseball or softball, search by name, and book through D-BAT Hub."
        compact
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Breadcrumbs items={[{ label: "Instructors" }]} />
        <InstructorDirectory />
      </div>
    </>
  );
}
