# MIGRATION PLAN — JX Distribution Website

## Purpose

Migrate the Logicraft Bootstrap/HTML template into a structured Next.js project **without changing the visual design**. The site must match the reference template (`reference/original-template/`) so it can be continued whenever picked up.

**Commerce is now prioritized** for delivery, but this migration plan stays in place: template fidelity and progress so far are preserved. Work order: finish minimal marketing page set from this plan, then commerce (products, checkout, payment). Next.js is used for **both** the marketing site and the commerce section (one app unless there is a reason to split).

---

## Current State (Baseline)

- Static "Coming Soon" page (or template conversion in progress)
- Template: HTML5, Bootstrap, CSS3, JavaScript
- Hosted on Hostinger
- Reference: `reference/original-template/logicraft-main/theme/`

---

## Target State

- **Marketing site:** Matches template design (reference directory). Next.js static export. Multiple pages, Header/Footer, all body sections as in template.
- **Commerce:** Same Next.js app (recommended): product list, product detail, checkout, payment. Subdomain or `/shop` TBD.
- Deployed as static (or static + API if payment requires it) to Hostinger.

---

## Why Next.js (for entire project)

- Page structure and routing (marketing + commerce)
- Clean separation of layout, pages, components
- Static export for Hostinger; add API routes only if needed (e.g. payment)
- One codebase for main site + shop keeps things simple

**Not used for:** full SSR, auth, or complex state unless later required.

---

## Migration Strategy (Template Fidelity)

### Phase 1 — Template Preservation
- Keep original Bootstrap/template design
- Do not redesign or refactor styles
- CSS, JS, fonts, images in `/public` unchanged in behavior

### Phase 2 — Structural Mapping
- Convert template HTML to Next.js: `index.html` → `app/page.tsx`
- Shared sections → layout components (Header, Footer)
- Load Bootstrap/template CSS and JS globally

### Phase 3 — Asset Organization
- Assets in `/public`; paths work with static export
- Images, fonts, vendor scripts load correctly

### Phase 4 — Data (Light)
- Static data (e.g. `products.json`) at build time
- No database or API unless commerce/payment requires it

### Phase 5+ — Commerce (Priority)
- After minimal marketing pages are in place: product listing, product detail pages, checkout, payment integration. Same Next.js app.

---

## Success Criteria (Migration)

- Site looks identical to reference template where converted
- All converted pages load; assets resolve
- Static export builds without errors
- Progress is documented in PROGRESS.md so work can continue anytime

---

## References

- **PROGRESS.md** — What’s done and what’s next (template sections + commerce)
- **PROJECT_DIRECTION.md** — Commerce priority and scope
- **reference/original-template/** — Source of truth for design
