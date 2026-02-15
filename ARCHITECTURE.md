# Architecture — JX Distribution
<!-- Purpose: Summarize architecture and deployment model. -->

## Stack

- **Next.js for entire project:** Main site and commerce are in the same Next.js app (server-capable). No change of plan: both use Next.js.
- **Main site:** TypeScript, Bootstrap/template CSS and JS in `/public`; design matches `reference/original-template/`
- **Commerce (planned):** Product list, product detail, checkout, payment; route TBD (e.g. `/shop`) or subdomain
- **Build:** `npm run build`
- **Hosting:** Hostinger with Node.js support

## Structure

- `app/` — Next.js App Router (layout, pages, components)
- `public/` — CSS, JS, images, fonts (template assets)
- Commerce routes or separate app TBD

## Data

- Product data: static (e.g. JSON) at build time for now; backend/API later if needed
- Payment: provider TBD (e.g. Paystack, Stripe); integrate when checkout is in place

## CI/CD

- GitHub Actions: build, optional lint; deploy to Hostinger via SSH (see `.github/workflows/deploy.yml`)

## Deployment

### Development
- Local: `npm run dev` (http://localhost:3000)
- Hot reload enabled

### Preview/Staging
- **Trigger:** Push to `develop`
- **URL:** `https://www.preview.jxdistributionafrica.com`
- **Purpose:** Internal preview before production

### Production (Automatic)
- **Trigger:** Push to `main`
- **URL:** `https://www.jxdistributionafrica.com` (custom domain)
- **Process:**
	1. Push to `main`
	2. Hostinger GitHub Integration deploys
	3. Restart app in hPanel if needed
	4. Verify production

### Environment Variables
- **Local:** `.env.local` (gitignored)
- **Hostinger:** Set in Node app environment or `.env.local`
- **Required:**
	- `RESEND_API_KEY` -- Email service
	- `NEXT_PUBLIC_WHATSAPP_NUMBER` -- WhatsApp business number (future)
	- `DATABASE_URL` -- Database connection (future)
