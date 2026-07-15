"use client";

/**
 * Section entrance wrapper. Content is always visible — we do not hide with
 * opacity:0 + whileInView, which reliably fails on first load (esp. mobile
 * Safari) and only recovers after client-side navigation.
 */
export function FadeIn({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  /** Kept for call-site compatibility; animation disabled for reliability. */
  delay?: number;
}) {
  return <div className={className}>{children}</div>;
}
