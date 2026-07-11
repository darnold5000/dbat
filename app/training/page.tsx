import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Training",
  description:
    "Explore private lessons, batting cages, baseball training, softball training, and birthday parties at D-BAT Avon.",
  path: "/training",
});

const links = [
  {
    title: "Private Lessons",
    href: "/lessons",
    description: "Book baseball or softball instruction with Avon coaches.",
  },
  {
    title: "Batting Cages",
    href: "/batting-cages",
    description: "Machine lanes and reservable cage rentals.",
  },
  {
    title: "Baseball Training",
    href: "/baseball-training",
    description: "Baseball-focused lessons, cages, and camps.",
  },
  {
    title: "Softball Training",
    href: "/softball-training",
    description: "Softball-focused lessons, cages, and camps.",
  },
  {
    title: "Birthday Parties",
    href: "/birthday-parties",
    description: "Celebrate with cage time and party packages.",
  },
];

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Training"
        title="Everything for development"
        description="Choose the path that fits your athlete — lessons, cages, sport-specific training, or parties."
        compact
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Breadcrumbs items={[{ label: "Training" }]} />
        <div className="grid gap-4 md:grid-cols-2">
          {links.map((item) => (
            <article
              key={item.href}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <h2 className="font-display text-2xl text-white">{item.title}</h2>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
              <Link
                href={item.href}
                className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "mt-5")}
              >
                Learn more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
