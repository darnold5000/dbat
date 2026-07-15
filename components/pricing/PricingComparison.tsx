import { formatPrice, pricing } from "@/content/pricing";

export function PricingComparison() {
  return (
    <div className="space-y-4">
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="min-w-full text-left text-sm">
          <caption className="sr-only">Batter Up pricing comparison</caption>
          <thead className="bg-surface-elevated text-xs uppercase tracking-wide text-muted">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium">
                Option
              </th>
              <th scope="col" className="px-4 py-3 font-medium">
                Platinum $58/mo
              </th>
              <th scope="col" className="px-4 py-3 font-medium">
                Gold $38/mo
              </th>
              <th scope="col" className="px-4 py-3 font-medium">
                Non-member
              </th>
            </tr>
          </thead>
          <tbody>
            {pricing.rows.map((row) => (
              <tr key={row.item} className="border-t border-border bg-surface">
                <th scope="row" className="px-4 py-4 font-medium text-white">
                  {row.item}
                </th>
                <td className="px-4 py-4 text-muted">{formatPrice(row.platinum)}</td>
                <td className="px-4 py-4 text-muted">{formatPrice(row.gold)}</td>
                <td className="px-4 py-4 text-muted">{formatPrice(row.nonMember)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 md:hidden">
        {pricing.rows.map((row) => (
          <article key={row.item} className="rounded-lg border border-border bg-surface p-4">
            <h3 className="font-display text-lg text-white">{row.item}</h3>
            <dl className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Platinum</dt>
                <dd className="text-white">{formatPrice(row.platinum)}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Gold</dt>
                <dd className="text-white">{formatPrice(row.gold)}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Non-member</dt>
                <dd className="text-white">{formatPrice(row.nonMember)}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      <p className="text-sm text-muted">{pricing.validityNote}</p>
      <p className="text-sm text-muted">{pricing.walkInsNote}</p>
      <p className="text-xs text-muted">
        {pricing.disclaimer} Last verified: {pricing.lastVerified}.
      </p>
    </div>
  );
}
