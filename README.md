# Meghana — Portfolio

Editorial portfolio site. Next.js 15 (App Router), TypeScript, **styled-components**, Framer Motion, Lenis smooth scroll. Migrated off Tailwind per an explicit stack-change request — see git history / conversation record for the reasoning.

## Status — read this before assuming anything works

**Actually styled and working:** Hero only, rendered at `/`.

**Broken if visited, not just "not yet built":** `/work/kundaroma` and `/work/veloura` still exist as routes and compile successfully, but their components still use the pre-migration Tailwind classNames — with no Tailwind processor running, those classNames do nothing. Visiting either page right now shows unstyled content, not a missing page. This needs the same migration Hero just got.

**Not wired into the homepage at all (commented out in `app/page.tsx`), same reason:** Featured Work, Also Built, Writing, Experience, Skills, Contact. These still exist as files with real content, just not rendered — importing them as-is would silently ship unstyled sections.

**Migration order, recommended:** Featured Work next (it links to the two case study pages, so migrating it and them together makes sense), then the remaining sections in page order.

## Setup

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

Fonts fetch from Google Fonts at build time via `next/font/google` — needs real internet access. The only build failure encountered in development was this sandbox specifically being unable to reach `fonts.googleapis.com`; confirmed unrelated to the code by temporarily stubbing the font import and rebuilding successfully (same method used throughout this project's development).

## Design token system

`lib/theme.ts` is the single source of truth — colors, type scale, spacing, radius, motion, breakpoints — provided via `ThemeProvider` (`lib/providers.tsx`) and consumed through styled-components' `theme` prop. Two reusable primitives live in `components/primitives/`: `Text` (covers the entire locked type scale via a `$variant` prop) and `Container`/`Stack`/`Section` (layout). New components should reach for these instead of hardcoding a value.

## Real, open items — not stylistic, actually blocking

1. **The Kundaroma proof image doesn't exist yet.** Same placeholder/TODO pattern as before, now in `components/case-study/proof-frame.tsx`.
2. **The accent color (`lib/theme.ts` → `colors.accent`) is still a placeholder** pending real sampling from the Kundaroma/Veloura assets — now used in more places than before (Hero, buttons, links, focus rings), so this matters more than it used to.
3. **Six sections need Tailwind → styled-components migration** before they can be safely re-added to the page (see Status above).

## Architecture notes

- `lib/registry.tsx` is required styled-components + Next.js App Router SSR boilerplate — not a design decision, don't touch it without understanding why it exists.
- `lib/smooth-scroll-provider.tsx` (Lenis) explicitly does not initialize if the visitor has `prefers-reduced-motion` set — this is a hard accessibility requirement, not a toggle.
- The Hero's image-interrupts-headline effect keeps the full sentence intact in the DOM/accessibility tree at all times — the visual overlap is CSS positioning only, never a fragmented sentence. See the comment block in `components/sections/hero.tsx` for the full reasoning.

## Tech stack

Next.js 15.5.23 · React 19 · TypeScript · styled-components 6 · Framer Motion · Lenis · Lucide Icons · next/font · next/image
