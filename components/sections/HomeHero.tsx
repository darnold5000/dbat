"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Thermometer, Users, DoorOpen, Play } from "lucide-react";
import { bookingLinks } from "@/config/booking-links";
import { BookingLink } from "@/components/booking/BookingLink";
import { analyticsEvents } from "@/lib/analytics";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HERO_VIDEO =
  "https://vid.cdn-website.com/c4510411/videos/LVOt8JtxRwqTqV7QE4D3_dbat-v.mp4";
const HERO_POSTER = "/images/brand/hero-poster.jpg";

const trustItems = [
  { icon: MapPin, label: "Avon, Indiana" },
  { icon: Thermometer, label: "Indoor & climate controlled" },
  { icon: Users, label: "Baseball and softball" },
  { icon: DoorOpen, label: "Walk-ins welcome" },
];

export function HomeHero() {
  const reduceMotion = useReducedMotion();
  const [allowVideo, setAllowVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    // Prefer poster on small screens / reduced data; play video on larger viewports.
    const mq = window.matchMedia("(min-width: 768px)");
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean };
    }).connection;
    const ok =
      !reduceMotion &&
      mq.matches &&
      !connection?.saveData;
    setAllowVideo(ok);

    const onChange = () => {
      setAllowVideo(!reduceMotion && mq.matches && !connection?.saveData);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [reduceMotion]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <Image
          src={HERO_POSTER}
          alt="Athletes training at D-BAT Avon"
          fill
          priority
          className={cn(
            "object-cover brightness-[1.35] contrast-[1.08] saturate-[1.1] transition-opacity duration-700",
            videoReady ? "opacity-0" : "opacity-100",
          )}
          sizes="100vw"
        />
        {allowVideo ? (
          <video
            className={cn(
              "absolute inset-0 h-full w-full object-cover brightness-[1.4] contrast-[1.1] saturate-[1.15] transition-opacity duration-700",
              videoReady ? "opacity-100" : "opacity-0",
            )}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={HERO_POSTER}
            onCanPlay={() => setVideoReady(true)}
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
        ) : null}
      </div>

      {/* Lighter scrim — keep text readable without crushing the video */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/75 via-background/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20" />
      <div className="absolute inset-0 seam-texture opacity-30" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-28 pt-28 sm:px-6 md:justify-center md:pb-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            <Play className="size-3.5 fill-current" aria-hidden />
            Baseball & Softball Training in Avon, Indiana
          </p>
          <h1 className="font-display text-[clamp(2.75rem,10vw,5.5rem)] leading-[0.92] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">
            Your Kid&apos;s Next
            <span className="block text-brand [text-shadow:0_2px_18px_rgba(0,0,0,0.35)]">
              Level Starts Here.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg [text-shadow:0_1px_12px_rgba(0,0,0,0.4)]">
            Private lessons. Real balls in the cages. Camps, memberships, and
            year-round development — indoors, climate-controlled, built for
            baseball and softball athletes in Hendricks County.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookingLink
              href={bookingLinks.lessons}
              size="lg"
              eventName={analyticsEvents.bookLesson}
              confirmOutbound
              className="shadow-[0_0_0_1px_rgba(215,25,32,0.35)] transition-transform hover:-translate-y-0.5"
            >
              Book a Lesson
            </BookingLink>
            <BookingLink
              href={bookingLinks.cages}
              variant="secondary"
              size="lg"
              eventName={analyticsEvents.bookCage}
              confirmOutbound
              className="transition-transform hover:-translate-y-0.5"
            >
              Rent a Cage
            </BookingLink>
            <Link
              href="/coach-finder"
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "transition-transform hover:-translate-y-0.5",
              )}
            >
              Find a Coach
            </Link>
          </div>
        </motion.div>

        <motion.ul
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-10 grid max-w-3xl gap-2 sm:grid-cols-2 lg:grid-cols-4"
        >
          {trustItems.map((item) => (
            <li
              key={item.label}
              className="flex min-h-11 items-center gap-2 rounded-md border border-border/70 bg-background/55 px-3 py-2 text-sm text-muted backdrop-blur transition-colors hover:border-brand/40 hover:text-white"
            >
              <item.icon className="size-4 text-brand" aria-hidden />
              {item.label}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
