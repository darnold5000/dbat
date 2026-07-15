"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const [forceVisible, setForceVisible] = useState(false);

  useEffect(() => {
    // Mobile Safari + IntersectionObserver can fail to fire whileInView.
    // After a short delay, show content so sections never stay stuck at opacity 0.
    const id = window.setTimeout(() => setForceVisible(true), 800);
    return () => window.clearTimeout(id);
  }, []);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={forceVisible ? { opacity: 1, y: 0 } : undefined}
      whileInView={forceVisible ? undefined : { opacity: 1, y: 0 }}
      // Avoid negative viewport margins — they often never fire on mobile Safari,
      // leaving whole sections stuck at opacity 0 (blank black scroll).
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: forceVisible ? 0.2 : 0.4, delay: forceVisible ? 0 : delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
