# Portfolio — Homepage

Built from the project's Design Direction, Motion & Interaction Language,
Experience Blueprint, and Design System documents. Strategy was treated as
final; this implementation covers layout, hierarchy, components,
interactions, and responsive behavior only.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion

Fonts are self-hosted via Fontsource (no runtime calls to Google Fonts):
- **Fraunces Variable** — display serif, used for the weight-contrast hero
  headline and all section/case headings.
- **Hanken Grotesk Variable** — body and UI text.
- **Geist Mono** — metadata labels (roles, timelines, fact-block labels, nav).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm run start   # production build
```

## Structure

```
src/
  app/
    layout.tsx       — root layout, metadata
    page.tsx          — assembles the homepage from sections
    globals.css        — design tokens (color, type, spacing, motion) as
                          Tailwind v4 @theme variables, plus base/reset rules
  components/
    Navigation.tsx     — anchor nav, scroll-collapse, active-section
                          indicator, full-screen mobile menu
    Hero.tsx           — weight-contrast headline assembly (signature load
                          moment), then fully still
    FeaturedWork.tsx   — orchestrates the case grid + expansion state
    CaseStudyCard.tsx  — card with hover feedback, lead-case grid break
    CaseStudyDetail.tsx — shared-layout expansion to full case view,
                          pinned fact block, seven-part case framework
    ImpactHighlights.tsx — type-forward figures, linkable to source case
    PointOfView.tsx    — disclosure pattern (closed by default, reversible)
    About.tsx          — two-region split, role disclosure
    Contact.tsx        — single primary action
    Footer.tsx         — dark band, oversized wordmark, reveal-once
  lib/
    content.ts         — case study, impact figure, and belief data
                          (placeholder copy — swap in real project content)
```

## What's real vs. placeholder

The layout, components, motion, and interaction patterns are fully built
and match the design system. Case study content (Ledger, Atlas, Fielder,
North), impact figures, and point-of-view beliefs are placeholder copy
written to be structurally correct and easy to replace — swap the data in
`src/lib/content.ts` and the cover images in `public/` once real case
material is ready.

## Notable implementation decisions

- **Case expansion** uses Framer Motion's `layoutId` for a true
  shared-layout transition from card to detail view, satisfying the
  Motion doc's "nothing appears disconnected from where it came from."
- **Reduced motion** is handled globally in `globals.css` — all
  animation/transition durations collapse to near-zero under
  `prefers-reduced-motion: reduce`, so every section is fully legible
  and complete without motion.
- **Focus states** use a single global `:focus-visible` rule (oxblood
  ring, 2px offset) rather than per-component overrides, so keyboard
  navigation is consistent everywhere automatically.
- **Mobile nav** is a true full-viewport overlay (height measured from
  the actual header, not assumed), so it can't let page content show
  through beneath it.
- Case study detail exists in two forms that share the same content: an
  in-page shared-layout expansion (`CaseStudyDetail.tsx`, triggered from
  the index for the signature continuity transition) and a real route at
  `/work/[slug]` (`src/app/work/[slug]/page.tsx`) statically generated
  for each case, so a finished case can be sent as a direct link per the
  Blueprint's requirement. Both pull from the same `caseStudies` data and
  `caseSections` narrative content.
