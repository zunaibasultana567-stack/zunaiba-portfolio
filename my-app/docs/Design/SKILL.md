---
name: portfolio-design-system
description: >
  The color palette, typography, and UI/component patterns for this portfolio
  site, derived from the reference screenshots in docs/Design/Reference/.
  ALWAYS consult this before building, styling, redesigning, or adding any
  page, section, or component to this site — hero sections, nav bars,
  buttons, cards, footers, contact sections, anything visual. Also use it
  whenever the user asks about colors, fonts, brand, theme, "make it look
  like X," or design in general, even if they don't say "design system"
  explicitly. Do not invent new colors, fonts, or component shapes when this
  skill already defines one that fits.
---

# Portfolio Design System

Source of truth: 6 full-page screenshots in `docs/Design/Reference/` of a
reference portfolio site. Every token below was read directly off those
images — don't drift from them without checking the reference first.

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--bg-light` | `#E9E9E7` | Default section background (light sections) |
| `--bg-dark` | `#0E2B1E` | Alternate full-bleed section background (deep forest green) |
| `--accent` | `#C4D82E` | Lime/chartreuse — CTA buttons, active nav pill, highlighted inline words, small accent bars, copy-icon fill. Use sparingly, never as a body background |
| `--text-dark` | `#12231A` | Primary text on light backgrounds (near-black, green-tinted charcoal) |
| `--text-light` | `#F2F2EF` | Primary text on dark backgrounds (off-white) |
| `--text-muted` | `#7C8A80` | Secondary/muted text — subheads, supporting copy, on either background |
| `--link-accent` | `#2F6F5E` | Teal-green used only for emphasized inline words/links on light backgrounds (e.g. "tailor-made," "quality") |

Content-tile backgrounds (portfolio grid images) use muted earthy tones —
sage green, taupe/beige, dark brown — but these belong to imagery framing,
not the core UI palette. Don't reuse them for buttons or nav.

Wire these into `my-app/app/globals.css` as CSS custom properties, following
the existing `--background` / `--foreground` pattern already there, rather
than hardcoding hex values in components:

```css
:root {
  --background: #E9E9E7;
  --foreground: #12231A;
  --accent: #C4D82E;
  --muted: #7C8A80;
  --link-accent: #2F6F5E;
}
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0E2B1E;
    --foreground: #F2F2EF;
  }
}
```

## Typography

**Family:** a rounded, geometric sans-serif — visually matches General Sans /
Switzer / Onest (common no-code/Framer-built fonts; the reference site's own
copy mentions "no-code" and "Framer"). The project currently has Geist/Geist
Mono scaffolded in `layout.tsx` — swap in one of the above via
`next/font/google` (Onest is available on Google Fonts) or self-host via
Fontsource if using Switzer/General Sans.
| Role | Size (desktop) | Weight | Case / tracking |
|---|---|---|---|
| Display / hero heading | ~96–140px | Bold | Sentence case, tight line-height |
| Section heading | ~48–64px | Bold/Semibold | Sentence case |
| Subhead / lead paragraph | ~20–24px | Regular/Medium | Sentence case, muted color, can mix accent-colored words inline |
| Body copy | ~16–18px | Regular | Sentence case, muted color, generous line-height |
| Nav / label / tag (e.g. "HOME", "01") | ~12–14px | Medium | UPPERCASE, letter-spaced |

Never set headings in all-caps — sentence case only. Reserve uppercase +
letter-spacing for small UI labels (nav items, numbered list tags, buttons).

## Layout & Components

- **Alternating sections:** full-bleed sections alternate `--bg-light` and
  `--bg-dark` as the page scrolls — don't stack two of the same background
  back-to-back.
- **Floating pill nav:** center-anchored, pill-shaped nav bar (e.g. Home /
  Works / About) that persists across all sections; the active item gets an
  `--accent` pill background.
- **Pill CTA button:** primary call-to-action (e.g. "Contact") is a lime
  (`--accent`) pill with dark text and a small circular arrow icon, fixed
  top-right.
- **Side tab:** a vertical "Quick info"-style tab fixed to the right edge,
  present across sections.
- **Scroll affordance:** a circular button with a down-arrow, bottom-left of
  the hero, to hint at scrolling.
- **Image cards:** portfolio/work items are soft-rounded-corner tiles/cards,
  arranged in a horizontal or grid flow.
- **Social row:** small, unobtrusive social icons bottom-right of relevant
  sections.
- **Copy-to-clipboard micro-interaction:** contact email shown as plain text
  next to a small accent-colored copy-icon button.
- **Whitespace:** generous throughout — let large type and single images
  breathe rather than filling sections densely.

## Imagery

- Photography is consistently black-and-white / desaturated — this is the
  default treatment for portrait and hero imagery, not an exception.
- Reserve color (muted earthy tones) for portfolio content tiles/screenshots
  themselves, not for photos of people.

## Reference

Derived from `docs/Design/Reference/Screenshot 2026-07-31 194732.png`
through `...194853.png` (6 files). Re-check those screenshots directly if a
token here seems ambiguous or you need a pattern not covered above.
