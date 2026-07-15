export const bookingLinks = {
  lessons: "/contact",
  cages: "/contact",
  camps: "/camps",
  membershipSignup: "/memberships",
  membershipManagement: "/contact",
} as const;

export type BookingLinkKey = keyof typeof bookingLinks;
