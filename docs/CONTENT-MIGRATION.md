# Content Migration

Source site audited: https://www.batterup.example  
Capture date: 2026-07-11

## Manifests

- [`content/source-manifest.json`](../content/source-manifest.json) — business facts, booking URLs, instructors, pricing, camps, page inventory
- [`content/image-manifest.json`](../content/image-manifest.json) — downloaded assets with source URLs and alt text

## Migrated

| Area | Status |
|------|--------|
| Phone, address, hours | Verified and migrated |
| Gold / Platinum membership pricing & benefits | Verified from `/memberships` and `/menu` |
| Lesson & cage rental price table | Verified from `/menu` |
| Instructor names, sports, photos, booking links | Migrated; see gaps below |
| Camp registration event URLs | Migrated from `/camps` (titles from URL slugs) |
| Facility / cage operational rules | Migrated from `/batting-cages` |
| Social links (Facebook, Instagram) | Migrated |
| About / franchise founding story | Migrated from `/about-us` |
| Contact form notices (memberships / cancellations) | Migrated |
| Local facility & pro shop photos | Downloaded to `/public/images` |

## Intentionally excluded or rewritten

| Item | Reason |
|------|--------|
| Camps placeholder “Breathtaking colors of our planet” | Broken template copy on source |
| Pro shop travel/nature gallery headings | Broken template copy on source |
| Unverified athlete results / testimonials | Not present as verifiable content; do not invent |
| Instructor bios / credentials | Not published on source; profiles use fallback copy |
| Camp dates, ages, prices from flyer OCR | Not extracted as structured verified text; flyers shown as images |

## Gaps / owner follow-up

See [`OWNER-QUESTIONS.md`](./OWNER-QUESTIONS.md).
