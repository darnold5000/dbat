"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Phone, CalendarDays, Grid2x2, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { trackEvent, analyticsEvents } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type ActionId = "call" | "lessons" | "cage" | "coach";

const itemClass =
  "flex min-h-12 flex-col items-center justify-center gap-1 rounded-md text-[11px]";
const idleClass = "text-muted hover:bg-surface-elevated hover:text-white";
const activeClass = "bg-brand text-white";

function actionFromPath(pathname: string): ActionId | null {
  if (pathname.startsWith("/lessons")) return "lessons";
  if (pathname.startsWith("/batting-cages")) return "cage";
  if (pathname.startsWith("/coach-finder")) return "coach";
  return null;
}

export function MobileActionBar() {
  const pathname = usePathname();
  const [pressed, setPressed] = useState<ActionId | null>(null);

  // Prefer the last tap (so Call can highlight without a route change).
  const active = pressed ?? actionFromPath(pathname);

  useEffect(() => {
    setPressed(null);
  }, [pathname]);

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface/95 pb-[env(safe-area-inset-bottom,0px)] backdrop-blur md:hidden">
      <nav
        className="mx-auto grid max-w-lg grid-cols-4 gap-1 px-2 py-2"
        aria-label="Quick actions"
      >
        <a
          href={siteConfig.phoneTel}
          className={cn(itemClass, active === "call" ? activeClass : idleClass)}
          aria-current={active === "call" ? "true" : undefined}
          onClick={() => {
            setPressed("call");
            trackEvent(analyticsEvents.phone);
          }}
        >
          <Phone className="size-4" aria-hidden />
          Call
        </a>
        <Link
          href="/lessons"
          className={cn(itemClass, active === "lessons" ? activeClass : idleClass)}
          aria-current={active === "lessons" ? "page" : undefined}
          onClick={() => {
            setPressed("lessons");
            trackEvent(analyticsEvents.bookLesson);
          }}
        >
          <CalendarDays className="size-4" aria-hidden />
          Lessons
        </Link>
        <Link
          href="/batting-cages"
          className={cn(itemClass, active === "cage" ? activeClass : idleClass)}
          aria-current={active === "cage" ? "page" : undefined}
          onClick={() => {
            setPressed("cage");
            trackEvent(analyticsEvents.bookCage);
          }}
        >
          <Grid2x2 className="size-4" aria-hidden />
          Cage
        </Link>
        <Link
          href="/coach-finder"
          className={cn(itemClass, active === "coach" ? activeClass : idleClass)}
          aria-current={active === "coach" ? "page" : undefined}
          onClick={() => setPressed("coach")}
        >
          <Sparkles className="size-4" aria-hidden />
          Coach
        </Link>
      </nav>
    </div>
  );
}
