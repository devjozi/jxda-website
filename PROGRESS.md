# PROGRESS LOG — JX Distribution Website

**Last Updated:** 2026-04-21
**Version:** 0.7.1
**Branch:** `feat/shop-core-refactor`
**Status:** Shop core refactor in progress; cart workflow is being tightened into a Buy Now + quantity + WhatsApp checkout flow

---

## Truth snapshot (verified)

Source of truth validation run on 2026-03-02:
- `npm run check` ✅ passes end-to-end
  - Lint: **0 errors**, warnings only (`no-img-element`, `no-css-tags`)
  - TypeScript: ✅ pass
  - Tests: ✅ 45/45 passing (4 test files)
  - Static build: ✅ pass, **77 static pages generated**
- Git branch: `feat/shop-core-refactor`
- Workflows present: deploy, quality gate, security scan, live smoke monitor

---

## Current state

- **Homepage:** Core template sections implemented (hero, features, services, FAQ/testimonials, facts, CTA).
- **Commerce:** `/shop` + `/shop/[slug]` + `/shop/checkout` implemented with WhatsApp-first ordering flow and persistent shopping cart.
- **Shop refactor branch:** `feat/shop-core-refactor` is the active implementation branch for Buy Now, quantity controls, checkout modal, and WhatsApp checkout cleanup.
- **Catalog:** 53+ products across 5 categories, with search/filter/sort and product detail pages.
- **SEO/Schema:** Shop listing metadata + per-product metadata + JSON-LD (`Product`, `BreadcrumbList`).
- **Testing:** 45 unit tests passing (`tests/products.test.ts`, `tests/shop-filters.test.ts`, `tests/site.test.ts`, `tests/contact-route.test.ts`).
- **CI/CD:** Static Hostinger deploy workflow + quality gate + security + 30-min live smoke checks configured.
- **Routing:** Placeholder pages added for previously broken nav links: `/features`, `/news`, `/news/[slug]`, `/projects`, `/gallery`.

---

## Important reality checks

- `lib/site.ts` now contains real phone and core social links; verify TikTok handle is correct.
- Any doc claiming “real Ghana contact/social links are already live in code” is outdated.
- `PROJECT_PLAN.md` reflects the historical planning baseline and is **not** an accurate completion tracker today.
- `DEPLOYMENT_READY.md` is an older deployment snapshot (v0.5.0 assumptions and older page counts).

---

## ✅ Completed (high confidence)

- Static export deployment path for Hostinger
- Shop UX/CRO/SEO overhaul (v0.6.0 scope)
- Shopping cart workflow (global cart state, add-to-cart from listing/detail, cart-aware checkout)
- Placeholder route coverage for legacy links to avoid user-facing 404s
- Filter/sort extraction to `lib/shop-filters.ts`
- Product-page schema/metadata improvements
- Unit tests for catalogue, filters, contact route, site config
- CI workflows for quality/security/deploy/smoke checks

---

## ⏳ Open / next priorities

1. **Shop core refactor finish:** Validate the Buy Now cart flow, quantity steppers, once-per-visit product modal, and WhatsApp checkout template on the dedicated branch.
2. **CI/CD pipeline fix:** Deploy workflow secrets audit (especially `HOSTINGER_PORT` — Hostinger uses `65002` not `22`). Preview subdomain needs Hostinger hPanel subdomain pointing to `/public_html/preview`. Fix `www.` prefix in `live-smoke.yml` preview URL check.
3. **Content truth:** Verify all social profile URLs (incl. TikTok) and update any remaining placeholders.
4. **Immediate content fixes:** Update `lib/site.ts` address to `GE-225-5007 Kwabenya / Taifa North`. Implement interactive map embed on contact page. Replace placeholder images via direct Hostinger FTP (no rebuild needed for same-filename swaps).
5. **Go-live readiness:** Complete unchecked launch controls (legal pages, monitoring stack, final QA).
6. **Commerce depth:** Implement checkout validation + order confirmation pipeline.
7. **Asset quality:** Replace template/placeholder imagery with licensed production assets.
8. **Sprint 11 — CMS & Promo Codes (future):**
   - **Phase A (⭐ do first, no hosting change needed):** Sanity CMS integration — GUI dashboard for products, categories, images, services, testimonials. On publish, webhook triggers auto-rebuild + deploy to Hostinger. Eliminates need for code edits or CSV imports to update content.
   - **Phase B (requires Node.js hosting + Supabase):** Redeemable promo codes with server-side validation, usage tracking, expiry. Promotional campaign banners managed from CMS. Scheduled alongside or after payment integration (both require same hosting upgrade).

---

## Key files

| Path | Purpose |
|------|---------|
| `app/shop/page.tsx` | Shop listing shell + metadata |
| `app/components/ShopClient.tsx` | Search/filter/sort UI + product cards |
| `app/shop/[slug]/page.tsx` | Product details + structured data |
| `app/shop/checkout/page.tsx` | Cart-aware + WhatsApp-first checkout flow |
| `app/components/CartProvider.tsx` | Global cart context + localStorage persistence |
| `app/components/AddToCartButton.tsx` | Reusable add-to-cart CTA |
| `app/components/CartCheckoutClient.tsx` | Checkout cart rendering + totals |
| `app/features/page.tsx` | Placeholder features page (non-404) |
| `app/news/page.tsx` | Placeholder news listing (non-404) |
| `app/news/[slug]/page.tsx` | Placeholder news detail pages (non-404) |
| `app/projects/page.tsx` | Placeholder projects page (non-404) |
| `app/gallery/page.tsx` | Placeholder gallery page (non-404) |
| `lib/products.ts` | Product catalogue and categories |
| `lib/shop-filters.ts` | Pure filter/sort logic |
| `lib/site.ts` | Company/contact/social/WhatsApp config |
| `.github/workflows/deploy.yml` | Hostinger static deployment |
| `.github/workflows/quality-gate.yml` | Lint + typecheck + tests + build gate |
| `.github/workflows/security.yml` | npm audit + CodeQL |
| `.github/workflows/live-smoke.yml` | Preview/production health checks |

---

## Known issues / debt

- Lint warnings from intentional template compatibility patterns (`<img>` and stylesheet link tags).
- Icon font rendering can degrade depending on asset path resolution.
- Some planning/deployment docs are legacy snapshots and need periodic truth-sync updates.

---

## Versioning

- **0.1.0** — Foundation, layout, header/footer, initial homepage sections.
- **0.2.0** — Homepage completion + initial commerce pages.
- **0.3.x** — Planning + CI/deployment groundwork.
- **0.4.0** — Product catalog infrastructure + import tooling.
- **0.5.0** — Expanded product data and WhatsApp commerce flow.
- **0.6.0** — Shop SEO/CRO/UX overhaul + test expansion to 45 passing.
- **0.6.1** — Truth-sync docs update, planning backlog refresh, site contact/social config refresh.
- **0.7.0** — Shopping cart workflow completed, placeholder pages added for broken routes, closure pass validation on 77 static pages.
- **0.7.1** — Docs truth-sync + UX polish (footer TikTok icon, header cart spacing) + CI/CD next-priority checklist; Sprint 11 expanded (CMS Phase A + promo Phase B).
- **Docs truth-sync (2026-03-10)** — status documentation aligned to current repo behavior.
