# Go-Live Checklist — JX Distribution

## Pre-Launch (Complete Before Production)

> Truth-synced on 2026-03-01. Checkboxes reflect current repo state and validated commands (`npm run check`).

### Content
- [ ] All placeholder text replaced with real content
- [ ] Contact information accurate (phone, email, address) — verify against approved business copy
- [ ] Social media links point to real profiles — TikTok still placeholder in `lib/site.ts`
- [x] Product catalog complete with real products
- [ ] Pricing is accurate and approved
- [ ] About page reflects actual company info
- [ ] Legal pages ready (Privacy Policy, Terms of Service)

### Functionality
- [ ] All forms work and send emails
- [ ] Contact form tested with real email
- [x] Checkout flow implemented (WhatsApp-first workflow)
- [ ] Checkout flow tested end-to-end on live domain
- [ ] WhatsApp CTAs open correct chat and message with production number
- [ ] Error states display helpful messages

### Technical
- [x] `npm run build:static` completes without errors
- [x] No TypeScript errors
- [x] No broken imports
- [ ] Images load correctly and are optimized
- [x] 404 page renders with working navigation

### Deployment
- [x] Preview/production smoke monitor workflow exists (`.github/workflows/live-smoke.yml`)
- [ ] Preview deploy passes manual smoke test
- [ ] Staging deploy passes QA checklist
- [ ] Production deploy verified on custom domain
- [ ] SSL certificate active and valid (manual verification)
- [ ] Environment variables set in GitHub Actions secrets

### Monitoring
- [ ] Analytics configured
- [ ] Error monitoring configured
- [x] Uptime monitoring configured (scheduled smoke checks every 30 minutes)
