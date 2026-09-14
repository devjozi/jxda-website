# Architecture

## System shape

The application uses Next.js and TypeScript with the App Router. Shared page structure is implemented with reusable React components, while domain data that appears in multiple views is centralized under `lib/`.

The result is a conventional web application rather than a collection of page-specific implementations: layout, presentation, and shared data have clear boundaries, which makes changes easier to reason about and test.

## Why static export

The current hosting target supports static files rather than a continuously running Next.js server. The application therefore supports a static export through the `STATIC_EXPORT=true` build path.

That constraint has a useful consequence: the deployed artifact is self-contained and does not require a Node.js process. It also creates an explicit architectural boundary. Features that need server-side execution, persistent state, authenticated APIs, or real-time data cannot be implemented inside the static output alone.

For the current workload, that trade-off is deliberate. A smaller runtime surface is easier to deploy and operate than introducing a backend before the application needs one.

## Data boundaries

Shared service metadata lives in `lib/services-data.ts` rather than being duplicated across the homepage, listing pages, and detail pages. This makes the data a single source of truth and prevents small content changes from creating inconsistent copies.

Environment-dependent values are read from configuration rather than embedded in components. This keeps deploy-specific configuration out of the application structure and makes the same codebase usable across environments.

## Delivery path

The repository uses GitHub Actions for the path from source to deployed artifact.

1. Dependencies are installed from the lockfile.
2. Linting, TypeScript validation, and automated tests run as quality gates.
3. The application is built as a static export.
4. The generated artifact is deployed over SSH/rsync.
5. The deployment is checked for expected files and an HTTP response rather than treating a successful upload as proof of a healthy release.

Security checks run separately through dependency auditing and CodeQL.

## Trade-offs

The static approach deliberately gives up server-side features in exchange for simpler hosting and a smaller operational surface.

That is acceptable while the application primarily serves content, catalogue data, forms backed by external services, and client-side interactions. If requirements later include real-time inventory, authenticated APIs, server-side transactions, or persistent application state, the clean migration point is the boundary between the static web application and the external service layer.

The architecture therefore optimizes for today's operational constraint without making tomorrow's migration mysterious.
