import { memberships } from "@/content/memberships";
import { BookingLink } from "@/components/booking/BookingLink";
import { analyticsEvents } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export function MembershipCard({
  planId,
  featured,
}: {
  planId: "platinum" | "gold";
  featured?: boolean;
}) {
  const plan = memberships.plans.find((p) => p.id === planId)!;
  const isFeatured = featured ?? Boolean(plan.badge);

  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-lg border bg-surface p-6",
        isFeatured ? "border-brand" : "border-border",
      )}
    >
      {plan.badge ? (
        <span className="absolute -top-3 left-6 rounded bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          {plan.badge}
        </span>
      ) : null}
      <h3 className="font-display text-3xl text-white">{plan.name}</h3>
      <p className="mt-3 font-display text-4xl text-white">
        ${plan.priceMonthly}
        <span className="text-base text-muted">/mo</span>
      </p>
      <p className="mt-3 text-sm text-muted">{plan.whoFits}</p>
      <ul className="mt-6 flex-1 space-y-3">
        {plan.benefits.map((benefit) => (
          <li key={benefit} className="flex gap-3 text-sm text-muted">
            <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-muted">{memberships.disclaimer}</p>
      <div className="mt-6">
        <BookingLink
          href={plan.signupUrl}
          className="w-full"
          eventName={analyticsEvents.membershipSignup}
          eventPayload={{ plan: plan.id }}
          confirmOutbound
        >
          Become a {plan.name} Member
        </BookingLink>
      </div>
    </article>
  );
}

export function MembershipComparison() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <MembershipCard planId="platinum" />
      <MembershipCard planId="gold" />
    </div>
  );
}
