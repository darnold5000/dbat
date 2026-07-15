import type { Metadata } from "next";
import { Oswald, Manrope } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { SiteJsonLd } from "@/components/seo/SiteJsonLd";
import { Analytics } from "@/components/seo/Analytics";
import { createMetadata } from "@/lib/metadata";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createMetadata({
  title: "Baseball & Softball Training | Batter Up",
  description:
    "Private baseball and softball lessons, indoor batting cages, camps, clinics, memberships, and year-round training at Batter Up.",
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${manrope.variable} h-full`}>
      <body className="has-mobile-action-bar min-h-full flex flex-col antialiased">
        <SiteJsonLd />
        <Analytics />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <MobileActionBar />
      </body>
    </html>
  );
}
