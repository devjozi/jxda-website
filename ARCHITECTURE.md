# Architecture

## System shape

The application uses Next.js and TypeScript with the App Router. Shared page structure is implemented with reusable React components, while domain data that appears in multiple views is centralized under `lib/`.

Shared layout, page components, and domain data have separate responsibilities.

## Why static export

The current hosting target supports static files rather than a continuously running Next.js server. The application therefore supports a static export through the `STATIC_EXPORT=true` build path.

The deployed artifact is self-contained and does not require a Node.js process. Features that need server-side execution, persistent state, authenticated APIs, or real-time data cannot be implemented inside the static output alone.

For the current workload, this keeps the deployment and runtime surface small. Server-backed features belong outside the static application when they are needed.

## Data boundaries

Shared service metadata lives in `lib/services-data.ts` rather than being duplicated across the homepage, listing pages, and detail pages. This gives those views one source of truth.

Environment-dependent values are read from configuration rather than embedded in components. Deploy-specific configuration therefore stays outside the application structure.

## Delivery path

The repository uses GitHub Actions for the path from source to deployed artifact.

1. Dependencies are installed from the lockfile.
2. Linting, TypeScript validation, and automated tests run as quality gates.
3. The application is built as a static export.
4. The generated artifact is deployed over SSH/rsync.
5. The deployment is checked for expected files and an HTTP response rather than treating a successful upload as proof of a healthy release.

Security checks run separately through dependency auditing and CodeQL.

## Trade-offs

The static approach gives up server-side features in exchange for simpler hosting and a smaller runtime surface.

That is acceptable while the application primarily serves content, catalogue data, forms backed by external services, and client-side interactions. Real-time inventory, authenticated APIs, server-side transactions, or persistent application state require an external service layer.
