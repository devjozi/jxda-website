# JX Distribution Website

This repository contains a production web application built with Next.js and TypeScript.

The current deployment target supports static hosting, so the application builds a static export. Features that need server-side execution sit outside that output.

The code includes reusable React components, shared domain data, automated tests, a static build, deployment automation, and post-deployment checks.

## Stack

- Next.js / React
- TypeScript
- Bootstrap and existing front-end assets
- Vitest for automated tests
- GitHub Actions for validation, security checks, and deployment

## Architecture

The application uses the Next.js App Router. The static deployment path is enabled at build time with `STATIC_EXPORT=true`, producing an `out/` directory suitable for a static host.

Application data that is shared across pages is kept behind small modules in `lib/` rather than duplicated inside components. This keeps rendering concerns separate from domain data.

See [ARCHITECTURE.md](ARCHITECTURE.md) for the deployment model, data boundaries, and trade-offs.

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

GitHub Actions runs linting, TypeScript checks, tests, and the static build before deployment. The deployment publishes the generated output and verifies the remote files and the reachable application.

Security scanning includes dependency auditing and CodeQL analysis.

Deploy-specific values such as hosts, credentials, paths, analytics identifiers, and contact integrations are supplied through repository configuration. They are not part of the public source tree.

## Repository boundary

The public tree contains application code, tests, build and delivery mechanics, and the engineering decisions needed to understand those parts.

Do not add credentials, live integration identifiers, private business data, customer data, internal operational documents, private project-management material, or other company-confidential material to the public tree.
