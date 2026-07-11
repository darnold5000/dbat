import { bookingLinks } from "@/config/booking-links";

export type AvailabilityStatus = "accepting" | "limited" | "ask";

export type Instructor = {
  slug: string;
  name: string;
  sport: "baseball" | "softball";
  image: string;
  bookingUrl: string;
  /** Only populate when verified by the owner. */
  specialties?: string[];
  yearsCoaching?: number;
  availability?: AvailabilityStatus;
  favoriteDrill?: string;
  philosophy?: string;
  bio?: string;
  credentials?: string[];
  isFeatured?: boolean;
};

/**
 * Rich profile fields (specialties, years, philosophy, drills) are left empty
 * until the owner supplies verified copy. Cards still surface sport + booking
 * status so parents can choose confidently without invented credentials.
 */
export const instructors: Instructor[] = [
  {
    slug: "robb-dure",
    name: "Robb Dure",
    sport: "baseball",
    image: "/images/instructors/robb-dure.jpg",
    bookingUrl:
      "https://app.dbathub.com/customers/144-d-bat-avon/events?eventTypeFilter%5B%5D=845&staffFilter%5B%5D=493001",
    availability: "accepting",
    isFeatured: true,
  },
  {
    slug: "bryan-nutt",
    name: "Bryan Nutt",
    sport: "baseball",
    image: "/images/instructors/bryan-nutt.jpg",
    bookingUrl:
      "https://app.dbathub.com/customers/144-d-bat-avon/events?eventTypeFilter%5B%5D=845&staffFilter%5B%5D=862195",
    availability: "accepting",
    isFeatured: true,
  },
  {
    slug: "levi-raspberry",
    name: "Levi Raspberry",
    sport: "baseball",
    image: "/images/facility/avon-placeholder-a.png",
    bookingUrl: bookingLinks.lessons,
    availability: "ask",
  },
  {
    slug: "brett-poindexter",
    name: "Brett Poindexter",
    sport: "baseball",
    image: "/images/facility/avon-placeholder-b.png",
    bookingUrl:
      "https://app.dbathub.com/customers/144-d-bat-avon/events?eventTypeFilter%5B%5D=845&staffFilter%5B%5D=1703369",
    availability: "accepting",
  },
  {
    slug: "george-stapp",
    name: "George Stapp",
    sport: "softball",
    image: "/images/instructors/george-stapp.jpg",
    bookingUrl:
      "https://app.dbathub.com/customers/144-d-bat-avon/events?eventTypeFilter%5B%5D=845&staffFilter%5B%5D=505059",
    availability: "accepting",
    isFeatured: true,
  },
  {
    slug: "sue-anderson",
    name: "Sue Anderson",
    sport: "softball",
    image: "/images/instructors/sue-anderson.jpg",
    bookingUrl:
      "https://app.dbathub.com/customers/144-d-bat-avon/events?eventTypeFilter%5B%5D=845&staffFilter%5B%5D=1071357",
    availability: "accepting",
    isFeatured: true,
  },
  {
    slug: "jeremy-vivace",
    name: "Jeremy Vivace",
    sport: "softball",
    image: "/images/instructors/jeremy-vivace.jpg",
    bookingUrl:
      "https://app.dbathub.com/customers/144-d-bat-avon/events?eventTypeFilter%5B%5D=845&staffFilter%5B%5D=1456858",
    availability: "accepting",
  },
  {
    slug: "rebekah-cruz",
    name: "Rebekah Cruz",
    sport: "softball",
    image: "/images/instructors/rebekah-cruz.png",
    bookingUrl:
      "https://app.dbathub.com/customers/144-d-bat-avon/events?eventTypeFilter%5B%5D=845&staffFilter%5B%5D=1117147",
    availability: "accepting",
  },
  {
    slug: "brandon-blackwell",
    name: "Brandon Blackwell",
    sport: "softball",
    image: "/images/instructors/brandon-blackwell.png",
    bookingUrl:
      "https://app.dbathub.com/customers/144-d-bat-avon/events?eventTypeFilter%5B%5D=845&staffFilter%5B%5D=1420682",
    availability: "accepting",
  },
  {
    slug: "anna-allen",
    name: "Anna Allen",
    sport: "softball",
    image: "/images/instructors/anna-allen.jpg",
    bookingUrl:
      "https://app.dbathub.com/customers/144-d-bat-avon/events?eventTypeFilter%5B%5D=845&staffFilter%5B%5D=2012438",
    availability: "accepting",
  },
  {
    slug: "ella-cochenour",
    name: "Ella Cochenour",
    sport: "softball",
    image: "/images/instructors/ella-cochenour.jpg",
    bookingUrl:
      "https://app.dbathub.com/customers/144-d-bat-avon/events?eventTypeFilter%5B%5D=845&staffFilter%5B%5D=2040764",
    availability: "accepting",
  },
  {
    slug: "peyton-norman",
    name: "Peyton Norman",
    sport: "softball",
    image: "/images/facility/avon-placeholder-c.png",
    bookingUrl: bookingLinks.lessons,
    availability: "ask",
  },
];

export const instructorFallbackBio =
  "Contact D-BAT Avon to learn more about this instructor’s lesson focus and availability.";

export function getInstructorBySlug(slug: string) {
  return instructors.find((i) => i.slug === slug);
}

export function getFeaturedInstructors(limit = 4) {
  const featured = instructors.filter((i) => i.isFeatured);
  return (featured.length ? featured : instructors).slice(0, limit);
}

export const availabilityLabels: Record<AvailabilityStatus, string> = {
  accepting: "Accepting bookings",
  limited: "Limited openings",
  ask: "Ask about availability",
};
