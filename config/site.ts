export const siteConfig = {
  name: "Batter Up",
  legalName: "Batter Up Training Academy",
  tagline: "Baseball & Softball Training",
  description:
    "Private baseball and softball lessons, indoor batting cages, camps, clinics, memberships, and year-round training at Batter Up.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  phone: "(317) 555-0188",
  phoneTel: "tel:+13175550188",
  address: {
    street: "4200 Diamond Way",
    unit: "Suite 100",
    city: "Riverside",
    state: "IN",
    postalCode: "46055",
    country: "US",
  },
  hours: [
    { days: "Monday–Friday", open: "10:00 am", close: "9:00 pm" },
    { days: "Saturday", open: "10:00 am", close: "6:00 pm" },
    { days: "Sunday", open: "12:00 pm", close: "6:00 pm" },
  ],
  social: {
    facebook: "https://facebook.com/batterup.academy",
    instagram: "https://instagram.com/batterup.academy",
  },
  franchise: {
    corporate: "/about",
    jobs: "/contact",
  },
  maps: {
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=4200+Diamond+Way+Suite+100+Riverside+IN+46055",
    embedQuery: "4200 Diamond Way Suite 100 Riverside IN 46055",
  },
  announcement: {
    enabled: false,
    message: "",
    href: "/camps",
  },
  demo: {
    isDemo: true,
    footerNote: "Website redesign concept prepared by Signal Works.",
  },
} as const;

export function formatAddress(multiline = false) {
  const { street, unit, city, state, postalCode } = siteConfig.address;
  if (multiline) {
    return `${street}\n${unit}\n${city}, ${state} ${postalCode}`;
  }
  return `${street}, ${unit}, ${city}, ${state} ${postalCode}`;
}
