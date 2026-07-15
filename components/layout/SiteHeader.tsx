"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { primaryNav } from "@/content/navigation";
import { siteConfig } from "@/config/site";
import { bookingLinks } from "@/config/booking-links";
import { BookingLink } from "@/components/booking/BookingLink";
import { analyticsEvents } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function AnnouncementBar() {
  if (!siteConfig.announcement.enabled || !siteConfig.announcement.message) {
    return null;
  }
  return (
    <div className="bg-brand px-4 py-2 text-center text-sm text-white">
      <Link href={siteConfig.announcement.href} className="underline-offset-2 hover:underline">
        {siteConfig.announcement.message}
      </Link>
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenSection(null);
    setOpenDesktop(null);
  }, [pathname]);

  const closeMenus = () => {
    setMobileOpen(false);
    setOpenSection(null);
    setOpenDesktop(null);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <AnnouncementBar />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3 shrink-0" onClick={closeMenus}>
          <Image
            src="/images/brand/batter-up-logo.png"
            alt="Batter Up"
            width={48}
            height={48}
            className="h-10 w-10 rounded-lg object-cover"
            priority
          />
          <span className="font-display text-lg tracking-wide text-white">
            Batter Up
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {primaryNav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDesktop(item.label)}
                onMouseLeave={() => setOpenDesktop(null)}
              >
                <button
                  type="button"
                  className="inline-flex min-h-11 items-center gap-1 px-3 text-sm text-muted hover:text-white"
                  aria-haspopup="true"
                  aria-expanded={openDesktop === item.label}
                  onClick={() =>
                    setOpenDesktop((current) =>
                      current === item.label ? null : item.label,
                    )
                  }
                >
                  {item.label}
                  <ChevronDown className="size-3.5" aria-hidden />
                </button>
                <div
                  className={cn(
                    "absolute left-0 top-full z-50 min-w-52 rounded-md border border-border bg-surface p-2 shadow-none transition",
                    openDesktop === item.label
                      ? "visible opacity-100"
                      : "invisible opacity-0 pointer-events-none",
                  )}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded px-3 py-2 text-sm text-muted hover:bg-surface-elevated hover:text-white"
                      onClick={closeMenus}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex min-h-11 items-center px-3 text-sm text-muted hover:text-white"
                onClick={closeMenus}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <BookingLink
            href={bookingLinks.cages}
            variant="secondary"
            size="sm"
            eventName={analyticsEvents.bookCage}
            confirmOutbound
          >
            Rent a Cage
          </BookingLink>
          <BookingLink
            href={bookingLinks.lessons}
            size="sm"
            eventName={analyticsEvents.bookLesson}
            confirmOutbound
          >
            Book a Lesson
          </BookingLink>
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-border bg-surface lg:hidden",
          mobileOpen ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-4 py-4" aria-label="Mobile">
          {primaryNav.map((item) =>
            item.children ? (
              <div key={item.label} className="border-b border-border">
                <button
                  type="button"
                  className="flex w-full min-h-12 items-center justify-between py-3 text-left text-white"
                  onClick={() =>
                    setOpenSection((current) =>
                      current === item.label ? null : item.label,
                    )
                  }
                  aria-expanded={openSection === item.label}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "size-4 transition",
                      openSection === item.label && "rotate-180",
                    )}
                  />
                </button>
                {openSection === item.label
                  ? item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2.5 pl-4 text-sm text-muted"
                        onClick={closeMenus}
                      >
                        {child.label}
                      </Link>
                    ))
                  : null}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-border py-3 text-white"
                onClick={closeMenus}
              >
                {item.label}
              </Link>
            ),
          )}
          <div className="mt-4 flex flex-col gap-2">
            <Link
              href="/coach-finder"
              className={cn(buttonVariants({ variant: "outline" }), "w-full")}
              onClick={closeMenus}
            >
              AI Coach Finder
            </Link>
            <BookingLink
              href={bookingLinks.lessons}
              eventName={analyticsEvents.bookLesson}
              confirmOutbound
              className="w-full"
            >
              Book a Lesson
            </BookingLink>
            <BookingLink
              href={bookingLinks.cages}
              variant="secondary"
              eventName={analyticsEvents.bookCage}
              confirmOutbound
              className="w-full"
            >
              Rent a Cage
            </BookingLink>
            <BookingLink
              href={bookingLinks.membershipManagement}
              variant="ghost"
              eventName={analyticsEvents.membershipManage}
              className="w-full"
            >
              Manage Membership
            </BookingLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
