# JX Distribution — Website

## Quick summary
This project will become the JX Distribution public website built with:
- Next.js (SSG/export)
- TypeScript
- Tailwind CSS
- Deployed as static files to Hostinger

## Quick start (local)
1. Install dependencies:
   npm install
2. Run dev server
   npm run dev
3. Build and export static site
   npm run build
   npm run export

Output folder: ./out
Branching & deploy flow

main → production (Hostinger public_html)

develop → staging

feature/* → preview (deployed to previews/<branch-name>)

Useful files

PLAYBOOK.md — project plan & scope

HANDOFF.md — quick restart guide

ARCHITECTURE.md — deployment and branch mapping

products.json — sample product data

How to prepare Hostinger for SSH deploy

Enable SSH access in Hostinger control panel.

Add GitHub Actions SSH public key to ~/.ssh/authorized_keys or use your personal key.

Add secrets in GitHub (HOSTINGER_HOST, HOSTINGER_USER, HOSTINGER_PORT, HOSTINGER_SSH_KEY, HOSTINGER_DEPLOY_PATH).

Contact

Owner: [Your name / Digital Support JXD]


---

## CONTRIBUTING.md

Contributing & Branching

Branch strategy:

main — production (protected)

develop — staging

feature/<short> — development work and PRs

Pull request rules:

Create a PR from feature/* into develop (or main if ready).

Include a short summary and a preview URL (workflow will deploy preview).

Require at least 1 approval before merge into develop, and staged approval before merge to main.

Commit messages:

Use short summary, e.g. feat: add product list page or fix: image path.

CI:

Linting + Type checking run in CI before deploy.

Deploy approvals:

Confirm preview URL with reviewer before merging to main.


---

## ARCHITECTURE.md

Architecture (short)

Stack:

Next.js (SSG) → build time HTML generation

TypeScript + Tailwind CSS

Static export folder: ./out

Hostinger serves ./out from public_html

CI/CD:

GitHub Actions builds and exports the site

Deployment to Hostinger via SSH/SCP (target path depends on branch)

main -> public_html

develop -> staging

feature/* -> previews/<branch>

Product data:

src/data/products.json (static sample data used at build time)


---

## .env.example

.env.example — do NOT commit real secrets

HOSTINGER_HOST=example.hostinger.com
HOSTINGER_USER=sshuser
HOSTINGER_PORT=22
HOSTINGER_SSH_KEY= (Private key stored in GitHub Secrets)
HOSTINGER_DEPLOY_PATH=/home/sshuser


---

## next.config.js
Place at repo root (this forces static export):
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;

