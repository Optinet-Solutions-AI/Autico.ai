# Brand — Autico.ai

> Source of truth for visual identity. Update here, then propagate to `globals.css`.

## Voice
Direct, technical, pragmatic. We say "we shipped" not "we delivered." We avoid AI buzzwords ("synergy", "transform", "revolutionize"). We talk like operators.

## Palette

| Token | Hex | Use |
|-------|-----|-----|
| `--color-bg` | `#0A0A0A` | Page background |
| `--color-bg-elev` | `#111111` | Elevated panels, banners |
| `--color-bg-card` | `#161616` | Cards, inputs |
| `--color-fg` | `#F5F5F5` | Primary text |
| `--color-fg-muted` | `#A3A3A3` | Secondary text |
| `--color-fg-dim` | `#6B6B6B` | Tertiary text, captions |
| `--color-border` | `#262626` | Default borders |
| `--color-border-strong` | `#3A3A3A` | Hover/focus borders |
| `--color-accent` | `#FF5A1F` | CTAs, highlights, brand |
| `--color-accent-hover` | `#FF7340` | Hover state |
| `--color-accent-dim` | `#B8401A` | Pressed/secondary accent |

> **Confirm with user:** the exact orange. Sample the reference site and replace `#FF5A1F` if a different hue is preferred.

## Typography

- **Stack:** `ui-sans-serif, system-ui, ...` (system fonts — fast, free, no CDN dependency)
- **Headings:** `font-weight: 600`, `letter-spacing: -0.03em`
- **Body:** `font-weight: 400`, line-height ~1.6

> Optional upgrade: switch to **Geist Sans** via `next/font/google` once we're ready to commit to a custom font.

## Logo

- File: `public/logo.svg` (full lockup), `public/icon.svg` (mark only)
- Mark: rounded-square monogram **A** in orange on near-black, with a small dot accent
- Wordmark: "autico" in white + ".ai" in orange
- **Rule:** the mark is original — it is not the openclaw paw/claw. Do not replace it with anything that resembles the reference.

## Iconography

- Library: hand-rolled SVGs (Features section uses inline paths). Lucide is fine to add if we need more.
- **Do NOT** use the same icon family or visual language as openclaw.

## Imagery

- Generated with Gemini 2.5 Flash Image ("nano-banana") via `tools/generate_product_image.py` once `GEMINI_API_KEY` is set.
- Style: deep black backgrounds, orange-edged geometric forms, low ambient noise grain.
- All imagery is original — never lift from openclaw or any reference.
