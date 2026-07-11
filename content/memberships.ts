import { bookingLinks } from "@/config/booking-links";

export type MembershipPlan = {
  id: "platinum" | "gold";
  name: string;
  priceMonthly: number;
  badge?: string;
  benefits: string[];
  whoFits: string;
  signupUrl: string;
};

export const memberships = {
  disclaimer: "Memberships are for individual use only.",
  validityNote:
    "Memberships are valid at all D-BAT Locations WORLDWIDE and are for INDIVIDUAL use only.",
  intro:
    "D-BAT Memberships award you with discounts on lessons, camps and clinics, cage rentals, and pro shop merchandise. One of the biggest benefits to being a member is being able to use the pitching machines for free every day — the perfect way to get reps and warm up before a hitting lesson.",
  noMembershipNote:
    "No membership: a good fit if you are only taking a 30-minute lesson per week.",
  plans: [
    {
      id: "platinum",
      name: "Platinum",
      priceMonthly: 58,
      badge: "Best value",
      benefits: [
        "Unlimited pitching machine tokens per day",
        "30% off lessons",
        "30% off camps and clinics",
        "15% off pro shop merchandise",
      ],
      whoFits: "Perfect for players taking 1-hour lessons every week.",
      signupUrl: bookingLinks.membershipSignup,
    },
    {
      id: "gold",
      name: "Gold",
      priceMonthly: 38,
      benefits: [
        "15 free pitching machine tokens per day",
        "20% off lessons",
        "20% off camps and clinics",
        "10% off pro shop merchandise",
      ],
      whoFits: "Perfect for athletes who hit on the machines once a week.",
      signupUrl: bookingLinks.membershipSignup,
    },
  ] satisfies MembershipPlan[],
};
