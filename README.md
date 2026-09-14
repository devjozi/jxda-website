# JX Distribution Website — Engineering Surface

This repository contains a production web application built with Next.js and TypeScript. It was shaped around a simple constraint: the current deployment target supports static hosting, so the application must produce a deployable static export without giving up a clear path to server-backed capabilities later.

The repository is useful as an engineering sample because the implementation is real: reusable React components, centralized domain data, automated validation, static builds, deployment automation, and post-deployment checks all live alongside the application code.

## Stack

- Next.js / React
- TypeScript
- Bootstrap and existing front-end assets
- Vitest for automated tests
- GitHub Actions for validation, security checks, and deployment

## Architecture

The application uses the Next.js App Router. The static deployment path is enabled at build time with `STATIC_EXPORT=true`, producing an `out/` directory suitable for a static host.

Application data that is shared across pages is kept behind small modules in `lib/` rather than duplicated inside components. This keeps rendering concerns separate from domain data and reduces drift between listing, detail, and landing pages.

See [ARCHITECTURE.md](ARCHITECTURE.md) for the reasoning behind the deployment model and its trade-offs.

## Development

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run lint
npm run typecheck
npm run test
npm run build:static
```

The combined gate is:

```bash
npm run check
```

A local static build writes the generated site to `out/`.

## Delivery

The repository uses GitHub Actions to validate changes before they ship. The quality gate runs linting, TypeScript checks, tests, and the static build. Deployment then publishes the generated output and verifies both the remote files and the reachable application.

Security scanning includes dependency auditing and CodeQL analysis.

The deployed environment and business-specific configuration are intentionally supplied through runtime/repository configuration rather than documented as part of the public engineering surface.

## Repository boundary

This public repository contains the implementation and the engineering decisions needed to understand it. Internal task history, agent instructions, private deployment notes, business-operational documentation, and working-session material are kept outside the public surface.
