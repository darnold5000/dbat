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
 * Demo coach roster — fictional profiles for the Batter Up redesign concept.
 */
export const instructors: Instructor[] = [
  {
    slug: "alex-rivera",
    name: "Alex Rivera",
    sport: "baseball",
    image: "/images/facility/avon-placeholder-a.png",
    bookingUrl: bookingLinks.lessons,
    specialties: ["Hitting", "Infield"],
    yearsCoaching: 8,
    availability: "accepting",
    isFeatured: true,
  },
  {
    slug: "jordan-lee",
    name: "Jordan Lee",
    sport: "baseball",
    image: "/images/facility/avon-placeholder-b.png",
    bookingUrl: bookingLinks.lessons,
    specialties: ["Pitching", "Strength"],
    yearsCoaching: 12,
    availability: "accepting",
    isFeatured: true,
  },
  {
    slug: "sam-ortiz",
    name: "Sam Ortiz",
    sport: "baseball",
    image: "/images/facility/avon-placeholder-c.png",
    bookingUrl: bookingLinks.lessons,
    specialties: ["Catching", "Fundamentals"],
    yearsCoaching: 6,
    availability: "limited",
  },
  {
    slug: "morgan-blake",
    name: "Morgan Blake",
    sport: "baseball",
    image: "/images/facility/avon-placeholder-a.png",
    bookingUrl: bookingLinks.lessons,
    specialties: ["Outfield", "Base running"],
    yearsCoaching: 5,
    availability: "accepting",
  },
  {
    slug: "casey-morgan",
    name: "Casey Morgan",
    sport: "softball",
    image: "/images/facility/avon-placeholder-b.png",
    bookingUrl: bookingLinks.lessons,
    specialties: ["Hitting", "Slapping"],
    yearsCoaching: 10,
    availability: "accepting",
    isFeatured: true,
  },
  {
    slug: "taylor-brooks",
    name: "Taylor Brooks",
    sport: "softball",
    image: "/images/facility/avon-placeholder-c.png",
    bookingUrl: bookingLinks.lessons,
    specialties: ["Pitching", "Mechanics"],
    yearsCoaching: 9,
    availability: "accepting",
    isFeatured: true,
  },
  {
    slug: "jamie-nguyen",
    name: "Jamie Nguyen",
    sport: "softball",
    image: "/images/facility/avon-placeholder-a.png",
    bookingUrl: bookingLinks.lessons,
    specialties: ["Infield", "Defense"],
    yearsCoaching: 7,
    availability: "accepting",
  },
  {
    slug: "riley-park",
    name: "Riley Park",
    sport: "softball",
    image: "/images/facility/avon-placeholder-b.png",
    bookingUrl: bookingLinks.lessons,
    specialties: ["Catching", "Game IQ"],
    yearsCoaching: 4,
    availability: "ask",
  },
];

export const instructorFallbackBio =
  "Contact Batter Up to learn more about this instructor’s lesson focus and availability.";

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
