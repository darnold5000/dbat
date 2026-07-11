"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQ } from "@/content/faqs";

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-lg border border-border bg-surface">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left min-h-11"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="font-display text-lg text-white">{item.question}</span>
              <ChevronDown
                className={cn(
                  "size-5 shrink-0 text-muted transition-transform",
                  isOpen && "rotate-180",
                )}
                aria-hidden
              />
            </button>
            {isOpen ? (
              <div className="px-5 pb-5 text-sm leading-relaxed text-muted">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
