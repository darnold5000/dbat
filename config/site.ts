export const siteConfig = {
  name: "D-BAT Avon",
  legalName: "D-BAT Avon",
  tagline: "Baseball & Softball Training in Avon, Indiana",
  description:
    "Private baseball and softball lessons, indoor batting cages, camps, clinics, memberships, and year-round training at D-BAT Avon.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  phone: "463-266-3228",
  phoneTel: "tel:+14632663228",
  address: {
    street: "7508 Beechwood Centre",
    unit: "Unit 700",
    city: "Avon",
    state: "IN",
    postalCode: "46123",
    country: "US",
  },
  hours: [
    { days: "Monday–Friday", open: "10:00 am", close: "9:00 pm" },
    { days: "Saturday", open: "10:00 am", close: "6:00 pm" },
    { days: "Sunday", open: "12:00 pm", close: "6:00 pm" },
  ],
  social: {
    facebook: "https://facebook.com/avonhouseofball",
    instagram: "https://instagram.com/dbatavon",
  },
  franchise: {
    corporate: "https://www.dbatfranchises.com/",
    jobs: "https://www.dbatavon.com/work-at-d-batb400e4a7",
  },
  maps: {
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=7508+Beechwood+Centre+Unit+700+Avon+IN+46123",
    embedQuery: "7508 Beechwood Centre Unit 700 Avon IN 46123",
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
