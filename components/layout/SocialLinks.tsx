"use client";

import { Facebook, Instagram } from "lucide-react";
import { siteConfig } from "@/config/site";
import { trackEvent, analyticsEvents } from "@/lib/analytics";

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={className ?? "flex items-center gap-3"}>
      <a
        href={siteConfig.social.facebook}
        aria-label="D-BAT Avon on Facebook"
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border text-muted hover:text-white"
        rel="noopener noreferrer"
        onClick={() => trackEvent(analyticsEvents.social, { network: "facebook" })}
      >
        <Facebook className="size-4" />
      </a>
      <a
        href={siteConfig.social.instagram}
        aria-label="D-BAT Avon on Instagram"
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border text-muted hover:text-white"
        rel="noopener noreferrer"
        onClick={() => trackEvent(analyticsEvents.social, { network: "instagram" })}
      >
        <Instagram className="size-4" />
      </a>
    </div>
  );
}
