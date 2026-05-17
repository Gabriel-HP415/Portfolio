---
name: Kinetic Precision
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#bec8ce'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#899298'
  outline-variant: '#3f484e'
  surface-tint: '#7bd1fa'
  primary: '#c5eaff'
  on-primary: '#003547'
  primary-container: '#7dd3fc'
  on-primary-container: '#005b78'
  inverse-primary: '#006686'
  secondary: '#cebdff'
  on-secondary: '#381385'
  secondary-container: '#4f319c'
  on-secondary-container: '#bea8ff'
  tertiary: '#dfe4fa'
  on-tertiary: '#2a3040'
  tertiary-container: '#c3c8dd'
  on-tertiary-container: '#4e5465'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c0e8ff'
  primary-fixed-dim: '#7bd1fa'
  on-primary-fixed: '#001e2b'
  on-primary-fixed-variant: '#004d66'
  secondary-fixed: '#e8ddff'
  secondary-fixed-dim: '#cebdff'
  on-secondary-fixed: '#21005e'
  on-secondary-fixed-variant: '#4f319c'
  tertiary-fixed: '#dde2f8'
  tertiary-fixed-dim: '#c1c6db'
  on-tertiary-fixed: '#151b2b'
  on-tertiary-fixed-variant: '#414658'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

This design system is built for the elite software engineer—someone whose work sits at the intersection of complex logic and refined aesthetics. The brand personality is **technical, authoritative, and cinematic**. It avoids the loud, neon tropes of "gamer" developer aesthetics in favor of a mature, "Deep Tech" atmosphere inspired by industry leaders like Vercel and Linear.

The style is a blend of **Minimalism** and **Glassmorphism**. It utilizes expansive whitespace to signal confidence and high-quality "cinematic" lighting effects—subtle gradients and background blurs—to create a sense of three-dimensional space within a digital environment. Every interaction should feel intentional, precise, and frictionless.

## Colors

The palette is anchored in a **Deep Midnight** (#050816) background to provide a canvas for technical clarity. 

- **Primary (Sky Blue):** Used for primary actions, technical highlights, and active states. It represents the "logic" layer.
- **Secondary (Soft Violet):** Used sparingly for accentuation, hover states, and sophisticated flourishes. It represents the "creative" layer.
- **Surface Strategy:** Secondary surfaces use #0B1120. Overlays and glass elements use a semi-transparent version of this surface color combined with background blurs.
- **Contrast Hierarchy:** Text Primary (#E2E8F0) ensures high legibility for core content, while Text Secondary (#94A3B8) handles metadata, labels, and descriptions to maintain a clear information hierarchy.

## Typography

The typography system establishes a "Modern Technical" voice through three distinct typefaces:

1.  **Space Grotesk (Headlines):** Its geometric quirks and technical character provide a distinctive editorial feel. Use tight letter-spacing for larger display sizes to maintain a "high-end" look.
2.  **Inter (Body):** Chosen for its unparalleled readability in UI contexts. It acts as the neutral workhorse for descriptions and long-form writing.
3.  **JetBrains Mono (Metadata/Code):** Used for code blocks, labels, and small technical tags. This reinforces the engineer's identity and provides a clear visual distinction for "data-driven" information.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid** model. Content is contained within a 1200px max-width container for readability, centered on the screen.

- **The Grid:** A 12-column grid is used for desktop, collapsing to 4 columns on mobile. 
- **Rhythm:** An 8px linear scale drives all padding and margins. 
- **Whitespace:** Emphasize "Vertical Breathability." Use the `xl` (80px) spacing unit between major sections (e.g., between "Experience" and "Projects") to create a premium, unhurried pace.
- **Mobile Adjustments:** Margins reduce from 48px on desktop to 20px on mobile. Headlines scale down significantly to prevent awkward word-breaking.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layering** and **Glassmorphism** rather than traditional heavy shadows.

- **Level 0 (Background):** Deep Midnight (#050816). This is the base of the application.
- **Level 1 (Surface):** Slightly lighter navy (#0B1120). Used for cards, navigation bars, and grouped content.
- **Level 2 (Glass):** Semi-transparent overlays (10-20% opacity) with a 20px backdrop blur. This is used for sticky headers and modal overlays to maintain context of the content beneath.
- **Borders:** All surfaces must have a 1px solid border with low opacity (`rgba(226, 232, 240, 0.1)`). This "ghost border" technique provides definition without adding visual weight.
- **Lighting:** Use subtle, top-down radial gradients (Primary/Secondary accents at 5-10% opacity) to simulate "cinematic" light hitting the corners of the screen.

## Shapes

The design uses a **Rounded** aesthetic to soften the technical edges. 

- **Standard Radius:** 0.5rem (8px) for small components like inputs and chips.
- **Large Radius (Lg):** 1rem (16px) for cards, sections, and main containers. This creates a modern, "app-like" feel found in contemporary software tools.
- **Interactive Elements:** Buttons should strictly follow the `rounded-lg` (16px) or fully pill-shaped convention to contrast against the more structural card layouts.

## Components

- **Buttons:** Primary buttons use a solid Sky Blue (#7DD3FC) background with dark text. Secondary buttons use the "Ghost" style: 1px subtle border, transparent background, and primary text color. All buttons have a subtle inner-glow on hover.
- **Cards:** Cards use the Surface color (#0B1120) with 1px subtle borders and 16px corner radius. On hover, the border opacity increases slightly, and a faint secondary accent shadow appears.
- **Input Fields:** Darker than the surface background to appear "sunken." Use Inter for input text and JetBrains Mono for placeholder text to emphasize the technical nature.
- **Chips/Tags:** Small, pill-shaped elements using the Secondary color at 10% opacity for the background and 100% opacity for the label text.
- **Code Blocks:** Utilize JetBrains Mono. The container should have a subtle noise texture overlay to differentiate it from standard UI surfaces.
- **Navigation:** A sticky top-bar using the Glassmorphism effect (20px blur) to allow content to bleed through elegantly as the user scrolls.