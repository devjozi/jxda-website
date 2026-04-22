# MASTER TODO — JX Distribution Africa Website

**Generated:** 2026-03-09
**Sources:** PROJECT_PLAN.md · PROGRESS.md · GO_LIVE_CHECKLIST.md · session notes
**Branch:** `feat/shop-core-refactor`

> This is the single source of truth for all open work.
> Update status inline: `[ ]` = pending · `[~]` = in progress · `[x]` = done

---

## 🚨 GROUP 1 — CRITICAL BLOCKERS (Fix Before Anything Else)

- [~] **Shop core refactor on dedicated branch** — Buy Now + qty controls + checkout modal + WhatsApp checkout cleanup are being implemented on `feat/shop-core-refactor`
- [x] **Enforce main → develop sync before feature PR flow** — `develop` was 19 commits behind `main`; synced via PR #71 and follow-up ancestry PR #72
- [x] **Retarget active feature PR to develop** — PR #70 base moved from `main` to `develop` after branch rebase
- [x] **Branch clutter cleanup pass complete** — stale local/remote branches removed after sync merge; retained `codex/pr58` and `codex/pr63` for manual review

These are blocking the entire CI/CD pipeline and the preview environment.

- [ ] **Audit GitHub Actions secrets** — verify all six secrets exist and are correct in GitHub → Settings → Secrets → Actions
  - `HOSTINGER_SSH_KEY` — private key, no trailing whitespace
  - `HOSTINGER_HOST` — Hostinger server hostname
  - `HOSTINGER_USER` — SSH username
  - `HOSTINGER_PORT` — must be `65002` (not `22`, Hostinger uses non-standard port)
  - `HOSTINGER_DEPLOY_PATH_PROD` — e.g. `/home/username/public_html`
  - `HOSTINGER_DEPLOY_PATH_PREVIEW` — e.g. `/home/username/public_html/preview`
  - Branch: `fix/cicd-secrets-audit`

- [ ] **Add `preview` subdomain in Hostinger hPanel**
  - hPanel → Domains → Subdomains → add `preview.jxdistributionafrica.com`
  - Point document root to `/public_html/preview` (must match `HOSTINGER_DEPLOY_PATH_PREVIEW`)
  - **This is a Hostinger admin action, not a code change**

- [ ] **Fix `www.` prefix in live-smoke.yml preview URL check**
  - File: `.github/workflows/live-smoke.yml`
  - Change `https://www.preview.jxdistributionafrica.com` → `https://preview.jxdistributionafrica.com`
  - Branch: `fix/cicd-secrets-audit`

- [ ] **Confirm `.htaccess.hostinger` is copied to `out/.htaccess` during build**
  - Check `package.json` `build:static` script — ensure `cp .htaccess.hostinger out/.htaccess` runs
  - Without this, SPA routing breaks on both production and preview
  - Branch: `fix/cicd-secrets-audit`

---

## ⚡ GROUP 2 — QUICK WINS (One PR, Low Risk)

Small config/content fixes. Can all ship together in one branch.
Suggested branch: `fix/content-quick-wins`

- [ ] **Update company address site-wide**
  - File: `lib/site.ts:10`
  - Change: `'Headquartered in Ghana with operations across all 16 regions'`
  - To: `'GE-225-5007 Kwabenya / Taifa North, Accra, Ghana'`

- [ ] **Update Sales Channel Metrics numbers**
  - File: `lib/home-content.ts:35-54`
  - Change values to: **63,041** retailers · **36,200** wholesalers · **9,800** key accounts
  - Labels already say "across West Africa" ✓ — no change needed there
  - > Note: The `.counterUp` class is already in the homepage template (`app/page.tsx:451`). For animated counting-up numbers, the Bootstrap/template JS handles this automatically when the section scrolls into view. The values in `home-content.ts` are the final target numbers the animation counts up to. To update them in future: just change the three `value:` fields in `lib/home-content.ts` and rebuild. Long-term: managed from Sanity CMS (Sprint 11A).

- [ ] **Wire service7 and service8 images to correct homepage service cards**
  - File: `app/page.tsx:328,333`
  - "Call Center Services for Companies" → change `service2.jpg` to `service7.jpg` (or `.png` — match your uploaded filename exactly)
  - "Sales Automation & Reporting" → change `service6.jpg` to `service8.jpg`
  - Confirm filenames at: `public/images/services/service7.*` and `service8.*`

- [ ] **Implement interactive map on Contact page**
  - File: `app/contact/page.tsx:36-47`
  - Replace placeholder `<div>` with Google Maps embed iframe for `GE-225-5007 Kwabenya / Taifa North`
  - Steps: google.com/maps → search the address → Share → Embed a map → copy iframe src → insert
  - No API key required for basic embed

- [ ] **Verify TikTok social link is live**
  - File: `lib/site.ts:21`
  - Confirm `https://www.tiktok.com/@jxdistribution` is the correct handle

---

## 📝 GROUP 3 — CONTENT FEATURES (New, User-Raised)

New sections and content to add to the site. Each should be its own branch.

- [ ] **Add Pillars of Marketing section**
  - Identify the best page location (About page or a dedicated section on homepage between FAQ and Facts)
  - Content to be provided — create a placeholder section structure first
  - Branch: `feature/pillars-of-marketing`

- [ ] **Add Company Organogram & Leadership section**
  - Include: MD profile (name, photo, bio), other team members, shareholders
  - Best location: About page (`app/about/page.tsx`) — add after existing company info
  - Requires: profile photos and bios from stakeholder
  - Branch: `feature/company-organogram`

- [ ] **Add Subsidiaries section**
  - Location: About page or a new `/subsidiaries` route depending on content depth
  - Content to be provided
  - Branch: `feature/subsidiaries`

- [ ] **Add Partners/Brands section**
  - Brands to feature: SOLEVO, Green Energy, Chamber of Commerce, PPA Ghana
  - Best location: Homepage (after Facts section) or About page
  - Requires: partner logos (PNG/SVG, preferably on white/transparent background)
  - Branch: `feature/partners-brands`

- [ ] **Update full site with production-ready pictures**
  - For same-filename replacements: upload directly via Hostinger File Manager FTP to `public_html/images/<folder>/` — no rebuild needed
  - For new filenames or new image slots: add to `public/images/`, update references in code, rebuild
  - Folders to update: `/images/banner/`, `/images/slider/`, `/images/services/`, `/images/clients/`, `/images/parallax/`, `/images/team/`
  - Branch (if code changes needed): `fix/production-images`

---

## 🎨 GROUP 4 — UX & DESIGN

- [ ] **Fix navbar button symmetry**
  - Reported: nav buttons not displaying symmetrically
  - File: `app/components/Header.tsx` — inspect padding/margin/flex alignment of nav items
  - Branch: `fix/navbar-symmetry`

- [ ] **Define and document User Journeys for JX Shop**
  - Map the full customer flow: landing → shop → product detail → add to cart → checkout → WhatsApp order
  - Also map: brand partner journey (hero → services → contact/WhatsApp)
  - Document in `USER_JOURNEYS.md` with flow diagrams or step-by-step descriptions
  - Branch: `docs/user-journeys`

- [ ] **UI/UX polish: Apple-like, Uber-inspired interface**
  - Covers: micro-animations, scroll-triggered reveals, clean transitions, tactile button feel
  - Principles: minimal motion, purposeful feedback, fast perceived performance, premium feel
  - Respects `prefers-reduced-motion`
  - Maps to **Sprint 9** (`feature/minimal-motion-polish`) in PROJECT_PLAN.md
  - Branch: `feature/minimal-motion-polish`

---

## 🛠️ GROUP 5 — SPRINT BACKLOG (From PROJECT_PLAN.md, Not Started)

### Sprint 2 — Product Catalog (partial)
- [ ] Search for and download production-ready product images | Branch: `feature/product-catalog`
- [ ] Optimize images for web (< 200KB each) | Branch: `feature/product-catalog`
- [ ] Update homepage services section images with licensed assets | Branch: `feature/product-catalog`

### Sprint 3 — Cart & Checkout (partial)
- [ ] Implement checkout form validation | Branch: `feature/checkout-flow`
- [ ] Create order submission API route | Branch: `feature/checkout-flow`
- [ ] Send order confirmation email (Resend) | Branch: `feature/checkout-flow`
- [ ] Shop page e-commerce redesign | Branch: `feature/shop-redesign`

### Sprint 4 — Content & Branding
- [ ] Replace placeholder FAQ answers with real JX answers | Branch: `feature/faq-updates`
- [ ] Add real client testimonials (or confirm current placeholders) | Branch: `feature/testimonials-update`
- [ ] Update About page: real copy, real image, real core values | Branch: `feature/about-page-updates`
- [ ] Remove "Don't miss a thing" section from About | Branch: `feature/about-page-updates`
- [ ] Update footer: white logo, JX slogan, remove template copyright | Branch: `feature/footer-branding`
- [ ] Update social media links in footer | Branch: `feature/footer-branding`

### Sprint 5 — Additional Pages
- [ ] Implement newsletter signup (Mailchimp/Brevo free tier) | Branch: `feature/newsletter`
- [ ] Complete Contact page: full info and working form verification | Branch: `feature/contact-page-updates`

### Sprint 6 — UX & Responsive
- [ ] Fix mobile nav dropdown not closing | Branch: `fix/mobile-navigation`
- [ ] Test and fix logo responsiveness across breakpoints | Branch: `fix/responsive-images`
- [ ] Cross-browser testing (Chrome, Safari, Firefox, mobile) | Branch: `fix/browser-compatibility`
- [ ] Accessibility audit (WCAG 2.1 AA target) | Branch: `fix/accessibility`
- [ ] Lighthouse performance pass (target > 90) | Branch: `fix/performance`

### Sprint 10 — Pre-Launch Quality
- [ ] Replace services section images with licensed production assets (Sprint 10.1) | Branch: `feature/services-image-refresh`
- [ ] Verify and approve product prices against shared pricelist (Sprint 10.2) — needs stakeholder input | Branch: `chore/price-verification`
- [ ] Add animated WhatsApp delivery promise broadcast (1h–48h CTA) (Sprint 10.9) | Branch: `feature/delivery-promise-banner`
- [ ] Add animated product highlight text, cookie/preference aware (Sprint 10.8) | Branch: `feature/personalized-motion-copy`

### Sprint 7 — SEO & Analytics
- [ ] Add meta tags to all pages | Branch: `feature/seo-metadata`
- [ ] Generate sitemap.xml | Branch: `feature/seo-metadata`
- [ ] Add robots.txt | Branch: `feature/seo-metadata`
- [ ] Add structured data (schema.org) | Branch: `feature/seo-metadata`
- [ ] Add Google Analytics (GA4) | Branch: `feature/analytics`
- [ ] Add error monitoring (Sentry free tier) | Branch: `feature/monitoring`

---

## ✈️ GROUP 6 — GO-LIVE CHECKLIST (Pre-Launch Gates)

From `GO_LIVE_CHECKLIST.md` — must all be checked before merging to `main`:

### Content
- [ ] All placeholder text replaced with real content
- [ ] Contact info verified: phone, email, address (address update in Group 2 above)
- [ ] Pricing accurate and approved (stakeholder sign-off required)
- [ ] About page reflects actual company info
- [ ] Legal pages ready: Privacy Policy + Terms of Service
- [ ] Services section images replaced with licensed production assets

### Functionality
- [ ] All forms tested and sending emails
- [ ] Contact form tested with real email end-to-end
- [ ] Checkout flow tested on live domain
- [ ] WhatsApp CTAs open correct chat with production number
- [ ] Error states display helpful messages
- [ ] Delivery promise broadcast copy approved and implemented

### Technical
- [ ] All images load correctly and are optimised
- [ ] Preview deploy passes manual smoke test (blocked by Group 1)
- [ ] Staging deploy passes QA checklist
- [ ] Production deploy verified on custom domain
- [ ] SSL certificate active and valid
- [ ] All GitHub Actions secrets set correctly (blocked by Group 1)

### Monitoring
- [ ] Google Analytics configured and receiving data
- [ ] Error monitoring (Sentry) configured

---

## 🔭 GROUP 7 — FUTURE SPRINTS (Planned, Not Immediate)

### Sprint 11A — Sanity CMS (no hosting change needed) ⭐
- [ ] Set up Sanity project + studio (free tier hosted GUI) | Branch: `feature/cms-sanity-setup`
- [ ] Model product/category/media schema | Branch: `feature/cms-product-schema`
- [ ] Connect Next.js build to Sanity API (build-time fetch) | Branch: `feature/cms-nextjs-integration`
- [ ] Add webhook → GitHub Actions rebuild on Sanity publish | Branch: `feature/cms-publish-webhook`
- [ ] Migrate catalog from `lib/products.ts` to Sanity | Branch: `chore/cms-catalog-migration`
- [ ] Extend schema to services, testimonials, banners, metrics | Branch: `feature/cms-sitewide-content`
- [ ] Editorial workflow: draft → review → publish | Branch: `feature/cms-editorial-workflow`
- [ ] Publish fallback to last valid static snapshot | Branch: `feature/cms-publish-fallback`
- **Gate:** CI/CD pipeline must be stable before this sprint (webhook depends on reliable deploys)

### Sprint 11B — Promo Codes & Campaigns (requires Node.js hosting + Supabase)
- [ ] Migrate to Node.js-capable hosting (Vercel free or Hostinger VPS) | Branch: `chore/hosting-node-migration`
- [ ] Supabase project setup (promos, codes, redemptions DB) | Branch: `feature/promo-supabase-setup`
- [ ] Promo code schema (type, discount, limit, expiry) | Branch: `feature/promo-schema`
- [ ] Admin UI to create/manage promo codes | Branch: `feature/promo-admin-ui`
- [ ] Server-side promo code validation API | Branch: `feature/promo-validation-api`
- [ ] Checkout flow: promo code input + real-time discount | Branch: `feature/promo-checkout`
- [ ] Redemption tracking + enforce limits/expiry | Branch: `feature/promo-redemption-tracking`
- [ ] Promo campaign banners in CMS | Branch: `feature/promo-banners-cms`
- **Gate:** Sprint 11A complete + Node.js hosting migration done

### Post-Launch — Payment Integration (Paystack)
- [ ] Set up Paystack account | Manual setup
- [ ] Integrate Paystack SDK | Branch: `feature/payment-integration`
- [ ] Sandbox testing | Branch: `feature/payment-integration`
- [ ] Update checkout flow for payment | Branch: `feature/payment-integration`
- [ ] Handle payment webhooks | Branch: `feature/payment-integration`
- **Gate:** Node.js hosting migration done (same requirement as Sprint 11B)

---

## 📊 SUMMARY

| Group | Items | Priority |
|-------|-------|----------|
| 1 — Critical Blockers | 4 | Do now — blocks deployment |
| 2 — Quick Wins | 5 | Next PR after Group 1 |
| 3 — Content Features | 5 | Next sprint |
| 4 — UX & Design | 3 | Parallel to Group 3 |
| 5 — Sprint Backlog | 22 | Ongoing sprints |
| 6 — Go-Live Checklist | 16 | Gates before `main` merge |
| 7 — Future Sprints | 19 | Scheduled post-launch |
| **Total** | **74** | |

---

**Branching reminder:** Branch from `develop` for all work. PR to `develop` → verify on preview → PR to `main` for production.
