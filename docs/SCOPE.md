# Scope

## Pages included

- **/** — the proposal. A single scroll from challenge to next step.
- **/why-cps** — the methodology, the platform, proof of capability, and
  assurance.

## Sections included

### Home (`/`)

1. **Hero** — the Academy of Trusted Advisors, activating relationship managers
   as trusted advisors.
2. **The challenge** — current state versus desired state, the behavioural
   challenge (four shifts bankers must make), and the narrative.
3. **The opportunity and solution** — from transactional banking to strategic,
   solution-led relationships, plus the leader-led programme and the five
   learning-for-impact enablers.
4. **Four transitions** — client-centric, problem-solver, value-creator,
   value-conversationist, with the competencies linked to outcomes.
5. **The two programmes** — RM for SME Bankers (Express) and RM for BCC,
   presented as tabs with banker and line-manager pricing.
6. **The learning journey** — the banker journey and the parallel leader
   enablement journey, presented as tabs.
7. **Pricing** — both tracks side by side.
8. **The next steps** — contact details and the CPS quote.

### Why CPS (`/why-cps`)

1. **The 5 cornerstones of BIL** — the methodology.
2. **The learning platform** — CPS Learn capability.
3. **Why CPS is trusted** — track record, stats, and client logos.
4. **Assurance and accreditation** — recognition, measurement, and badges.
5. **The next steps** — shared contact section.

## Access gate

- A soft passcode gate sits in front of the whole site (both pages). On first
  visit the reader sees a full-bleed lock screen and enters the access code
  (`0224`). A correct code unlocks and is remembered in `localStorage`, so it
  does not re-prompt.
- A **Hide** button in the top navigation re-locks the proposal (clears the
  unlock flag and reloads), so a presenter can hide the content on screen.
- This is a soft gate, not real authentication. It keeps the proposal out of
  casual view; it is not a security boundary. The code and storage key live in
  `src/lib/lock.ts`.

## What is excluded

- No CMS or admin. Content lives in `src/content/proposal.ts`.
- No forms or lead capture in this build. The CTAs are `mailto:` and `tel:` links
  plus on-page anchors. A form can be added later (see `TRACKING_PLAN.md`).
- No server-side authentication or per-client logins (the access gate above is
  a client-side soft gate only).
- No blog, no additional programme detail pages, no downloadable PDF in this
  build.
- No CalBank-supplied brand assets. The site uses a text "Prepared for CalBank"
  mark only.
- No analytics wired up yet (placeholders documented in `TRACKING_PLAN.md`).

## Launch milestones

1. **Build complete** — scaffold, content, sections, clean production build.
   (Done.)
2. **Internal review** — CPS reviews copy, pricing, and positioning.
3. **Deploy to Vercel** — push to GitHub, import to Vercel, ship a preview URL.
4. **Client share** — send the preview URL to CalBank, gather feedback.
5. **Refine** — fold in CalBank feedback, add a contact form and analytics if
   wanted.
6. **Final** — optional custom domain and indexing decision.
