import Image from "next/image";
import Link from "next/link";
import { getFeaturedInstructors } from "@/content/instructors";
import { camps } from "@/content/camps";
import { BookingLink } from "@/components/booking/BookingLink";
import { bookingLinks } from "@/config/booking-links";
import { analyticsEvents } from "@/lib/analytics";
import { InstructorCard } from "@/components/instructors/InstructorCard";
import { MembershipComparison } from "@/components/memberships/MembershipCard";
import { CampCard } from "@/components/camps/CampCard";
import { FacilityInfoCard } from "@/components/facility/FacilityCards";
import { ConversionSection } from "@/components/sections/ConversionSection";
import { HomeHero } from "@/components/sections/HomeHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/FadeIn";
import { site } from "@/content/site";

const quickActions = [
  {
    title: "Private Lessons",
    description: "Baseball and softball instruction with parents involved in the process.",
    href: "/lessons",
    cta: "Explore Lessons",
    image: "/images/facility/hitting.jpg",
  },
  {
    title: "Batting Cages",
    description: "Real baseballs and softballs in machine lanes, plus reservable cage rentals.",
    href: "/batting-cages",
    cta: "View Cages",
    image: "/images/facility/cages.jpg",
  },
  {
    title: "Camps & Clinics",
    description: "Seasonal camps and clinics with online registration through our booking system.",
    href: "/camps",
    cta: "See Camps",
    image: "/images/programs/camps.jpg",
  },
  {
    title: "Find a Coach",
    description: "Answer a few questions and get instructor recommendations matched to your athlete.",
    href: "/coach-finder",
    cta: "Try Coach Finder",
    image: "/images/instructors/coach-1.jpg",
  },
];

export default function HomePage() {
  const featured = getFeaturedInstructors(4);
  const featuredCamps = camps.slice(0, 3);

  return (
    <>
      <HomeHero />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <FadeIn>
          <SectionHeading
            eyebrow="Get started"
            title="What can you book today?"
            description="Lessons, cages, camps — or let Coach Finder match your athlete to the right instructor."
          />
        </FadeIn>
        <div className="mt-10 grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
          {quickActions.map((action, index) => (
            <FadeIn key={action.title} delay={index * 0.05}>
              <Link
                href={action.href}
                className="group block overflow-hidden rounded-lg border border-border bg-surface transition-all hover:-translate-y-1 hover:border-brand/50"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={action.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 25vw"
                  />
                </div>
                <div className="space-y-3 p-5">
                  <h3 className="font-display text-xl text-white">{action.title}</h3>
                  <p className="text-sm text-muted">{action.description}</p>
                  <span
                    className={cn(
                      buttonVariants({ variant: "secondary", size: "sm" }),
                      "pointer-events-none",
                    )}
                  >
                    {action.cta}
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <FadeIn>
            <SectionHeading
              eyebrow="Why Batter Up"
              title="Built for serious reps"
              description="What sets Batter Up apart — presented as benefits, not fluff."
            />
          </FadeIn>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
            {site.whyUs.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.04}>
                <div className="h-full rounded-lg border border-border bg-background p-5 transition-colors hover:border-brand/40">
                  <h3 className="font-display text-xl text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Instructors"
            title="Parents pick the coach"
            description="Browse by sport, see booking status, and book through our booking system."
          />
          <div className="flex flex-wrap gap-3">
            <Link href="/coach-finder" className={cn(buttonVariants())}>
              AI Coach Finder
            </Link>
            <Link href="/instructors" className={cn(buttonVariants({ variant: "secondary" }))}>
              View All
            </Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {featured.map((instructor) => (
            <InstructorCard key={instructor.slug} instructor={instructor} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Memberships"
              title="Gold vs Platinum"
              description="Save on lessons, camps, and merchandise — plus daily pitching-machine tokens."
            />
            <div className="flex flex-wrap gap-3">
              <Link href="/pricing" className={cn(buttonVariants({ variant: "secondary" }))}>
                Compare All Pricing
              </Link>
              <BookingLink
                href={bookingLinks.membershipManagement}
                variant="ghost"
                eventName={analyticsEvents.membershipManage}
              >
                Manage Membership
              </BookingLink>
            </div>
          </div>
          <MembershipComparison />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Camps & Clinics"
            title="Upcoming offerings"
            description="Flyers and registration links from the current site. Confirm details in our booking system."
          />
          <Link href="/camps" className={cn(buttonVariants({ variant: "secondary" }))}>
            View All Camps
          </Link>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {featuredCamps.map((camp) => (
            <CampCard key={camp.id} camp={camp} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2">
          <div className="relative min-h-72 overflow-hidden rounded-lg sm:min-h-80">
            <Image
              src="/images/facility/interior.jpg"
              alt="Batter Up indoor facility"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Facility"
              title="Take the virtual tour"
              description="Cages, machines, pro shop, birthday space — then get directions."
            />
            <FacilityInfoCard />
            <Link href="/facility" className={cn(buttonVariants({ variant: "secondary" }))}>
              Explore the Facility
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid overflow-hidden rounded-lg border border-border lg:grid-cols-2">
          <div className="relative min-h-64 sm:min-h-72">
            <Image
              src="/images/programs/birthday.jpg"
              alt="Birthday party at Batter Up"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center bg-surface p-6 sm:p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Birthday Parties
            </p>
            <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
              Party options for every budget
            </h2>
            <p className="mt-4 text-muted">
              From DIY to all-inclusive experiences — request a date and the
              team will follow up about availability.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/birthday-parties" className={cn(buttonVariants())}>
                Learn More
              </Link>
              <Link
                href="/birthday-parties#inquire"
                className={cn(buttonVariants({ variant: "secondary" }))}
              >
                Request a Party
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ConversionSection />
    </>
  );
}
