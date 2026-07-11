import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getInstructorBySlug,
  instructorFallbackBio,
  instructors,
} from "@/content/instructors";
import { createMetadata } from "@/lib/metadata";
import { BookingLink } from "@/components/booking/BookingLink";
import { analyticsEvents } from "@/lib/analytics";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { InstructorCard } from "@/components/instructors/InstructorCard";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return instructors.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const instructor = getInstructorBySlug(slug);
  if (!instructor) return {};
  return createMetadata({
    title: `${instructor.name} — ${instructor.sport} instructor`,
    description: `Book lessons with ${instructor.name} at D-BAT Avon.`,
    path: `/instructors/${instructor.slug}`,
    image: instructor.image,
  });
}

export default async function InstructorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const instructor = getInstructorBySlug(slug);
  if (!instructor) notFound();

  const related = instructors
    .filter((i) => i.sport === instructor.sport && i.slug !== instructor.slug)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Instructors", href: "/instructors" },
          { label: instructor.name },
        ]}
      />
      <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-surface">
          <Image
            src={instructor.image}
            alt={instructor.name}
            fill
            className="object-cover"
            sizes="320px"
            priority
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {instructor.sport} instructor
          </p>
          <h1 className="mt-3 font-display text-5xl text-white">{instructor.name}</h1>
          <p className="mt-6 max-w-2xl text-muted leading-relaxed">
            {instructor.bio ?? instructorFallbackBio}
          </p>
          {instructor.specialties?.length ? (
            <ul className="mt-4 flex flex-wrap gap-2">
              {instructor.specialties.map((s) => (
                <li
                  key={s}
                  className="rounded border border-border px-3 py-1 text-xs uppercase tracking-wide text-muted"
                >
                  {s}
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-3">
            <BookingLink
              href={instructor.bookingUrl}
              eventName={analyticsEvents.bookInstructor}
              eventPayload={{ instructor: instructor.slug }}
              confirmOutbound
            >
              Book With {instructor.name.split(" ")[0]}
            </BookingLink>
            <Link
              href="/instructors"
              className={cn(buttonVariants({ variant: "secondary" }))}
            >
              Back to All Instructors
            </Link>
          </div>
        </div>
      </div>

      {related.length ? (
        <section className="mt-20">
          <h2 className="font-display text-3xl text-white">Related instructors</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <InstructorCard key={item.slug} instructor={item} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
