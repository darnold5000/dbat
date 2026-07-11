export type PricingRow = {
  item: string;
  platinum: number;
  gold: number;
  nonMember: number;
};

export const pricing = {
  lastVerified: "2026-07-11",
  validityNote:
    "Memberships are valid at all D-BAT Locations WORLDWIDE and are for INDIVIDUAL use only.",
  disclaimer:
    "Pricing shown as published on the current D-BAT Avon website. Confirm with the facility before booking.",
  walkInsNote:
    "Walk-ins are welcome. You do not need a membership to visit D-BAT Avon.",
  rows: [
    { item: "1/2 Hr Lesson", platinum: 31.5, gold: 36, nonMember: 45 },
    { item: "1 Hr Lesson", platinum: 59.5, gold: 68, nonMember: 85 },
    { item: "1/2 Hr Cage Rental", platinum: 17.5, gold: 20, nonMember: 25 },
    { item: "1 Hr Cage Rental", platinum: 35, gold: 40, nonMember: 50 },
  ] satisfies PricingRow[],
};

export function formatPrice(value: number) {
  return value % 1 === 0 ? `$${value}` : `$${value.toFixed(2)}`;
}
