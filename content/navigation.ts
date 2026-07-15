export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const primaryNav: NavItem[] = [
  {
    label: "Training",
    href: "/training",
    children: [
      { label: "Private Lessons", href: "/lessons" },
      { label: "Batting Cages", href: "/batting-cages" },
      { label: "Baseball", href: "/baseball-training" },
      { label: "Softball", href: "/softball-training" },
      { label: "Camps & Clinics", href: "/camps" },
      { label: "Birthday Parties", href: "/birthday-parties" },
    ],
  },
  {
    label: "Coaches",
    href: "/instructors",
    children: [
      { label: "All Coaches", href: "/instructors" },
      { label: "Coach Finder", href: "/coach-finder" },
    ],
  },
  {
    label: "Memberships",
    href: "/memberships",
    children: [
      { label: "Plans", href: "/memberships" },
      { label: "Pricing", href: "/pricing" },
      { label: "Pro Shop", href: "/pro-shop" },
    ],
  },
  { label: "Facility", href: "/facility" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = [
  { label: "Lessons", href: "/lessons" },
  { label: "Coaches", href: "/instructors" },
  { label: "Batting Cages", href: "/batting-cages" },
  { label: "Camps & Clinics", href: "/camps" },
  { label: "Memberships", href: "/memberships" },
  { label: "Pricing", href: "/pricing" },
  { label: "Facility", href: "/facility" },
  { label: "Birthday Parties", href: "/birthday-parties" },
  { label: "Pro Shop", href: "/pro-shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
] as const;
