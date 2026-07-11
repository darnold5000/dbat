import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  FacilityInfoCard,
  MapCard,
} from "@/components/facility/FacilityCards";
import { ConversionSection } from "@/components/sections/ConversionSection";
import { PrimaryCTA, SecondaryCTA } from "@/components/ui/cta";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd } from "@/lib/schema";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = createMetadata({
  title: "Facility Tour",
  description:
    "Virtual tour of D-BAT Avon — indoor training, cages, machines, pro shop, birthday space, and directions in Avon, Indiana.",
  path: "/facility",
});

const tourStops = [
  {
    id: "cages",
    title: "Batting Cages",
    description:
      "Indoor cage space for individual work and team batting practice. Rentals include baseballs/softballs, a tee, and an L-screen.",
    image: "/images/facility/avon-facility-3.jpg",
    points: [
      "Half-hour rental increments",
      "Great for individuals or teams",
      "Does not include pitching machines",
    ],
  },
  {
    id: "machines",
    title: "Pitching Machines",
    description:
      "Machine lanes throw real baseballs and softballs — baseball, slow-pitch, and fast-pitch supported. First come, first served.",
    image: "/images/facility/avon-facility-2.jpg",
    points: [
      "Real baseballs and softballs",
      "Members get daily machine tokens",
      "Not reserved in advance",
    ],
  },
  {
    id: "training",
    title: "Indoor Training Floor",
    description:
      "Climate-controlled indoor environment so Avon athletes can train year-round regardless of Indiana weather.",
    image: "/images/facility/avon-facility-1.jpg",
    points: [
      "Year-round indoor access",
      "Baseball and softball ready",
      "Parent-friendly viewing",
    ],
  },
  {
    id: "pro-shop",
    title: "Pro Shop",
    description:
      "Bats, gloves, apparel, and accessories on site. Members receive merchandise discounts.",
    image: "/images/facility/pro-shop-1.jpeg",
    points: ["Gold 10% off", "Platinum 15% off", "In-facility shopping"],
  },
  {
    id: "birthday",
    title: "Birthday Party Space",
    description:
      "Party options ranging from DIY to all-inclusive — celebrate at the cages.",
    image: "/images/programs/birthday-parties.jpg",
    points: ["Flexible party formats", "Indoor celebration", "Request a date online"],
  },
  {
    id: "lobby",
    title: "Arrival & Lobby",
    description:
      "Walk-ins welcome. Check in for lessons, cages, camps, and membership questions at the front desk.",
    image: "/images/facility/hero-athlete.jpg",
    points: ["Walk-ins welcome", "Lesson & cage check-in", "Membership help"],
  },
];

const gallery = [
  "/images/facility/avon-facility-1.jpg",
  "/images/facility/avon-facility-2.jpg",
  "/images/facility/avon-facility-3.jpg",
  "/images/facility/pro-shop-1.jpeg",
  "/images/facility/pro-shop-2.jpeg",
  "/images/facility/pro-shop-3.jpg",
  "/images/programs/birthday-parties.jpg",
  "/images/facility/hero-athlete.jpg",
];

export default function FacilityPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([{ name: "Facility", path: "/facility" }])}
      />
      <PageHero
        eyebrow="Virtual tour"
        title="Step inside D-BAT Avon"
        description="Indoor cages. Real-ball machines. Pro shop. Birthday space. Explore the academy before you visit — then get directions to Beechwood Centre."
        image="/images/facility/avon-facility-2.jpg"
        imageAlt="D-BAT Avon indoor facility"
        actions={
          <>
            <PrimaryCTA href="#tour">Start the Tour</PrimaryCTA>
            <SecondaryCTA href="#map">View Map</SecondaryCTA>
          </>
        }
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <Breadcrumbs items={[{ label: "Facility" }]} />

        {/* Occupancy strip — demo concept */}
        <FadeIn>
          <div className="mb-12 rounded-lg border border-border bg-surface p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  Facility pulse
                </p>
                <h2 className="mt-2 font-display text-2xl text-white">
                  Typical weekday evenings run busy
                </h2>
                <p className="mt-2 text-sm text-muted">
                  {/* TODO: Wire live occupancy when owner provides a feed */}
                  Live occupancy is a platform concept — call ahead for current
                  machine-lane wait times.
                </p>
              </div>
              <div className="flex gap-2">
                {[
                  { label: "Open", active: false },
                  { label: "Medium", active: true },
                  { label: "Busy", active: false },
                ].map((slot) => (
                  <span
                    key={slot.label}
                    className={`min-h-11 rounded-md px-4 py-2 text-xs font-semibold uppercase tracking-wide ${
                      slot.active
                        ? "bg-brand text-white"
                        : "border border-border text-muted"
                    }`}
                  >
                    {slot.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <div id="tour" className="space-y-16 md:space-y-24">
          {tourStops.map((stop, index) => (
            <FadeIn key={stop.id}>
              <section
                id={stop.id}
                className={`grid items-center gap-8 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[16/11] overflow-hidden rounded-lg border border-border">
                  <Image
                    src={stop.image}
                    alt={stop.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    Stop {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">
                    {stop.title}
                  </h2>
                  <p className="mt-4 text-muted leading-relaxed">{stop.description}</p>
                  <ul className="mt-6 space-y-2">
                    {stop.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm text-muted before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-brand before:content-['']"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </FadeIn>
          ))}
        </div>

        <section className="mt-20">
          <SectionHeading
            title="Photo gallery"
            description="Local Avon imagery from the current facility and pro shop."
            className="mb-8"
          />
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4">
            {gallery.map((src) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden rounded-md border border-border"
              >
                <Image
                  src={src}
                  alt="D-BAT Avon facility"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width:768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted">
            {/* TODO: Owner to supply drone footage if available */}
            Drone footage can be added when the owner provides approved aerial media.
          </p>
        </section>

        <section id="map" className="mt-20 grid gap-8 lg:grid-cols-2">
          <FacilityInfoCard />
          <div className="space-y-6">
            <SectionHeading
              title="Find us"
              description="7508 Beechwood Centre, Unit 700 — Avon, IN 46123."
            />
            <MapCard />
          </div>
        </section>
      </div>
      <ConversionSection />
    </>
  );
}
