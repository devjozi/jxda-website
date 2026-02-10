# JX Distribution — Website

JX Distribution sells online. This repo is the main site and (planned) commerce subdomain.

**Stack:** Next.js (static export), TypeScript, Bootstrap/template assets. Deployed to Hostinger.

**Priority:** Get a working commerce experience (product list, product details, checkout, payment). Marketing pages concluded to a minimal set first.

## Quick start

```bash
npm install
npm run dev
```

Build static export: `npm run build` → output in `./out`.

## Key docs

- **PREVIEW_AND_PUBLISH.md** — what to click and expect in the browser, then how to build and publish
- **PROJECT_DIRECTION.md** — scope, commerce subdomain, priorities
- **PROGRESS.md** — current phase and checklist
- **HANDOFF.md** — quick restart and deploy
- **ARCHITECTURE.md** — stack and deployment
- **DEV_SETUP.md** — environment and AI tooling for continuation

## Deploy

- `main` → production (Hostinger `public_html`)
- `develop` → staging
- `feature/*` → preview

Secrets: see `.env.example`; store real values in GitHub Secrets.
