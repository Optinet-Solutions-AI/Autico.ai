# Autico.ai

Marketing site + portfolio for the Autico.ai AI agency.

> The canonical project doc is **[CLAUDE.md.template](./CLAUDE.md.template)** — read it first.

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in keys you have
npm run dev                  # http://localhost:3000
```

## Stack

- **Next.js 15** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS v4**
- **TypeScript** (strict)
- **Zod** for API input validation
- **Resend** for transactional email (optional — works without it, just logs)

## Project layout

See `CLAUDE.md.template` → "Directory Structure" for the canonical map.

## Scripts

| Task | Command |
|------|---------|
| Dev server | `npm run dev` |
| Type-check | `npm run typecheck` |
| Build | `npm run build` |
| Lint | `npm run lint` |

## Env variables

See `.env.example`. The site runs locally without any keys filled in — the contact form will log to console instead of emailing until `RESEND_API_KEY` is set.
