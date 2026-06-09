# Tracking plan

Nothing is wired up yet. This is the plan for when CPS decides to measure how the
proposal site is used. Keep it light. This is a sales document, not a product.

## Google Analytics (placeholder)

- Add GA4 via `@next/third-parties` once a measurement ID exists.
- Suggested env var: `NEXT_PUBLIC_GA_ID`. Render the GA component in
  `src/app/layout.tsx` only when the var is set, so local and preview builds stay
  clean.
- Until then, no analytics scripts ship.

## Event tracking (placeholder)

Events worth capturing once analytics is in:

- `cta_talk_to_cps` — the nav "Talk to CPS" button.
- `cta_explore` / `cta_see_programmes` — the hero buttons.
- `track_tab_view` — which programme tab is opened (SME vs BCC).
- `journey_tab_view` — banker journey vs leader journey.
- `cta_request_proposal` — the pricing CTA.
- `contact_email_click` / `contact_phone_click` — the contact links.
- `why_cps_view` — reaching the Why CPS page.

Implement as a thin `track(event, params)` helper so the analytics vendor stays
swappable.

## Form submission tracking

- No form ships in this build. CTAs are `mailto:` and `tel:` links.
- If a "request a cohort proposal" form is added later, track `form_view`,
  `form_start`, and `form_submit`, and fire a conversion on submit. Prefer a
  serverless route or a hosted form provider so no secrets live in the client.

## Vercel Analytics (option)

- The simplest path on Vercel. Add `@vercel/analytics` and render `<Analytics />`
  in the root layout, then enable Web Analytics in the Vercel dashboard. No
  cookie banner needed for the basic product.
- Vercel Speed Insights (`@vercel/speed-insights`) is an easy add for Core Web
  Vitals if performance needs watching.

## Conversion goals (placeholder)

- **Primary:** a CalBank stakeholder contacts CPS (email or phone click, or a
  future form submit).
- **Secondary:** engagement depth, reaching the pricing section, opening both
  programme tabs, and visiting the Why CPS page.
- **Tertiary:** return visits from CalBank, a signal the proposal is being shared
  internally.
