# Signal Works Franchise Platform

This repo is structured so one Next.js app can power many local academies.

## Current

- **Active location:** Avon (`locations/avon`)
- Shared UI + booking/analytics/forms live at the app root
- Location facts live in typed content packs

## Add a location

1. Copy `locations/avon/` → `locations/{slug}/`
2. Replace `site`, `pricing`, `instructors`, `hero`, `gallery`, camps, memberships
3. Register the slug in `locations/index.ts`
4. Optionally add a host/path mapping for multi-tenant routing

Tomorrow the same shell can power D1 Training, martial arts, dance, swim, gymnastics, soccer, tutoring, or fitness — only the content pack changes.

## Differentiating tech (Avon demo)

- `/coach-finder` — parent questionnaire → instructor recommendations
- Facility pulse UI (ready for a live occupancy feed)
- Post-match upsells (memberships / camps / cages)
