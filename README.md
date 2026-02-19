# JX Distribution — Website
<!-- Purpose: Project overview, setup, and deployment pointers. -->

JX Distribution sells online. This repo is the main site and (planned) commerce subdomain.

**Stack:** Next.js (server-capable), TypeScript, Bootstrap/template assets. Deployed to Hostinger.

**Priority:** Get a working commerce experience (product list, product details, checkout, payment). Marketing pages concluded to a minimal set first.

## Quick start

```bash
npm install
npm run dev
```

Build: `npm run build`
Build (static hosting): `npm run build:static`
Start production server: `npm run start`

## Key docs

### For Execution
- **[PROJECT_PLAN.md](PROJECT_PLAN.md)** — Complete task list, sprint breakdown, acceptance criteria ⭐ START HERE
- **[AGENT_PROMPT.md](AGENT_PROMPT.md)** — Instructions for AI agents to execute tasks autonomously
- **[BRANCHING_STRATEGY.md](BRANCHING_STRATEGY.md)** — Git workflow, one branch per task

### For Context
- **[PROJECT_DIRECTION.md](PROJECT_DIRECTION.md)** — scope, commerce subdomain, priorities
- **[PROGRESS.md](PROGRESS.md)** — current phase and checklist
- **[ARCHITECTURE.md](ARCHITECTURE.md)** — stack and deployment
- **[HANDOFF.md](HANDOFF.md)** — quick restart and deploy
- **[DEV_SETUP.md](DEV_SETUP.md)** — environment and AI tooling for continuation
- **[PREVIEW_AND_PUBLISH.md](PREVIEW_AND_PUBLISH.md)** — what to click and expect in the browser, then how to build and publish

## Deploy

- `develop` → preview (https://preview.jxdisributionafrica.com)
- `main` → production (Hostinger static export)

Secrets: see `.env.example`; store real values in GitHub Secrets.
