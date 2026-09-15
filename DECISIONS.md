# Engineering decisions

These decisions explain the current shape of the application.

### Static export
The deployment target supports static files, so the application builds a self-contained export instead of requiring a continuously running Next.js server. Server-side features belong behind an external service boundary.

### Centralized domain data
Service metadata is shared by several views. It lives in a typed module so titles, slugs, descriptions, and image references do not drift between pages.

### Validation before release
The delivery path runs linting, TypeScript checks, tests, and a static production build before deployment. The aim is to fail before publishing a bad artifact, not discover basic breakage after release.

### Verify the result
Deployment verification checks both the expected remote files and the reachable HTTP endpoint. A successful file transfer is not treated as proof that the application is healthy.

### Configuration at the boundary
Environment-specific values are supplied through configuration rather than embedded in the release workflow or documentation. This keeps the source useful to other engineers without exposing operational infrastructure details.
