import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { instructors } from "@/content/instructors";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = [
    "",
    "/training",
    "/lessons",
    "/instructors",
    "/batting-cages",
    "/baseball-training",
    "/softball-training",
    "/coach-finder",
    "/camps",
    "/memberships",
    "/pricing",
    "/birthday-parties",
    "/facility",
    "/pro-shop",
    "/about",
    "/contact",
    "/privacy",
  ];

  const instructorRoutes = instructors.map((i) => `/instructors/${i.slug}`);

  return [...staticRoutes, ...instructorRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
