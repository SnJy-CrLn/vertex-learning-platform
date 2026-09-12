# Implement the Vertex design system

## Goal
Turn `design/vertex-designsystem (1).png` (the design spec sheet: colors, type scale,
spacing, radius/shadows, icons, buttons, inputs, badges, status indicators, progress
bar, cards, navigation, principles) into reusable Tailwind v4 tokens and a small
component library in the `web` app, plus a specimen page that renders every token and
component so it can be checked against the reference image. This is foundation work —
no product pages yet, just the design system itself.

## Context read
- AGENTS.md (root) — project rules, workspace boundaries, "UI work" section (reproduce
  reference images exactly, responsive down to mobile, reuse existing patterns).
- Current repo is still the plain `create-next-app` starter (`app/page.tsx`,
  `app/layout.tsx`, `app/globals.css` untouched; no `components/` or `lib/` dirs yet).
  Two workspaces (Studio / web) described in AGENTS.md section 5 don't exist yet —
  the whole repo is currently a single Next.js app. This task only touches the
  design-system layer, so it doesn't require standing up the Studio workspace.
- Stack: Next.js 16 (App Router), React 19, Tailwind v4 (`@theme` inline tokens),
  TypeScript, ESLint. No component libraries installed yet.
- Fonts currently wired: Geist / Geist Mono via `next/font/google` in
  `app/layout.tsx`. The spec calls for Playfair Display (display/serif headings) and
  Inter (everything else) — neither is currently loaded.
- `design/vertex-designsystem (1).png` is the single source of truth for values below;
  read directly off it rather than re-deriving.

## Decisions / assumptions
- Treat this as the one Next.js app (no separate `web/` subfolder) since the Studio
  workspace doesn't exist yet — tokens and components live at the repo root
  (`app/`, `components/`, `lib/`), matching where `app/page.tsx` already lives.
- Colors, spacing (4px base unit), radius, and shadows become Tailwind v4 `@theme`
  variables so they're usable as ordinary utility classes (`bg-primary-500`,
  `rounded-md`, `shadow-lg`, `p-4`, etc.) rather than a parallel JS constants file.
- Type scale (Display 1/2, Heading 1/2/3, Body Large, Body, Small) becomes named
  `--text-*` theme tokens with paired line-height/weight, so `text-display-1` etc. are
  single utility classes matching the spec table exactly.
- Two font families: Playfair Display for Display 1/2, Inter for everything else,
  loaded via `next/font/google` and exposed as `--font-display` / `--font-sans` theme
  tokens, replacing Geist.
- Light-mode only. The spec sheet shows one palette with no dark variant, and product
  pages aren't built yet, so `app/globals.css` opts out of the OS dark scheme
  (`color-scheme: light`) rather than guessing a second palette.
- Components built as small, unstyled-API React components under `components/ui/`:
  `button.tsx` (primary/secondary/tertiary/text, default/hover/disabled), `input.tsx`
  (text input + select, per the field specs box), `badge.tsx` (video/lesson/popular
  tags), `status.tsx` (in progress/completed/now playing/locked indicators),
  `progress-bar.tsx`, `card.tsx` (course card, lesson video card, lesson card,
  resource card), `navigation.tsx` (top nav, breadcrumbs, pagination), `logo.tsx`
  (Vertex mark). Icons for section 06 go in `components/icons.tsx` as inline SVGs
  (24x24 grid, 2px stroke, both outline and filled variants) — no icon package added,
  since the spec's set is small and specific.
- A `/design-system` route renders every section of the spec (numbered 01–14, same
  order as the image) purely for visual verification against the reference — this is
  the "specimen sheet," not a product page, and can be deleted or hidden later once
  real pages exist.
- `app/page.tsx` stays the plain starter otherwise untouched, except swapping the
  Geist font references for the new Inter/Playfair setup so the root layout doesn't
  reference fonts that no longer exist, and a one-line link to `/design-system` so the
  page isn't a dead end.
- No new dependencies beyond the Google fonts already supported by `next/font/google`.

## Files expected to touch
- `app/globals.css` — replace default token block with the full `@theme` design-system
  tokens (colors, fonts, type scale, spacing, radius, shadows) and base layer styles.
- `app/layout.tsx` — swap Geist/Geist Mono for Playfair Display + Inter.
- `app/page.tsx` — minimal update: correct fonts, link to `/design-system`.
- `app/design-system/page.tsx` — new specimen page, sections 01–14.
- `components/ui/button.tsx`, `input.tsx`, `badge.tsx`, `status.tsx`,
  `progress-bar.tsx`, `card.tsx`, `navigation.tsx`, `logo.tsx` — new.
- `components/icons.tsx` — new, outline + filled icon set from section 06.
- `components/spec.tsx` — new, small layout helpers for the specimen page (section
  card, eyebrow label) so `design-system/page.tsx` isn't one giant file.
- `lib/cn.ts` — new, small `clsx`-style className merge helper used by the components.
- `.gitignore` — ignore `*.tsbuildinfo` / editor build artifacts if not already
  covered (check first; only touch if needed).

## Requirements
- Every value in the reference image (hex codes, sizes, line-heights, weights,
  spacing steps, radii, shadow values, button/field specs, icon grid specs) is
  reproduced exactly — no invented or approximated values.
- Components are generic and reusable (props for variant/state/size where the spec
  shows variants), not one-off markup copied per spec row.
- Responsive: the specimen page reflows sensibly down to mobile width (spec sections
  stack in a single column below the grid breakpoint) even though the reference is a
  single desktop sheet.
- No product/business logic — this is tokens + components + a verification page only,
  per AGENTS.md section 1 ("Build nothing beyond that").
- Stay inside the existing single-app structure; don't invent a `web/` workspace split
  that isn't needed yet.

## Security considerations
None — static UI/styling work, no data fetching, no secrets, no user input handling.

## Acceptance criteria
- `/design-system` renders all 14 numbered sections from the reference image, visually
  matching colors, type, spacing, radius/shadow samples, icons, button states, input
  states, badges, status indicators, progress bar, the four card types, and the nav/
  breadcrumb/pagination row.
- All new components are typed, exported from `components/ui/`, and used by the
  specimen page (not dead code).
- `npm run lint` and `npx tsc --noEmit` pass with no errors.
- `npm run build` succeeds.
- Home page (`/`) still renders without errors and links to `/design-system`.

## Checks to run
- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`
- `npm run dev` and manually compare `/design-system` against
  `design/vertex-designsystem (1).png`

## Manual test steps
1. `npm run dev`, open `http://localhost:3000/` — confirm it loads without console
   errors and has a working link to the design system page.
2. Open `http://localhost:3000/design-system`.
3. Side-by-side with `design/vertex-designsystem (1).png`, check each section:
   - 01 Colors: 5 primary + 8 neutral swatches, correct hex labels.
   - 02/03 Typography: Playfair Display vs Inter samples; type scale table matches
     size/line-height/weight/use for all 8 rows.
   - 04 Spacing: 4px-step blocks from 4 to 64.
   - 05 Radius & Shadows: 6 radius samples (4–24px + full), 4 shadow samples.
   - 06 Icons: outline and filled sets present, visually 24x24 with consistent stroke.
   - 07 Buttons: primary/secondary/tertiary/text × default/hover/disabled render
     correctly, 44px height.
   - 08 Inputs: text input with search icon + shortcut hint, select field, focus
     ring uses primary-400.
   - 09 Badges: video/lesson/popular tags.
   - 10 Status: in progress / completed / now playing / locked indicators.
   - 11 Progress bar: filled to 35% with label.
   - 12 Cards: course card, video lesson card, lesson card, resource card.
   - 13 Navigation: logo + nav links, breadcrumbs, pagination control.
   - 14 Principles: 4 principle callouts with icons.
4. Resize the browser to a mobile width and confirm sections stack into a single
   column without horizontal scrolling or overlap.
