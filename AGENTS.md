# AGENTS.md

## Project Context

This is a standalone React/Vite marketing website for Webbin, a web development service for Indonesian businesses. Keep changes focused on the requested user-facing outcome and preserve the current React, Vite, Tailwind, and data-driven section patterns.

Start with `README.md` for local setup, content structure, SEO/GEO notes, and asset replacement guidance.

## Key Files

- `src/data/site.js`: brand, contact, navigation, and business identity.
- `src/data/portfolio.js`: demo website categories and project data.
- `src/components/sections/`: landing page sections.
- `src/components/ui/`: reusable UI primitives and effects.
- `public/assets/demo/`: replaceable demo website images.
- `index.html`: SEO/GEO metadata and JSON-LD schema.

## Working Notes

- Use `npm run dev` for local development.
- Use `npm run build` before finishing code changes.
- Do not add backend, database, or platform-specific SDKs unless explicitly requested.
- Prefer editing structured data files for copy/content changes before changing components.
- Keep SEO/GEO changes consistent across visible copy, metadata, schema, sitemap, and `llms.txt`.
