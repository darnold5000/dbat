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

// Flyer images paired by registration order on the source camps page.
// Dates/prices intentionally omitted until owner verifies structured details.
export const camps: Camp[] = [
  {
    id: "87750",
    title: "MVP Sliding Class",
    image: "/images/programs/camp-flyer-2.jpg",
    registrationUrl:
      "https://app.dbathub.com/customers/144-d-bat-avon/events/87750-mvp-sliding-class",
    status: "unknown",
  },
  {
    id: "87754",
    title: "Peyton Norman's Catching Clinic",
    image: "/images/programs/camp-flyer-3.jpg",
    registrationUrl:
      "https://app.dbathub.com/customers/144-d-bat-avon/events/87754-peyton-normans-catching-clinic",
    status: "unknown",
  },
  {
    id: "83658",
    title: "Summer Softball Training (Ages 10–14)",
    image: "/images/programs/camp-flyer-4.jpg",
    registrationUrl:
      "https://app.dbathub.com/customers/144-d-bat-avon/events/83658-summer-softball-training-ages-10-14",
    status: "unknown",
  },
  {
    id: "83654",
    title: "Summer Baseball Skills Clinic",
    image: "/images/programs/camp-flyer-5.jpg",
    registrationUrl:
      "https://app.dbathub.com/customers/144-d-bat-avon/events/83654-summer-baseball-skills-clinic",
    status: "unknown",
  },
  {
    id: "83648",
    title: "All Aspects Summer Camp",
    image: "/images/programs/camp-flyer-6.jpg",
    registrationUrl:
      "https://app.dbathub.com/customers/144-d-bat-avon/events/83648-all-aspects-summer-camp",
    status: "unknown",
  },
  {
    id: "88013",
    title: "Live Batting Practice",
    image: "/images/programs/camp-flyer-7.jpg",
    registrationUrl:
      "https://app.dbathub.com/customers/144-d-bat-avon/events/88013-live-batting-practice",
    status: "unknown",
  },
];

export const campsListingUrl = bookingLinks.camps;
