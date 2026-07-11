import Image from "next/image";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  actions,
  compact,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  actions?: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border",
        compact ? "py-16 md:py-20" : "py-20 md:py-28",
      )}
    >
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt || ""}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 seam-texture" />
        </>
      ) : (
        <div className="absolute inset-0 turf-grid opacity-40" />
      )}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {eyebrow ? (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl font-display text-4xl leading-none text-white md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {description}
          </p>
        ) : null}
        {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  );
}
