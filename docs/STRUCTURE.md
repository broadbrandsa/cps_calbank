# Structure

## Folder structure

```
calbank-academy-of-trusted-advisors/
├── docs/                       # this documentation
├── public/
│   └── images/
│       ├── badges/             # SAQA, QCTO, CHE, Brandon Hall awards
│       ├── logos/              # client logos for the trust band
│       ├── photos/             # photography (hero, platform)
│       ├── cps-logo.svg        # CPS wordmark (knocked out to white on dark)
│       └── cps-logo.avif
├── src/
│   ├── app/
│   │   ├── globals.css         # the CPS Design System, ported to Tailwind v4
│   │   ├── layout.tsx          # fonts (Inter + JetBrains Mono), metadata
│   │   ├── page.tsx            # the proposal page, composes sections
│   │   └── why-cps/page.tsx    # the Why CPS page
│   ├── components/
│   │   ├── icons.tsx           # CPS-style inline SVG icon set (Lucide-style)
│   │   ├── lock-screen.tsx     # passcode access gate (wraps the app in layout)
│   │   ├── reveal.tsx          # scroll-reveal wrapper (respects reduced motion)
│   │   ├── section-heading.tsx # eyebrow + heading + lede
│   │   ├── sections/           # one file per page section
│   │   └── ui/                 # shadcn primitives
│   ├── content/
│   │   └── proposal.ts         # ALL copy and data lives here
│   └── lib/
│       ├── lock.ts             # access code + storage key + lockProposal()
│       └── utils.ts            # cn() class helper
├── components.json             # shadcn config
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Section composition rules

- Each section is a self-contained component in `src/components/sections/`,
  exporting a single named component (for example `Tracks`, `Journey`).
- `page.tsx` and `why-cps/page.tsx` import sections and compose them in order.
  Reordering the page is a matter of moving imports.
- Sections read their copy and data from `src/content/proposal.ts`. They do not
  hold copy inline, so content edits stay in one place.
- Shared building blocks: `SectionHeading` for the eyebrow and title, `Reveal`
  for scroll-in animation, and the `icons.tsx` set for all iconography.
- Dark sections use the `.section-dark` utility. The signature italic phrase uses
  `.gradient-accent` (and `.gradient-accent.warm` on dark backgrounds). The yellow
  CTA uses `.btn-yellow`. These all live in `globals.css`.
- Interactive grouping (the two programmes, the two journeys) uses the shadcn
  `Tabs` primitive in `components/ui/tabs.tsx`.

## Content management approach

- **Single source of content:** `src/content/proposal.ts`. To change a price, a
  transition, a journey step, or a contact detail, edit the relevant export there
  and the whole site updates.
- **House style:** second person ("you"), sentence case everywhere except the
  JetBrains Mono eyebrow labels, South African spelling (programme, organisation,
  recognised), specific and credentialed numbers, and no em dashes. Use commas or
  simple phrasing instead.
- **Images** live in `public/images/`. Reference them by absolute path (for
  example `/images/photos/hero-bg.jpg`).
- **Brand colours and tokens** are defined once in `globals.css` under `:root`.
  The **home page** is wrapped in a `.calbank-theme` scope that retunes the
  palette to CalBank gold (`#FDD300`), a warm off-white canvas (`#F6F5F2`), white,
  and CalBank navy accents. The **Why CPS page** keeps the native CPS palette
  (blue, purple, yellow), so it reads as the CPS story. Surface and brand tokens
  are CSS variables, which is what makes the scoped re-skin possible.
