# Booking Links

All outbound booking destinations are centralized in [`config/booking-links.ts`](../config/booking-links.ts). Instructor-specific URLs live in [`content/instructors.ts`](../content/instructors.ts).

Verified from https://www.dbatavon.com on 2026-07-11.

| Action | URL |
|--------|-----|
| Book a lesson (general) | `https://app.dbathub.com/customers/144-d-bat-avon/events?eventTypeFilter%5B%5D=845` |
| Rent a cage | `https://app.dbathub.com/customers/144-d-bat-avon/events?eventTypeFilter%5B%5D=843` |
| Camps & clinics listing | `https://app.dbathub.com/customers/144-d-bat-avon/events?eventTypeFilter%5B%5D=844&eventTypeFilter%5B%5D=846` |
| Become a member | `https://app.dbathub.com/customers/144-d-bat-avon/memberships` |
| Manage membership | `https://www.dbatavon.com/manage-membership` |

## Notes

- Home page CTAs on the source site often route to internal anchors (`/lessons#Lessons`, `/batting-cages#Rentals`). The rebuild points primary CTAs at the verified D-BAT Hub booking URLs for conversion.
- Manage membership is an on-site form on the live site (not D-BAT Hub). The demo preserves that official URL so membership changes are not processed on the redesign concept.
- Levi Raspberry and Peyton Norman had no individual `staffFilter` booking link on the source lessons page; they use the general lesson booking URL.
