# Project overview

## What this is

A standalone proposal website for the **Academy of Trusted Advisors** that
Cornerstone Performance Solutions (CPS) is presenting to **CalBank**. The site
presents a leader-led relationship management programme that activates
relationship managers as trusted advisors, moving bankers from transactional
engagement to strategic, solution-led advice that grows client value and
portfolio contribution.

The Academy holds two relationship management tracks, drawn directly from the
source decks:

- **RM for SME Bankers (Express)**, R 17 840 per banker, R 2 510 per line manager.
- **RM for Business, Commercial and Corporate (BCC)**, R 17 270 per banker,
  R 2 510 per line manager.

Both tracks run a banker journey alongside a parallel leader enablement journey,
built on the same four learning transitions (client-centric, problem-solver,
value-creator, value-conversationist).

It is a two-page, scroll-based proposal. The first page walks the reader from the
business challenge, through the opportunity and solution, the four transitions,
the two programmes, the learning journey, and pricing, to a clear next step. The
second page, Why CPS, covers the methodology, the platform, proof of capability,
and assurance.

## Who it is for

- **Primary audience:** CalBank decision-makers evaluating relationship
  management and frontline capability partners. People leadership, learning and
  development, and HR sponsors responsible for growing customer relationships and
  portfolio value.
- **Secondary audience:** the CPS team, using the site to present and to follow
  up after a meeting.

The tone speaks to a senior, time-poor reader making a serious decision. It is
warm, direct, and credentialed, in line with the CPS brand voice.

## Brand and design

- Built on the **CPS Design System** (the read-only source of truth that lives
  alongside this project). CPS is the seller, so CPS branding leads.
- **Co-branded** with a respectful CalBank acknowledgement (a "Prepared for
  CalBank" mark in the navigation), since the proposal is addressed to them.
- Brand CI: blue `#13A2D9`, purple `#9013FE`, yellow `#FFFF00` (the single CTA
  colour), dark grey `#4C4C4B`, ink `#0A0C1C`. Inter for type, JetBrains Mono for
  labels. Signature elements: the italic blue to purple gradient accent,
  liquid-glass surfaces, near-black dark sections, and visible focus rings.

## Tech and deployment

- **Next.js 16** (App Router) with **TypeScript**, **Tailwind CSS v4**, and
  **shadcn UI** primitives. Package manager is **pnpm**.
- Both pages prerender as **static content**, which makes the site fast and cheap
  to host.
- **Deployment target:** Vercel (Next.js preset). See `DEPLOYMENT.md`. As of this
  build the site has not been pushed to a remote or deployed. It builds cleanly
  and is ready to deploy.

## Owner

- **Agency:** Broadbrand (build and content) on behalf of CPS.
- **Client of record:** Cornerstone Performance Solutions (Pty) Ltd.
- **Contact:** succeed@cps.co.za, +27 11 789 1957, 39 Grove Street, Randburg,
  Johannesburg.
