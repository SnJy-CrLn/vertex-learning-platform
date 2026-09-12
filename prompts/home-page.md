# Implement the Vertex home page

## Goal
Turn `design/vertex-home.png` into the real `/` route: top nav with account
affordances, hero with headline + search, an "All Courses" preview grid, and a
decorative footer strip — built entirely from the existing design-system tokens
and components, reproduced exactly, responsive down to mobile.

## Context read
- AGENTS.md (root) — section 1 (build nothing beyond the reference), section 3
  (UI work: reproduce the reference exactly, no restyling, responsive down to
  mobile with no mobile reference given), section 5 (pages are read-only,
  display stored data only).
- `design/vertex-home.png` — the reference screenshot, read directly.
- Existing design system from `prompts/design-system.md`: tokens in
  `app/globals.css` (`@theme` colors/type/spacing/radius/shadow), fonts wired
  in `app/layout.tsx` (Playfair Display = `font-display`, Inter = `font-sans`).
- Existing components inspected and reused as-is: `Logo`, `Button`
  (primary/secondary/tertiary/text), `TextInput` (search variant with ⌘K
  affordance), `Badge`, `CourseCard`, `TopNav`. Icon set in `components/icons.tsx`
  (Bell, Search, ChevronRight, User, etc.) — no straight arrow icon exists yet.
- Current `app/page.tsx` is the placeholder starter page (logo + link to
  `/design-system`); it gets replaced by the real home page. `/design-system`
  stays untouched and reachable at its own route as the verification sheet.

## Decisions / assumptions
- This is real page content (course titles, descriptions, stats, the "found
  weekly" line) with no backend yet, since the catalog/Sanity schema doesn't
  exist. Hardcode the three course cards and copy shown in the screenshot as
  static placeholder data local to the page — this is presentational scaffolding
  only, not a fake data-fetching layer, and it gets replaced once the real
  catalog page/query exists.
- `TopNav` currently only renders the logo + nav links with no right-side slot.
  Add an optional `right` ReactNode prop to `TopNav` (default undefined, renders
  nothing extra) rather than forking a new header component, so the existing
  design-system specimen usage keeps working unchanged. The home page passes a
  `right` node containing a bell icon button and a circular avatar placeholder.
- No real user photo exists. Render the avatar as a circular div with a
  gradient/neutral fill and `UserIcon` glyph — a stand-in, not a Clerk-wired
  avatar (Clerk isn't installed yet).
- The screenshot's CTA arrow and the "View all courses" arrow are a straight
  right arrow, not the caret-style `ChevronRightIcon` already in the icon set.
  Add one new `ArrowRightIcon` to `components/icons.tsx` following the same
  24x24 / 2px stroke / round cap convention as the rest of the set, since the
  icon system is explicitly meant to be extended for cases like this.
- The eyebrow pill ("INTELLIGENT LEARNING") is a new small visual pattern (pill
  shape, border, primary-100 bg, primary-500 text, uppercase tracked label) —
  distinct from `Badge` (which is a small rectangular tag with `rounded-xs`).
  Build it as a plain inline element on the page using existing tokens rather
  than overloading `Badge` with a shape it doesn't otherwise have.
- Course card logos: reuse `CourseCard`'s existing initial-square pattern, but
  it currently hardcodes `bg-neutral-900`. Add an optional `iconBg` className
  prop (default keeps `bg-neutral-900` so the design-system specimen page is
  unaffected) so Docker's card can use a light blue square and TypeScript's a
  blue square, matching the reference. Docker's whale mark is rendered as an
  emoji glyph (🐳) inside the square rather than importing a third-party brand
  SVG asset.
- The bottom decorative bar strip (uneven orange bars fading upward) is a pure
  CSS decoration: a row of `div`s with varying heights and a
  primary-300→transparent gradient, built inline on the page. Not a reusable
  component since it's a one-off page flourish, not a system pattern.
- Mobile: nav keeps logo + right-side icons, "Courses"/"My Learning" links wrap
  normally under Tailwind's flex-wrap; hero text drops from `text-display-1` to
  a smaller size at small breakpoints; the search bar stays full width; the
  3-column course grid collapses to 1 column below `md`.
- Replacing `app/page.tsx` entirely removes the old "View Design System" link
  from the home page; `/design-system` remains directly reachable by URL, which
  is enough since it's a dev-only verification sheet, not product UI.

## Files expected to touch
- `app/page.tsx` — full rewrite: hero, search, course grid, footer strip.
- `components/ui/navigation.tsx` — add optional `right` prop to `TopNav`.
- `components/ui/card.tsx` — add optional `iconBg` prop to `CourseCard`.
- `components/icons.tsx` — add `ArrowRightIcon` (+ filled variant to match the
  existing pattern of every icon shipping both).

## Requirements
- Match `design/vertex-home.png` exactly: copy text, layout, spacing, colors,
  typography (serif headline, sans body), button and search bar styling, card
  contents (title, description, level/duration/module stats), and the footer
  line + decorative bars.
- Reuse existing tokens/components; only add the two small, justified
  extensions above (TopNav right slot, CourseCard iconBg, ArrowRightIcon).
- Responsive down to mobile per AGENTS.md section 3 — no reference given for
  mobile, so adapt sensibly (stack, collapse to 1-column grid) while keeping
  desktop pixel-faithful.
- No business logic, no data fetching, no auth wiring — this is presentational
  only, consistent with "pages are read-only" and the fact that Clerk/Sanity
  aren't wired up yet.

## Security considerations
None — static UI only, no user input handling, no secrets, no network calls.

## Acceptance criteria
- `/` visually matches `design/vertex-home.png` at desktop width: nav, hero,
  eyebrow pill, headline, subtext, CTA button, search bar, "All Courses"
  section with 3 cards and "View all courses" link, footer line, decorative
  bars.
- Resizing to mobile width reflows without horizontal scroll or overlap.
- `npm run lint` and `npx tsc --noEmit` pass with no errors.
- `npm run build` succeeds.
- `/design-system` still renders correctly (TopNav/CourseCard changes are
  additive and don't alter its existing usage).

## Checks to run
- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`
- `npm run dev` and manually compare `/` against `design/vertex-home.png`

## Manual test steps
1. `npm run dev`, open `http://localhost:3000/`.
2. Compare side-by-side with `design/vertex-home.png`: nav bar (logo, Courses,
   My Learning, bell, avatar), eyebrow pill, headline, subtext, Explore Courses
   button, search bar with ⌘K hint, All Courses heading + View all courses
   link, the 3 course cards (Next.js/Docker/TypeScript) with their stats rows,
   the "New courses and lessons added every week" line, and the bottom bar
   decoration.
3. Resize the browser down to ~375px width and confirm the nav, hero, search
   bar, and course cards stack cleanly with no horizontal scroll.
4. Open `http://localhost:3000/design-system` and confirm the Navigation (13)
   and Cards (12) sections still render exactly as before.
