# CalBank — Academy of Trusted Advisors proposal

A standalone proposal site from Cornerstone Performance Solutions (CPS) for
CalBank: a leader-led relationship management programme that activates
relationship managers as trusted advisors. It presents two tracks (RM for SME
Bankers and RM for Business, Commercial and Corporate), the four learning
transitions, the banker and leader journeys, pricing, and why CPS.

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and shadcn UI,
on the CPS Design System. Two pages, static, ready for Vercel.

## Quick start

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build (static)
pnpm lint
```

## Docs

See `docs/` for the full picture:

- `PROJECT_OVERVIEW.md` — what this is, audience, owner.
- `ASSUMPTIONS.md` — what is and is not validated.
- `SCOPE.md` — pages, sections, exclusions, milestones.
- `STRUCTURE.md` — folders, composition rules, content approach.
- `TRACKING_PLAN.md` — analytics plan and placeholders.
- `DEPLOYMENT.md` — GitHub and Vercel setup, redeploys.

## Editing content

All copy and data live in `src/content/proposal.ts`. House style: second person,
sentence case, South African spelling, specific numbers, no em dashes.
