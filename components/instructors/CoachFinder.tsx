"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { instructors, type Instructor } from "@/content/instructors";
import { BookingLink } from "@/components/booking/BookingLink";
import { analyticsEvents } from "@/lib/analytics";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sparkles, ArrowRight, RotateCcw } from "lucide-react";

type Answers = {
  age: string;
  sport: "baseball" | "softball" | "";
  goal: string;
  experience: string;
  budget: string;
};

const goals = [
  { id: "hitting", label: "Hitting / offense" },
  { id: "pitching", label: "Pitching / defense" },
  { id: "catching", label: "Catching" },
  { id: "all-around", label: "All-around development" },
  { id: "confidence", label: "Confidence & fundamentals" },
];

const experienceLevels = [
  { id: "beginner", label: "New to lessons" },
  { id: "rec", label: "Rec / travel starter" },
  { id: "competitive", label: "Competitive travel" },
];

const budgets = [
  { id: "trial", label: "Trying one lesson first" },
  { id: "weekly", label: "Weekly lessons" },
  { id: "member", label: "Considering a membership" },
];

function scoreInstructor(instructor: Instructor, answers: Answers) {
  let score = 0;
  const reasons: string[] = [];

  if (answers.sport && instructor.sport === answers.sport) {
    score += 50;
    reasons.push(`Matches ${answers.sport}`);
  }

  if (instructor.availability === "accepting") {
    score += 15;
    reasons.push("Accepting bookings");
  } else if (instructor.availability === "ask") {
    score += 5;
  }

  if (instructor.isFeatured) {
    score += 10;
    reasons.push("Featured on staff roster");
  }

  if (!instructor.image.includes("placeholder")) {
    score += 5;
  }

  if (answers.goal === "all-around" || answers.goal === "confidence") {
    score += 8;
    reasons.push("Strong fit for development-focused lessons");
  }

  if (answers.budget === "member") {
    score += 5;
    reasons.push("Pairs well with membership savings on lessons");
  }

  if (answers.experience === "beginner" && answers.goal === "confidence") {
    score += 6;
  }

  return { score, reasons };
}

export function CoachFinder() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    age: "",
    sport: "",
    goal: "",
    experience: "",
    budget: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const results = useMemo(() => {
    if (!submitted || !answers.sport) return [];
    return instructors
      .map((instructor) => {
        const { score, reasons } = scoreInstructor(instructor, answers);
        return { instructor, score, reasons };
      })
      .filter((r) => r.score >= 50)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  }, [answers, submitted]);

  const steps = [
    {
      key: "sport",
      title: "What sport?",
      body: (
        <div className="grid gap-3 sm:grid-cols-2">
          {(["baseball", "softball"] as const).map((sport) => (
            <Choice
              key={sport}
              active={answers.sport === sport}
              onClick={() => setAnswers((a) => ({ ...a, sport }))}
              label={sport}
            />
          ))}
        </div>
      ),
      valid: Boolean(answers.sport),
    },
    {
      key: "age",
      title: "Athlete age",
      body: (
        <input
          type="number"
          min={4}
          max={18}
          inputMode="numeric"
          placeholder="e.g. 11"
          value={answers.age}
          onChange={(e) => setAnswers((a) => ({ ...a, age: e.target.value }))}
          className="min-h-12 w-full rounded-md border border-border bg-background px-4 text-white"
        />
      ),
      valid: Boolean(answers.age),
    },
    {
      key: "goal",
      title: "Primary goal",
      body: (
        <div className="grid gap-3">
          {goals.map((goal) => (
            <Choice
              key={goal.id}
              active={answers.goal === goal.id}
              onClick={() => setAnswers((a) => ({ ...a, goal: goal.id }))}
              label={goal.label}
            />
          ))}
        </div>
      ),
      valid: Boolean(answers.goal),
    },
    {
      key: "experience",
      title: "Experience level",
      body: (
        <div className="grid gap-3">
          {experienceLevels.map((level) => (
            <Choice
              key={level.id}
              active={answers.experience === level.id}
              onClick={() =>
                setAnswers((a) => ({ ...a, experience: level.id }))
              }
              label={level.label}
            />
          ))}
        </div>
      ),
      valid: Boolean(answers.experience),
    },
    {
      key: "budget",
      title: "How are you planning to train?",
      body: (
        <div className="grid gap-3">
          {budgets.map((budget) => (
            <Choice
              key={budget.id}
              active={answers.budget === budget.id}
              onClick={() => setAnswers((a) => ({ ...a, budget: budget.id }))}
              label={budget.label}
            />
          ))}
        </div>
      ),
      valid: Boolean(answers.budget),
    },
  ];

  function reset() {
    setStep(0);
    setSubmitted(false);
    setAnswers({ age: "", sport: "", goal: "", experience: "", budget: "" });
  }

  return (
    <div className="rounded-lg border border-border bg-surface p-5 sm:p-8">
      <div className="mb-6 flex items-start gap-3">
        <div className="rounded-md bg-brand/15 p-2 text-brand">
          <Sparkles className="size-5" aria-hidden />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Signal Works · Coach Finder
          </p>
          <h2 className="mt-1 font-display text-2xl text-white sm:text-3xl">
            Match your athlete to an instructor
          </h2>
          <p className="mt-2 text-sm text-muted">
            Recommendations use verified roster data (sport, booking status,
            featured coaches). Specialties and bios can deepen matches once the
            owner supplies them.
          </p>
        </div>
      </div>

      {!submitted ? (
        <>
          <div className="mb-6 flex gap-1">
            {steps.map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-1 flex-1 rounded-full transition-colors",
                  i <= step ? "bg-brand" : "bg-border",
                )}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={steps[step].key}
              initial={reduce ? false : { opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="font-display text-xl text-white">
                {steps[step].title}
              </h3>
              <div className="mt-5">{steps[step].body}</div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex flex-wrap gap-3">
            {step > 0 ? (
              <button
                type="button"
                className={cn(buttonVariants({ variant: "secondary" }))}
                onClick={() => setStep((s) => s - 1)}
              >
                Back
              </button>
            ) : null}
            {step < steps.length - 1 ? (
              <button
                type="button"
                className={cn(buttonVariants())}
                disabled={!steps[step].valid}
                onClick={() => setStep((s) => s + 1)}
              >
                Continue
                <ArrowRight className="size-4" aria-hidden />
              </button>
            ) : (
              <button
                type="button"
                className={cn(buttonVariants())}
                disabled={!steps[step].valid}
                onClick={() => setSubmitted(true)}
              >
                See Recommendations
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted">
              Top matches for a {answers.age}-year-old {answers.sport} athlete
            </p>
            <button
              type="button"
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
              onClick={reset}
            >
              <RotateCcw className="size-4" aria-hidden />
              Start over
            </button>
          </div>

          {results.length === 0 ? (
            <p className="rounded-md border border-border bg-background p-6 text-sm text-muted">
              No strong matches yet. Browse all instructors or call Batter Up
              for a recommendation.
            </p>
          ) : (
            <div className="grid gap-4">
              {results.map(({ instructor, reasons }, index) => (
                <motion.article
                  key={instructor.slug}
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="grid gap-4 rounded-lg border border-border bg-background p-4 sm:grid-cols-[96px_1fr_auto] sm:items-center"
                >
                  <div className="relative mx-auto aspect-square w-24 overflow-hidden rounded-md sm:mx-0">
                    <Image
                      src={instructor.image}
                      alt={instructor.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-brand">
                      Match #{index + 1} · {instructor.sport}
                    </p>
                    <h3 className="font-display text-2xl text-white">
                      {instructor.name}
                    </h3>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {reasons.slice(0, 3).map((reason) => (
                        <li
                          key={reason}
                          className="rounded border border-border px-2 py-1 text-[11px] text-muted"
                        >
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:flex-col">
                    <BookingLink
                      href={instructor.bookingUrl}
                      size="sm"
                      eventName={analyticsEvents.bookInstructor}
                      eventPayload={{
                        instructor: instructor.slug,
                        source: "coach_finder",
                      }}
                      confirmOutbound
                    >
                      Book
                    </BookingLink>
                    <Link
                      href={`/instructors/${instructor.slug}`}
                      className={cn(
                        buttonVariants({ variant: "secondary", size: "sm" }),
                      )}
                    >
                      Profile
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          <div className="rounded-md border border-border bg-background p-4 text-sm text-muted">
            Next step ideas:{" "}
            <Link href="/memberships" className="text-white underline-offset-2 hover:underline">
              compare memberships
            </Link>
            ,{" "}
            <Link href="/camps" className="text-white underline-offset-2 hover:underline">
              browse camps
            </Link>
            , or{" "}
            <Link href="/batting-cages" className="text-white underline-offset-2 hover:underline">
              rent a cage
            </Link>{" "}
            to warm up before the first lesson.
          </div>
        </div>
      )}
    </div>
  );
}

function Choice({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "min-h-12 rounded-md border px-4 text-left text-sm capitalize transition-all",
        active
          ? "border-brand bg-brand/15 text-white"
          : "border-border text-muted hover:border-brand/40 hover:text-white",
      )}
    >
      {label}
    </button>
  );
}
