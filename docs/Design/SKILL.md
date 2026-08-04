---
name: portfolio-design-system
description: >
  The color palette, typography, and UI/component patterns for this portfolio
  site, derived from the reference screenshots and video in
  docs/Design/Reference/. ALWAYS consult this before building, styling,
  redesigning, or adding any page, section, or component to this site — hero
  sections, nav bars, buttons, cards, footers, contact sections, anything
  visual. Also use it whenever the user asks about colors, fonts, brand,
  theme, "make it look like X," or design in general, even if they don't say
  "design system" explicitly. Do not invent new colors, fonts, or component
  shapes when this skill already defines one that fits.
---

# Portfolio Design System

Source of truth: 7 full-page screenshots and a 31-second screen recording in
`docs/Design/Reference/` of a reference site ("ISO Meet") for typography,
layout, and motion patterns, plus explicit color-palette instructions from
the site owner (light background, dark charcoal footer, deep navy accent)
that supersede the reference screenshots' own monochrome black/white palette
for color specifically. Don't drift from either source without checking
back first.

## Color palette

| Token | Hex | Usage |
|---|---|---|
| `--bg-light` / `--background` | `#FFFFFF` | Page background — every section except the footer is light. |
| `--accent` | `#1E3A5F` | Deep navy — primary CTA pills, active nav pill, focus rings, emphasized links. |
| `--text-dark` / `--foreground` | `#1A1A1A` | Primary text on light backgrounds. |
| `--text-light` | `#FFFFFF` | Text on `--accent` fills. |
| `--text-muted` | `#6B6B6B` | Secondary/muted text — subheads, inactive nav links, placeholder text. |
| `--link-accent` | `#1E3A5F` | Emphasized inline links — mirrors `--accent` so links read as "the" brand color. |
| `--input-bg` | `#F2F2F2` | Pill-shaped form field fill. |
| `--card-pink` | `#FEEDFD` | Pastel feature-card tint. |
| `--card-gray` | `#E7EAEC` | Pastel feature-card tint. |
| `--card-blue` | `#DCEEFE` | Pastel feature-card tint. |
| `--card-lavender` | `#EAE4F7` | Pastel feature-card tint. |
| `--card-mint` | `#E2F3E7` | Pastel feature-card tint. |
| `--gradient-start` → `--gradient-end` | `#EF9DB3` → `#D2AE8C` | Pink-to-tan gradient border accent (`.gradient-border` utility), used sparingly on a single standout card. |
| `--bg-dark` | `#1C1B19` | Dark charcoal — used ONLY for the site footer, nowhere else. |
| `--text-on-dark` | `#F5F4F2` | Primary text on the charcoal footer. |
| `--text-on-dark-muted` | `#9A9793` | Secondary/muted text and nav links on the charcoal footer. |

Section rhythm comes from thin `border-t` dividers and pastel card blocks —
never from alternating full-bleed background colors, with one deliberate
exception: the footer is dark charcoal (`--bg-dark`) while every other
section stays light. Don't extend the dark treatment to any other section.

These live as CSS custom properties in `my-app/app/globals.css`, wired into
Tailwind v4 utilities via the config-free `@theme inline` block (this repo
has no `tailwind.config.*`).

## Typography

**Family:** rounded, geometric sans-serif (`Onest`, via `next/font/google` in
`layout.tsx`) for all body/UI text. The reference decorates select letters
within headings with an italic serif accent (e.g. "F*or* ev*er*yone wh*o*
cre*a*tes") — a nice-to-have flourish, not a structural requirement; don't
block work on adding a second font family for it.

**Scale and usage:**

| Role | Size (desktop) | Weight | Case / tracking |
|---|---|---|---|
| Display / hero heading | ~56–72px | Bold | Sentence case, tight line-height |
| Section heading | ~36–48px | Bold | Sentence case |
| Subhead / lead paragraph | ~18–20px | Regular | Sentence case, muted color |
| Body copy | ~16px | Regular | Sentence case, muted color, generous line-height |
| Nav / label / tag | ~12–14px | Medium | Sentence case for nav links; uppercase + letter-spacing reserved for small tags/labels only |

## Layout & components

- **All-light, divider-based rhythm:** every section shares the same white
  background. Separation between sections comes from a thin `border-t`
  (`border-text-dark/10`), not from alternating background colors. Pastel
  card blocks (see palette) provide visual variety within a section instead.
- **Floating pill nav:** center-anchored, pill-shaped nav bar that persists
  across all sections. The active item gets a navy (`--accent`) pill
  background with white text. Clicking a link smooth-scrolls to that
  section's anchor (native `scroll-behavior: smooth`, set globally).
- **Pill CTA button:** primary call-to-action is a navy (`--accent`) pill
  with white text and a small circular arrow icon.
- **Pastel feature cards:** flat, soft-pastel, rounded-corner tiles, no
  photos as card backgrounds. Rotate through the 5 `--card-*` tints for
  adjacent cards so two identical tints never sit next to each other.
- **Horizontal auto-scroll marquee:** a continuously auto-scrolling strip of
  pill-chips (category/skill labels), independent of page scroll, looping
  seamlessly leftward at a constant ~60px/s, pausing on hover. Implemented in
  `components/ui/Marquee.tsx` — a duplicated-content flex track animated via
  the `animate-marquee` utility (`@theme inline` token + `@keyframes marquee`
  in `globals.css`), with duration computed from measured track width so
  speed stays constant regardless of item count. Currently used for the
  About section's skills list.
- **Scroll-reveal fade-up:** content fades and slides up into view on
  scroll, via `hooks/useInView.ts` + `components/ui/ScrollReveal.tsx`
  (`IntersectionObserver`-driven, reveals once). The hero's own entrance uses
  a separate staggered `animate-fade-slide-up` keyframe. Reuse these existing
  components for any new scroll-reveal need — don't rebuild the pattern.
- **Image cards:** portfolio/work items are soft-rounded-corner tiles,
  arranged in a horizontal or grid flow.
- **Social row:** small, unobtrusive social icons, styled with `text-current`
  so they inherit whatever section text color they sit in.
- **Copy-to-clipboard micro-interaction:** contact email shown as plain text
  next to a small navy-fill copy-icon button.
- **Whitespace:** generous throughout — let large type and single images
  breathe rather than filling sections densely.
- **Profile photo ring + glow:** the Hero photo is circular (`rounded-full`,
  `object-cover`) wrapped in a `.profile-ring` gradient border (`--accent` →
  `--accent-light` → `--accent`) with a soft navy glow that intensifies and
  scales slightly on hover, plus a `.profile-glow` blurred radial-gradient
  light pulsing softly behind it (`pulse-glow` keyframe, respects
  `prefers-reduced-motion` via the existing global rule).
- **Unified header:** a `sticky top-0` full-width bar (logo left, inline
  nav links center, Contact CTA right) rather than separate floating
  elements — the real logo (`public/images/logo.png`) is wired in; swap that
  file directly for a new logo, no layout changes needed. Nav links collapse
  below `md` (logo + Contact CTA remain).
- **Media upload placeholders:** clearly-marked slots for content the site
  owner will add later — dashed border, dark-charcoal-tinted box (`--bg-dark`,
  not a pastel tint, so it reads as "media slot" rather than "content card"),
  centered icon + label describing what to upload. Used throughout the
  Services detail page (`components/ui/MediaPlaceholder.tsx`).
- **Testimonial cards:** plain bordered white cards (not a pastel tint, to
  stay visually distinct from feature cards), star rating row, avatar + name
  + role, quote text.

## Imagery

Photography is full-color, warm, and editorial — never desaturated.

## Motion

- Respect `prefers-reduced-motion: reduce` globally — already enforced in
  `globals.css`, collapsing all animation/transition durations to near-zero.
- Marquee: continuous linear loop, pauses on hover, freezes cleanly under
  reduced motion (the global rule above is sufficient; no bespoke escape
  hatch needed).
- Scroll-reveal: fade + translateY(8–28px), `cubic-bezier(0.16, 1, 0.3, 1)`
  or Tailwind's default `ease-out`, 300–800ms depending on element size,
  staggered via delay for grouped elements.

## Reference

Derived from `docs/Design/Reference/Screenshot 2026-08-01 193255.png` through
`...193409.png` (7 files) and `Screen Recording 2026-08-01 193158.mp4` (31s —
source of the marquee auto-scroll, nav-triggered smooth scroll, and segmented
tab-toggle observations). Re-check those files directly if a token here seems
ambiguous or you need a pattern not covered above.
