"use client";

import { useMemo, useState } from "react";
import { instructors } from "@/content/instructors";
import { InstructorCard } from "@/components/instructors/InstructorCard";
import { cn } from "@/lib/utils";

type Filter = "all" | "baseball" | "softball";

export function InstructorDirectory() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return instructors.filter((i) => {
      const matchesSport = filter === "all" || i.sport === filter;
      const matchesQuery = i.name.toLowerCase().includes(query.toLowerCase());
      return matchesSport && matchesQuery;
    });
  }, [filter, query]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by sport">
          {(
            [
              ["all", "All"],
              ["baseball", "Baseball"],
              ["softball", "Softball"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              role="tab"
              aria-selected={filter === value}
              className={cn(
                "min-h-11 rounded-md px-4 text-sm uppercase tracking-wide",
                filter === value
                  ? "bg-brand text-white"
                  : "border border-border text-muted hover:text-white",
              )}
              onClick={() => setFilter(value)}
            >
              {label}
            </button>
          ))}
        </div>
        <label className="block w-full md:max-w-xs">
          <span className="sr-only">Search instructors</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name"
            className="min-h-11 w-full rounded-md border border-border bg-surface px-4 text-white placeholder:text-muted"
          />
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-lg border border-border bg-surface p-8 text-center text-muted">
          No instructors match your search.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((instructor) => (
            <InstructorCard key={instructor.slug} instructor={instructor} />
          ))}
        </div>
      )}
    </div>
  );
}
