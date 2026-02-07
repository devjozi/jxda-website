# HANDOFF — JX Distribution (quick)

Repo: https://github.com/devjozi/jxda-website  
Branch for current work: `feature/theme-next` (or active branch)

**Direction:** E-commerce first. Conclude minimal marketing pages; build commerce subdomain (products, product details, checkout, payment).

## Run locally

```bash
npm install
npm run dev
```

Build: `npm run build` → output in `./out`.

## Deploy

- Hostinger SSH (e.g. `/home/<user>/public_html` for production)
- Previews: `/home/<user>/previews/<branch>`

## Important files

- **PROJECT_DIRECTION.md** — scope and priorities
- **PROGRESS.md** — current phase and tasks
- **DEV_SETUP.md** — environment and AI tooling
- **ARCHITECTURE.md** — stack and deployment
- `.github/workflows/deploy.yml` — CI/CD

Secrets: `.env.example`; real values in GitHub Secrets.

## Acceptance for PR

- `npm run build` completes
- `./out` contains valid static site
- Preview URL checked (responsive, links)
