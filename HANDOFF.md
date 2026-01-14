# HANDOFF — JX Distribution Website (quick)

Repo: https://github.com/devjozi/jxda-website  
Branch for current work: feature/theme-next  
Owner: [Your name / Digital Support JXD]

Note: Next.js is not yet initialized. This branch prepares for controlled migration.

How to run (local):
1. Ensure Node.js 18+ installed
2. In repo root: `npm install`
3. Start dev server: `npm run dev`

How to build & export (production):
- `npm run build && npm run export`
- Static output directory: `./out`

Where to deploy:
- Hostinger SSH target (example): /home/<user>/public_html (production)
- Previews: /home/<user>/previews/<branch-name> (preview folders)

Important files (for quick restart):
- PLAYBOOK.md (project plan & context)
- HANDOFF.md (this file)
- README.md (detailed quickstart)
- ARCHITECTURE.md (deployment + branch mapping)
- products.json (sample product data)
- .github/workflows/deploy.yml (CI/CD)

Secrets (GitHub): see .env.example (do NOT commit actual values).

Acceptance criteria for a publishable PR:
- `npm run build && npm run export` completes without errors
- `./out/index.html` exists and loads in a browser
- Mobile responsiveness checked on preview URL

