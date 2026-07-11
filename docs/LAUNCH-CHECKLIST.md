# Launch Checklist

## Before owner demo

- [x] Content manifests created
- [x] Booking links centralized and verified against source
- [x] Demo `noindex` + footer Signal Works note
- [x] Forms marked demo-only without Resend env
- [x] No fabricated testimonials, credentials, or prices
- [ ] Visual QA at 320–1920px breakpoints
- [ ] Click every CTA and external booking destination
- [ ] Lighthouse pass (Performance 90+, A11y 95+, BP 95+, SEO 95+)

## Before production

- [ ] Owner approves brand asset use
- [ ] Confirm pricing, hours, instructor roster
- [ ] Replace privacy policy with Avon-approved copy
- [ ] Provide Resend + contact emails
- [ ] Provide GA4 measurement ID
- [ ] Remove `noindex` / `X-Robots-Tag`
- [ ] Configure official domain on Vercel
- [ ] Password protection removed
- [ ] Submit sitemap to Search Console
- [ ] Confirm image licensing / photography approval

## Deploy notes

- Deploy preview to a Signal Works demo subdomain
- Keep password protection enabled when available
- Do not point `dbatavon.com` until authorized
