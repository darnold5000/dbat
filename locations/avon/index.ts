/**
 * Signal Works Franchise Platform — location content pack.
 * Avon is the first powered location. Future locations mirror this folder shape:
 * locations/{slug}/{site,pricing,instructors,hero,gallery,memberships,camps}.ts
 */
export { site as locationSite } from "@/content/site";
export { pricing as locationPricing } from "@/content/pricing";
export { instructors as locationInstructors } from "@/content/instructors";
export { memberships as locationMemberships } from "@/content/memberships";
export { camps as locationCamps } from "@/content/camps";

export const locationMeta = {
  id: "riverside",
  brand: "Batter Up",
  name: "Batter Up",
  city: "Riverside",
  state: "IN",
  slug: "riverside",
} as const;

export const hero = {
  videoUrl:
    "https://vid.cdn-website.com/c4510411/videos/LVOt8JtxRwqTqV7QE4D3_dbat-v.mp4",
  poster: "/images/brand/hero-poster.jpg",
  athleteImage: "/images/facility/hitting.jpg",
  headline: "Your Kid's Next Level Starts Here.",
  supporting:
    "Private lessons. Real balls in the cages. Camps, memberships, and year-round development.",
} as const;

export const gallery = [
  "/images/facility/interior.jpg",
  "/images/facility/training.jpg",
  "/images/facility/cages.jpg",
  "/images/facility/pro-shop.jpg",
  "/images/programs/birthday.jpg",
  "/images/programs/camps.jpg",
  "/images/facility/hitting.jpg",
] as const;
