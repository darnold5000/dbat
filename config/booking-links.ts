export const bookingLinks = {
  lessons:
    "https://app.dbathub.com/customers/144-d-bat-avon/events?eventTypeFilter%5B%5D=845",
  cages:
    "https://app.dbathub.com/customers/144-d-bat-avon/events?eventTypeFilter%5B%5D=843",
  camps:
    "https://app.dbathub.com/customers/144-d-bat-avon/events?eventTypeFilter%5B%5D=844&eventTypeFilter%5B%5D=846",
  membershipSignup:
    "https://app.dbathub.com/customers/144-d-bat-avon/memberships",
  membershipManagement: "https://www.dbatavon.com/manage-membership",
} as const;

export type BookingLinkKey = keyof typeof bookingLinks;
