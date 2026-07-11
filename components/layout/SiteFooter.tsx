import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
import { siteConfig, formatAddress } from "@/config/site";
import { footerNav } from "@/content/navigation";
import { bookingLinks } from "@/config/booking-links";
import { SocialLinks } from "@/components/layout/SocialLinks";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Image
            src="/images/brand/dbat-logo.png"
            alt="D-BAT Avon"
            width={150}
            height={52}
            className="h-12 w-auto"
          />
          <p className="text-sm leading-relaxed text-muted">
            Indoor baseball and softball training in Avon, Indiana — private
            lessons, cages, camps, memberships, and more.
          </p>
          <SocialLinks />
        </div>

        <div>
          <h2 className="font-display text-lg text-white">Visit</h2>
          <address className="mt-4 not-italic text-sm leading-relaxed text-muted whitespace-pre-line">
            {formatAddress(true)}
          </address>
          <p className="mt-3 text-sm">
            <a href={siteConfig.phoneTel} className="text-white hover:text-brand">
              {siteConfig.phone}
            </a>
          </p>
          <ul className="mt-4 space-y-1 text-sm text-muted">
            {siteConfig.hours.map((h) => (
              <li key={h.days}>
                {h.days}: {h.open} – {h.close}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg text-white">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg text-white">Book & Membership</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={bookingLinks.lessons} className="text-muted hover:text-white">
                Book a Lesson
              </a>
            </li>
            <li>
              <a href={bookingLinks.cages} className="text-muted hover:text-white">
                Rent a Cage
              </a>
            </li>
            <li>
              <a
                href={bookingLinks.membershipSignup}
                className="text-muted hover:text-white"
              >
                Become a Member
              </a>
            </li>
            <li>
              <a
                href={bookingLinks.membershipManagement}
                className="text-muted hover:text-white"
              >
                Manage Membership
              </a>
            </li>
            <li>
              <a
                href={siteConfig.franchise.corporate}
                className="text-muted hover:text-white"
                rel="noopener noreferrer"
              >
                Own a D-BAT
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-4 py-6 text-center text-xs text-muted sm:px-6">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. D-BAT is a registered
          trademark of its respective owner. This site is an independent local
          academy page.
        </p>
        {siteConfig.demo.isDemo ? (
          <p className="mt-2">{siteConfig.demo.footerNote}</p>
        ) : null}
        <p className="mt-2 inline-flex items-center gap-3">
          <Facebook className="size-3.5 opacity-0" aria-hidden />
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Instagram className="size-3.5 opacity-0" aria-hidden />
        </p>
      </div>
    </footer>
  );
}
