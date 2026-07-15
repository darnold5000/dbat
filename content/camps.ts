import { bookingLinks } from "@/config/booking-links";

export type Camp = {
  id: string;
  title: string;
  image: string;
  registrationUrl: string;
  startDate?: string;
  endDate?: string;
  ageRange?: string;
  price?: string;
  status: "upcoming" | "past" | "unknown";
};

export const camps: Camp[] = [
  {
    id: "camp-hitting",
    title: "Summer Hitting Lab",
    image: "/images/programs/camp-1.jpg",
    registrationUrl: bookingLinks.camps,
    ageRange: "Ages 8–14",
    status: "upcoming",
  },
  {
    id: "camp-catching",
    title: "Catching Skills Clinic",
    image: "/images/programs/camp-2.jpg",
    registrationUrl: bookingLinks.camps,
    ageRange: "Ages 10–16",
    status: "upcoming",
  },
  {
    id: "camp-softball",
    title: "Softball Skills Camp",
    image: "/images/programs/camp-3.jpg",
    registrationUrl: bookingLinks.camps,
    ageRange: "Ages 10–14",
    status: "upcoming",
  },
  {
    id: "camp-baseball",
    title: "Baseball Skills Clinic",
    image: "/images/programs/camp-4.jpg",
    registrationUrl: bookingLinks.camps,
    ageRange: "Ages 8–12",
    status: "upcoming",
  },
  {
    id: "camp-all-aspects",
    title: "All Aspects Summer Camp",
    image: "/images/programs/camp-5.jpg",
    registrationUrl: bookingLinks.camps,
    ageRange: "Ages 7–14",
    status: "upcoming",
  },
  {
    id: "camp-live-bp",
    title: "Live Batting Practice",
    image: "/images/programs/camp-6.jpg",
    registrationUrl: bookingLinks.camps,
    ageRange: "All ages",
    status: "upcoming",
  },
];

export const campsListingUrl = bookingLinks.camps;
