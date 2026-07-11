import { bookingLinks } from "@/config/booking-links";

export type Instructor = {
  slug: string;
  name: string;
  sport: "baseball" | "softball";
  image: string;
  bookingUrl: string;
  specialties?: string[];
  bio?: string;
  credentials?: string[];
  isFeatured?: boolean;
};

export const instructors: Instructor[] = [
  {
    slug: "robb-dure",
    name: "Robb Dure",
    sport: "baseball",
    image: "/images/instructors/robb-dure.jpg",
    bookingUrl:
      "https://app.dbathub.com/customers/144-d-bat-avon/events?eventTypeFilter%5B%5D=845&staffFilter%5B%5D=493001",
    isFeatured: true,
  },
  {
    slug: "bryan-nutt",
    name: "Bryan Nutt",
    sport: "baseball",
    image: "/images/instructors/bryan-nutt.jpg",
    bookingUrl:
      "https://app.dbathub.com/customers/144-d-bat-avon/events?eventTypeFilter%5B%5D=845&staffFilter%5B%5D=862195",
    isFeatured: true,
  },
  {
    slug: "levi-raspberry",
    name: "Levi Raspberry",
    sport: "baseball",
    image: "/images/facility/avon-placeholder-a.png",
    bookingUrl: bookingLinks.lessons,
  },
  {
    slug: "brett-poindexter",
    name: "Brett Poindexter",
    sport: "baseball",
    image: "/images/facility/avon-placeholder-b.png",
    bookingUrl:
      "https://app.dbathub.com/customers/144-d-bat-avon/events?eventTypeFilter%5B%5D=845&staffFilter%5B%5D=1703369",
  },
  {
    slug: "george-stapp",
    name: "George Stapp",
    sport: "softball",
    image: "/images/instructors/george-stapp.jpg",
    bookingUrl:
      "https://app.dbathub.com/customers/144-d-bat-avon/events?eventTypeFilter%5B%5D=845&staffFilter%5B%5D=505059",
    isFeatured: true,
  },
  {
    slug: "sue-anderson",
    name: "Sue Anderson",
    sport: "softball",
    image: "/images/instructors/sue-anderson.jpg",
    bookingUrl:
      "https://app.dbathub.com/customers/144-d-bat-avon/events?eventTypeFilter%5B%5D=845&staffFilter%5B%5D=1071357",
    isFeatured: true,
  },
  {
    slug: "jeremy-vivace",
    name: "Jeremy Vivace",
    sport: "softball",
    image: "/images/instructors/jeremy-vivace.jpg",
    bookingUrl:
      "https://app.dbathub.com/customers/144-d-bat-avon/events?eventTypeFilter%5B%5D=845&staffFilter%5B%5D=1456858",
  },
  {
    slug: "rebekah-cruz",
    name: "Rebekah Cruz",
    sport: "softball",
    image: "/images/instructors/rebekah-cruz.png",
    bookingUrl:
      "https://app.dbathub.com/customers/144-d-bat-avon/events?eventTypeFilter%5B%5D=845&staffFilter%5B%5D=1117147",
  },
  {
    slug: "brandon-blackwell",
    name: "Brandon Blackwell",
    sport: "softball",
    image: "/images/instructors/brandon-blackwell.png",
    bookingUrl:
      "https://app.dbathub.com/customers/144-d-bat-avon/events?eventTypeFilter%5B%5D=845&staffFilter%5B%5D=1420682",
  },
  {
    slug: "anna-allen",
    name: "Anna Allen",
    sport: "softball",
    image: "/images/instructors/anna-allen.jpg",
    bookingUrl:
      "https://app.dbathub.com/customers/144-d-bat-avon/events?eventTypeFilter%5B%5D=845&staffFilter%5B%5D=2012438",
  },
  {
    slug: "ella-cochenour",
    name: "Ella Cochenour",
    sport: "softball",
    image: "/images/instructors/ella-cochenour.jpg",
    bookingUrl:
      "https://app.dbathub.com/customers/144-d-bat-avon/events?eventTypeFilter%5B%5D=845&staffFilter%5B%5D=2040764",
  },
  {
    slug: "peyton-norman",
    name: "Peyton Norman",
    sport: "softball",
    image: "/images/facility/avon-placeholder-c.png",
    bookingUrl: bookingLinks.lessons,
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
