# Deployment

The site is a standard Next.js 16 App Router app. It deploys to Vercel with the
default Next.js preset, no special configuration, and no `vercel.json`.

## GitHub repo setup

1. Create a new repository, for example `broadbrandsa/calbank-academy-of-trusted-advisors`.
2. From the project root:

   ```bash
   git init
   git add -A
   git commit -m "Initial commit: CalBank Academy of Trusted Advisors proposal site"
   git branch -M main
   git remote add origin git@github.com:broadbrandsa/calbank-academy-of-trusted-advisors.git
   git push -u origin main
   ```

   The `.gitignore` already excludes `node_modules`, `.next`, `.env*`, and
   `.vercel`.

## Vercel project setup

1. In Vercel, **Add New → Project**, and import the GitHub repo.
2. Vercel auto-detects the framework. Confirm the settings below.

| Setting           | Value                          |
| ----------------- | ------------------------------ |
| Framework preset  | **Next.js**                    |
| Root directory    | project root (leave as is)     |
| Build command     | `pnpm build` (default)         |
| Install command   | `pnpm install` (default)       |
| Output directory  | leave **blank** (Next.js default) |
| Node version      | 20.x or later                  |

3. Deploy. The first build produces a preview URL to share with CalBank.

## Root directory rules

- The repo root **is** the app root. There is no monorepo and no nested package.
- If this project is ever committed inside a larger repo, set Vercel's **Root
  Directory** to this folder so the build runs in the right place.

## Build command

- `pnpm build` runs `next build`. Both routes (`/` and `/why-cps`) prerender as
  static content, so the deploy is fast and cheap.
- Run `pnpm build` locally before pushing to catch any TypeScript issue early.

## Environment variable management

- No environment variables are required to build or run the site today.
- If analytics is added later (see `TRACKING_PLAN.md`), set
  `NEXT_PUBLIC_GA_ID` in Vercel under **Project → Settings → Environment
  Variables**, for the Production and Preview environments. Never commit secrets;
  `.env*` is gitignored.

## How to redeploy

- **Automatic:** push to `main`. Vercel rebuilds and redeploys on every push.
  Pull requests get their own preview deployments.
- **Manual:** in the Vercel dashboard, open the project and use **Redeploy** on
  the latest deployment.
- **Content edits:** change `src/content/proposal.ts`, commit, and push. The site
  rebuilds automatically.

## Custom domain (optional)

- Add a domain or subdomain (for example `calbank.cps.co.za`) under **Project →
  Settings → Domains** and follow the DNS instructions.
- The site currently sets `robots: { index: false }`, so it will not be indexed
  by search engines. Remove that in `layout.tsx` and `why-cps/page.tsx` only if
  public indexing is wanted.
