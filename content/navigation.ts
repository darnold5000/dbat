export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Training",
    href: "/training",
    children: [
      { label: "Private Lessons", href: "/lessons" },
      { label: "Batting Cages", href: "/batting-cages" },
      { label: "Baseball Training", href: "/baseball-training" },
      { label: "Softball Training", href: "/softball-training" },
      { label: "Birthday Parties", href: "/birthday-parties" },
    ],
  },
  {
    label: "Instructors",
    href: "/instructors",
    children: [
      { label: "All Instructors", href: "/instructors" },
      { label: "AI Coach Finder", href: "/coach-finder" },
    ],
  },
  { label: "Camps & Clinics", href: "/camps" },
  { label: "Memberships", href: "/memberships" },
  { label: "Facility", href: "/facility" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = [
  { label: "Lessons", href: "/lessons" },
  { label: "Instructors", href: "/instructors" },
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
