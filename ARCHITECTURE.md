# Architecture — JX Distribution

## Stack

- **Next.js for entire project:** Main site and commerce are in the same Next.js app (static export). No change of plan: both use Next.js.
- **Main site:** TypeScript, Bootstrap/template CSS and JS in `/public`; design matches `reference/original-template/`
- **Commerce (planned):** Product list, product detail, checkout, payment; route TBD (e.g. `/shop`) or subdomain
- **Build:** `npm run build` → `./out` (static HTML/CSS/JS)
- **Hosting:** Hostinger (main site); commerce deployment TBD (same host or subdomain)

## Structure

- `app/` — Next.js App Router (layout, pages, components)
- `public/` — CSS, JS, images, fonts (template assets)
- Commerce routes or separate app TBD

## Data

- Product data: static (e.g. JSON) at build time for now; backend/API later if needed
- Payment: provider TBD (e.g. Paystack, Stripe); integrate when checkout is in place

## CI/CD

- GitHub Actions: build, optional lint; deploy to Hostinger via SSH (see `.github/workflows/deploy.yml`)
