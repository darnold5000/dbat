# SEO Checklist

Demo builds must remain `noindex, nofollow` until owner approval.

## Per-page metadata

- [x] Unique title
- [x] Meta description
- [x] Canonical URL helper
- [x] Open Graph tags
- [x] Twitter card tags
- [x] Demo robots noindex

## Structured data

- [x] LocalBusiness / SportsActivityLocation
- [x] Organization
- [x] BreadcrumbList on key pages
- [x] FAQPage where FAQs exist

## Technical

- [x] `app/sitemap.ts`
- [x] `app/robots.ts` (disallow all for demo)
- [x] Redirects: `/menu` → `/pricing`, `/about-us` → `/about`, `/privacy-policy` → `/privacy`
- [x] `X-Robots-Tag: noindex, nofollow` header
- [ ] Production: remove noindex, submit sitemap, verify Search Console
- [ ] Production: confirm GA4 ID and enable analytics

## Content SEO

- [x] Avon / Hendricks County references in natural copy
- [x] Internal links between services, pricing, instructors, booking CTAs
- [x] Descriptive alt text on migrated images
- [x] Critical copy not image-only (camp flyers supplemented with titles + register links)
