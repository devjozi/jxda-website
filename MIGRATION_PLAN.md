# MIGRATION PLAN — JX Distribution Website

## Purpose
This document explains how the current static Bootstrap/HTML template
will be migrated into a structured Next.js project **without changing
the visual design or introducing unnecessary complexity**.

Next.js is used for **structure, scalability, and future growth**, not
to build a complex React application at this stage.

---

## Current State (Baseline)

- A static "Coming Soon" page
- Built with:
  - HTML5
  - Bootstrap
  - CSS3
  - JavaScript
- Hosted on Hostinger
- Already live and approved

This state is considered **stable** and should not be broken.

---

## Target State (After Migration)

- Website still behaves as a **static site**
- Uses **Next.js static export**
- Deployed as plain HTML/CSS/JS to Hostinger
- Supports:
  - Multiple pages
  - Product listings
  - Easier maintenance
  - Cleaner structure for future contributors

---

## Why Next.js Is Being Used

Next.js is introduced **only** to solve these problems:

1. Page structure and routing as the site grows
2. Cleaner separation of layout, pages, and data
3. Easier future expansion (products, services, blog, etc.)
4. Static export compatible with Hostinger hosting

❗ Next.js is **not** being used for:
- Server-side rendering
- APIs
- Authentication
- Complex React state management

---

## Migration Strategy (Safe & Controlled)

### Phase 1 — Template Preservation
- Keep the original Bootstrap template design
- Do **not** redesign or refactor styles yet
- CSS, JS, fonts, and images remain unchanged

### Phase 2 — Structural Mapping
- Convert HTML files into Next.js pages:
  - `index.html` → `app/page.tsx` or `pages/index.tsx`
- Move shared sections (header, footer) into layout components
- Link Bootstrap CSS and JS globally

### Phase 3 — Asset Organization
- Move assets into `/public`
- Ensure all paths work with static export
- Verify images, fonts, and vendor scripts load correctly

### Phase 4 — Data Preparation (Light)
- Introduce simple static data files (e.g. `products.json`)
- No database
- No API calls
- Build-time only usage

---

## Non-Goals (Important)

This migration will **not** include:

- Tailwind rewrite (yet)
- CI/CD pipelines
- Hosting changes
- Backend logic
- User authentication

These will be considered **later**, when needed.

---

## Deployment Model

- Next.js builds static files using:
npm run build
npm run export

- Output folder: `./out`
- Upload contents of `./out` to Hostinger
- Same deployment approach as current site

---

## Success Criteria

Migration is considered successful when:

- Site looks identical to the original template
- All pages load correctly
- Assets resolve correctly
- Static export works without errors
- No regression from the current "Coming Soon" page

---

## Ownership & Responsibility

- Migration controlled and reviewed manually
- Changes committed incrementally
- Stability takes priority over speed
