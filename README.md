# D-BAT Avon Website Redesign Concept

Private redesign concept for [D-BAT Avon](https://www.dbatavon.com/) prepared by Signal Works.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (restrained use where needed)
- React Hook Form + Zod
- Resend (optional production email)

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

Business facts live in `/content` and `/config`. Do not invent pricing, bios, camp dates, or testimonials.

See:

- `docs/CONTENT-MIGRATION.md`
- `docs/BOOKING-LINKS.md`
- `docs/OWNER-QUESTIONS.md`
- `docs/SEO-CHECKLIST.md`
- `docs/LAUNCH-CHECKLIST.md`

## Demo safeguards

- `robots: noindex, nofollow`
- `X-Robots-Tag` response header
- Forms run in demo/log mode unless Resend env vars are set
