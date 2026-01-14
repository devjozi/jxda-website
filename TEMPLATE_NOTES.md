# TEMPLATE NOTES — JX Distribution Website

## Template Overview
- Type: Static HTML website template
- Built with:
  - HTML5
  - Bootstrap (CSS & JS)
  - Custom CSS
  - Vanilla JavaScript
- No React, no framework logic in the original template

This template is the **visual source of truth**.

---

## Design Rules (Strict)

- Visual appearance must remain the same
- Spacing, fonts, colors, animations must not change
- No redesign, no rebranding, no UI experimentation
- Migration is structural, NOT aesthetic

---

## How the Template Is Used in Next.js

- HTML sections are moved into Next.js pages/components
- Bootstrap CSS & JS are loaded globally
- Original CSS files are reused as-is
- Original JS files are reused as-is
- Images, fonts, and vendor files live in `/public`

Next.js is used only for:
- Page routing
- Layout structure
- Scalability as pages increase

---

## What Not to Do

- Do NOT rewrite Bootstrap styles into Tailwind
- Do NOT convert everything into React components aggressively
- Do NOT introduce backend logic or APIs
- Do NOT optimize prematurely

---

## Current Status

- A "Coming Soon" page is live and approved
- Migration work happens on branch: `feature/theme-next`
- Stability is more important than speed

---

## Goal of Migration

End result should be:
- A static Next.js-exported website
- Identical look to the original template
- Easier to add pages, products, and content later

