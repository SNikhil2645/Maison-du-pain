---
name: Maison du Pain
description: Artisan Bakery & Custom Cakes
colors:
  brand-900: "oklch(35% 0.14 30)"
  brand-800: "oklch(45% 0.16 30)"
  brand-500: "oklch(60% 0.18 30)"
  brand-200: "oklch(88% 0.06 30)"
  brand-100: "oklch(95% 0.03 30)"
  bg-base: "oklch(99% 0.005 30)"
  bg-surface: "oklch(100% 0 0)"
  text-ink: "oklch(25% 0.06 30)"
  text-muted: "oklch(50% 0.06 30)"
  border: "oklch(92% 0.02 30)"
typography:
  display:
    fontFamily: "'Forum', serif"
    fontWeight: 400
  body:
    fontFamily: "'Albert Sans', sans-serif"
    fontWeight: 400
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "100px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  btn-gold:
    backgroundColor: "{colors.brand-500}"
    textColor: "{colors.bg-surface}"
    rounded: "{rounded.full}"
  btn-gold-hover:
    backgroundColor: "transparent"
    textColor: "{colors.brand-500}"
---

# Design System: Maison du Pain

## 1. Overview

**Creative North Star: "The Artisanal Sanctuary"**

Warm, elegant, and deeply crafted. This design system leans into the physical, tactile nature of artisan baking—focusing on patience, craft, and premium ingredients. It explicitly avoids the artificial constraints of SaaS scaffolding, flat generic neutrals, and over-animated "web 3" tropes.

**Key Characteristics:**
- Muted, deeply saturated brand tones anchored in baked terracotta
- Soft layering with diffuse ambient shadows
- Refined, editorial typography pairing a classic serif with a warm geometric sans
- Tactile, generously padded touch targets

## 2. Colors

The palette is rooted in the warmth of the bakery: Terracotta & Baked Clay.

### Primary
- **Terracotta Primary** (oklch(60% 0.18 30)): The core brand color. Used for primary actions, subtle accents, and distinct typography highlights.
- **Deep Oxblood** (oklch(35% 0.14 30)): Used for deep contrast moments and intense hover states.

### Neutral
- **Off-White Tinted Base** (oklch(99% 0.005 30)): The page background, slightly tinted toward the brand hue to avoid stark, uncrafted white.
- **Pure White Surface** (oklch(100% 0 0)): Used for cards and elevated elements to separate them from the background.
- **Ink Text** (oklch(25% 0.06 30)): Used for all primary body and heading copy to maintain an editorial softness over harsh `#000`.
- **Subtle Border** (oklch(92% 0.02 30)): For refined structural divisions.

**The Restrained Strategy Rule.** The brand relies heavily on the "Committed" color strategy where the saturated terracotta sets the identity but never overwhelms the content. Neutrals are tinted toward the brand hue, never generic gray.

## 3. Typography

**Display Font:** `Forum`, serif
**Body Font:** `Albert Sans`, sans-serif

**Character:** A highly elegant, classic Roman-proportioned serif paired with a clean, slightly humanist geometric sans that provides excellent legibility.

### Hierarchy
- **Display** (400, up to 4rem): Used sparingly for hero headers and section titles. Allowed to breathe.
- **Headline** (400, 2.4rem): Used for cards and split-section headlines.
- **Body** (400/500, 1rem to 1.15rem): Used for paragraph copy. Capped at 65ch width for optimal reading.
- **Label** (600, 0.72rem, wide tracking): Used for eyebrows, badges, and small tags.

**The Artisanal Type Rule.** Never use training-data defaults (Inter, Roboto) paired with generic serifs (Playfair). Treat typography as editorial craft.

## 4. Elevation

Soft Layering (Ambient, diffuse shadows only when resting or hovering). Shadows are used to lift tactile elements off the page lightly without feeling "app-like".

### Shadow Vocabulary
- **Card Shadow** (`0 4px 24px oklch(0% 0 0 / .04)`): Ambient, soft resting state for specialty cards.
- **Hover Lift** (`0 8px 30px oklch(60% 0.18 30 / .3)`): A pronounced, tinted glow when interacting with primary buttons.

**The Tactile Restraint Rule.** Elements must never employ harsh, narrow drop-shadows. Shadows should feel ambient and diffuse, casting a soft, colored glow where appropriate.

## 5. Components

Tactile and Refined (Gentle curves, subtle contrast).

### Buttons
- **Shape:** Full pill shape (100px radius) for major CTAs; soft curves (12px radius) for form and cake builder options.
- **Primary:** Terracotta background (`oklch(60% 0.18 30)`), pure white text.
- **Hover / Focus:** Translucent background, terracotta text, elevated with a tinted glow.

### Cards / Containers
- **Corner Style:** Soft curves (16px to 20px radius).
- **Background:** Pure white on the tinted off-white base.
- **Shadow Strategy:** Ambient soft shadows (`0 4px 24px oklch(0% 0 0 / .04)`).

### Badges / Tags
- **Style:** Small, tracked uppercase text, glassmorphic background (`oklch(60% 0.18 30 / .08)`), subtle 1px border.

## 6. Do's and Don'ts

### Do:
- **Do** cap body text line length at 65ch.
- **Do** tint neutral backgrounds slightly toward the primary brand hue to retain warmth.
- **Do** use `Forum` strictly for display typography without faux bolding.

### Don't:
- **Don't** use standard emojis as design elements; use proper SVGs or rely on elegant typography.
- **Don't** use generic AI scaffolding like marquee animations, numbered eyebrows, or custom cursors.
- **Don't** mix CSS transitions that cause layout thrashing (e.g., width); use `transform` instead.
- **Don't** use the SaaS "hero-metric" template with large gradient stats grids.
