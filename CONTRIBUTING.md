# Public development notes

This repository is intended to show the implementation, architecture, and release discipline of the application. Keep changes small, reviewable, and supported by the existing automated checks.

Before opening a pull request, run:

```bash
npm run lint
npm run typecheck
npm run test
npm run build:static
```

Avoid committing credentials, live integration identifiers, environment-specific infrastructure details, generated build output, or internal project-management material.