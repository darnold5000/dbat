import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

const defaultOgImage = "/images/facility/avon-facility-1.jpg";

export function createMetadata({
  title,
  description,
  path = "/",
  image = defaultOgImage,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = title.includes("Batter Up")
    ? title
    : `${title} | ${siteConfig.name}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: fullTitle,
    description,
    alternates: { canonical: url },
    robots: { index: false, follow: false },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: image }],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
