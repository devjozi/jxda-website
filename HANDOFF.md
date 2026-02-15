# HANDOFF — JX Distribution (quick)

Repo: https://github.com/devjozi/jxda-website  
Branch for current work: `feature/theme-next` (or active branch)

**Direction:** E-commerce first. Conclude minimal marketing pages; build commerce subdomain (products, product details, checkout, payment).

## Run locally

```bash
npm install
npm run dev
```

Build: `npm run build`
Start production server: `npm run start`

## Deploy

- Hostinger GitHub Integration on `develop` (preview) and `main` (production)
- Preview domain: `https://preview.domainname.com`
- Production path: `/home/<user>/public_html`
- Restart in hPanel Node.js Dashboard after deploy if needed

## Important files

- **PROJECT_DIRECTION.md** — scope and priorities
- **PROGRESS.md** — current phase and tasks
- **DEV_SETUP.md** — environment and AI tooling
- **ARCHITECTURE.md** — stack and deployment
- `.github/workflows/deploy.yml` — CI/CD

Secrets: `.env.example`; real values in GitHub Secrets.

## Acceptance for PR

- `npm run build` completes
- `npm run start` serves the built site without errors
- Preview URL checked (responsive, links)
