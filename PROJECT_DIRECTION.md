# PROJECT DIRECTION — JX Distribution

## Goal

JX Distribution sells online. Deliver a working commerce experience quickly; other features later. The marketing site stays aligned with the template (reference directory); see MIGRATION_PLAN.md and PROGRESS.md.

## Scope

1. **Main site (marketing)** — Conclude a minimal set of pages from the template (home + key pages). Design must match reference.
2. **Commerce** — Product listing, product detail pages, checkout, payment integration. **Next.js is the plan for both**; one app unless there is a reason to split.

## Tech

- **Stack:** Next.js (static export), TypeScript, template/Bootstrap assets. Hostinger.
- **Commerce:** Same Next.js app (recommended). Payment provider TBD.

---

## Decisions to Make

When presenting decisions, **explain each option, tradeoffs, and a best-practice recommendation** (see AI_COLLABORATION.md).

### 1. Commerce URL: subdomain vs path

| Option | What it means | Tradeoffs | Recommendation |
|--------|----------------|-----------|----------------|
| **Subdomain** (e.g. `shop.jxdistribution.com`) | Separate hostname; can be same app or separate deploy. | Clear separation; may need CORS/cookie config if same app. Slightly more DNS/deploy setup. | Good if you want a distinct “store” identity or separate scaling later. |
| **Path** (e.g. `jxdistribution.com/shop`) | All under one domain. One app, one deploy. | Simpler: one codebase, one SSL, no cross-origin. Less “separate brand” for the shop. | **Recommended** for speed and simplicity unless you need a separate storefront domain. |

### 2. Payment provider

| Option | What it means | Tradeoffs | Recommendation |
|--------|----------------|-----------|----------------|
| **Paystack** | Ghana/W Africa focused; local currencies, cards, mobile money. | Strong fit for local customers; docs and support in region. | **Recommended** if primary customers are in Ghana/W Africa. |
| **Stripe** | Global cards and many payment methods; strong API. | May need Stripe Atlas or similar for some regions; fees. | Best if targeting global or already using Stripe elsewhere. |
| **Other** | E.g. Flutterwave, local gateways. | Depends on region and features. | Choose when you have a specific requirement. |

**When to integrate:** After checkout flow and cart (or minimal flow) are in place; start with test/sandbox keys.

---

## References

- **PROGRESS.md** — Current phase, template sections, commerce checklist
- **MIGRATION_PLAN.md** — Template migration (no removal of plan; commerce added as priority)
- **DEV_SETUP.md** — Environment and AI tooling
