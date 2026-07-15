import { MapPin, Clock, Phone } from "lucide-react";
import { siteConfig, formatAddress } from "@/config/site";
import { BookingLink } from "@/components/booking/BookingLink";
import { analyticsEvents } from "@/lib/analytics";

export function FacilityInfoCard() {
  return (
    <div className="rounded-lg border border-border bg-surface p-6">
      <h3 className="font-display text-2xl text-white">Batter Up</h3>
      <div className="mt-5 space-y-4 text-sm text-muted">
        <p className="flex gap-3">
          <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
          <span className="whitespace-pre-line">{formatAddress(true)}</span>
        </p>
        <p className="flex gap-3">
          <Phone className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
          <a href={siteConfig.phoneTel} className="text-white hover:text-brand">
            {siteConfig.phone}
          </a>
        </p>
        <div className="flex gap-3">
          <Clock className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
          <ul className="space-y-1">
            {siteConfig.hours.map((h) => (
              <li key={h.days}>
                {h.days}: {h.open} – {h.close}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <BookingLink
          href={siteConfig.maps.directions}
          eventName={analyticsEvents.directions}
          showExternalIcon
        >
          Get Directions
        </BookingLink>
        <BookingLink
          href={siteConfig.phoneTel}
          variant="secondary"
          eventName={analyticsEvents.phone}
        >
          Call
        </BookingLink>
      </div>
    </div>
  );
}

export function HoursCard() {
  return (
    <div className="rounded-lg border border-border bg-surface p-6">
      <h3 className="font-display text-xl text-white">Hours</h3>
      <ul className="mt-4 space-y-2 text-sm text-muted">
        {siteConfig.hours.map((h) => (
          <li key={h.days} className="flex justify-between gap-4">
            <span>{h.days}</span>
            <span className="text-white">
              {h.open} – {h.close}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MapCard() {
  const query = encodeURIComponent(siteConfig.maps.embedQuery);
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-surface">
      <iframe
        title="Map of Batter Up"
        src={`https://maps.google.com/maps?q=${query}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
        className="h-72 w-full border-0 grayscale-[20%]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
