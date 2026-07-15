import { siteConfig } from "@/config/site";

export const site = {
  ...siteConfig,
  hero: {
    eyebrow: "Baseball & Softball Training",
    headline: "Train With Purpose. Play With Confidence.",
    supporting:
      "Private instruction, indoor cages, camps, clinics, memberships, and year-round development for baseball and softball athletes.",
    image: "/images/facility/avon-facility-1.jpg",
    imageAlt: "Indoor training facility at Batter Up",
  },
  whyUs: [
    {
      title: "Indoor & climate controlled",
      description:
        "Train year-round regardless of Indiana weather in our indoor facility.",
    },
    {
      title: "Real balls in the machines",
      description:
        "Pitching-machine cages throw real baseballs and softballs for authentic reps.",
    },
    {
      title: "Baseball & softball instruction",
      description:
        "Professional instructors focused on the player — with parents involved in the process.",
    },
    {
      title: "Membership savings",
      description:
        "Members get machine tokens plus discounts on lessons, camps, and pro shop merchandise.",
    },
    {
      title: "Birthday party rentals",
      description:
        "Party options that fit different budgets — from DIY to more inclusive experiences.",
    },
    {
      title: "Walk-ins welcome",
      description:
        "You do not need a membership to visit. Athletes of all ages are welcome.",
    },
  ],
  facilityHighlights: [
    "Indoor climate-controlled training",
    "Baseball and softball support",
    "Pitching machines & rental cages",
    "Private instruction",
    "Pro shop",
    "Birthday parties",
  ],
} as const;
