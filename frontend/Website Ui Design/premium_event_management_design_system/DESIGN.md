---
name: Premium Event Management Design System
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#5a4045'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#8e6f75'
  outline-variant: '#e2bdc3'
  surface-tint: '#bb0054'
  primary: '#b70052'
  on-primary: '#ffffff'
  primary-container: '#dd2269'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb1c1'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#5d5c5b'
  on-tertiary: '#ffffff'
  tertiary-container: '#757474'
  on-tertiary-container: '#f7feff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9df'
  primary-fixed-dim: '#ffb1c1'
  on-primary-fixed: '#3f0018'
  on-primary-fixed-variant: '#8f003f'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-h1:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-h1-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-h2:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-h3:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  button:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 1px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 24px
  section-padding: 80px
---

## Brand & Style

This design system is built for high-end event and expo management, prioritizing an editorial and sophisticated aesthetic. The brand personality is "Prestige Operationalized"—combining the logistical rigor of large-scale event planning with the visual elegance of luxury hospitality.

The design style leans heavily into **High-Contrast Minimalism** with a **Fashion-Forward Editorial** twist. It utilizes sharp edges, expansive whitespace, and a high-contrast serif typeface to create a sense of authority and exclusivity. Decorative elements, such as interlocking gold rings, are used sparingly to suggest connection and premium service without cluttering the functional UI.

## Colors

The palette is anchored by a vibrant Primary Pink for action and focus, balanced by a classic Gold Accent for status and decoration. 

- **Primary Pink (#FF4081):** Used for primary CTAs, active navigation states, and critical interaction points.
- **Gold Accent (#D4AF37):** Reserved for "Premium" or "VIP" indicators, decorative dividers, and subtle interlocking ring motifs.
- **Grayscale:** The system uses a strict hierarchy of light neutrals to maintain a clean, airy feel. White is the base for cards and primary content, while the Cream/Off-White is used for background grouping and sidebars to provide a soft distinction.

## Typography

The typography strategy relies on the tension between the classic elegance of **Playfair Display** and the modern clarity of **Plus Jakarta Sans** (substituted for Poppins for a slightly more refined, premium feel).

- **Headlines:** Use Playfair Display. Large displays should feel like magazine headers. H1 and H2 levels use the Regular (400) weight to emphasize the delicate serifs.
- **Body & UI:** Plus Jakarta Sans provides a contemporary, geometric feel that balances the traditional serif headings. 
- **Buttons:** Always uppercase with tracked-out letter spacing (1px) to evoke a professional, architectural tone.

## Layout & Spacing

This design system employs a **Fixed Grid** philosophy for desktop to ensure content remains centered and prestigious, while transitioning to a **Fluid Grid** for mobile.

- **Rhythm:** An 8px base unit governs all padding and margins.
- **Whitespace:** Use generous padding (Level 10+ or 80px+) between major sections to prevent the UI from feeling "crowded" or "utilitarian."
- **Columns:** A standard 12-column grid is used for desktop. 
- **Dividers:** Use thin, 1px vertical lines in `Border Light` or `Gold` to separate high-level categories or menu items, reinforcing the structured, sharp-edged aesthetic.

## Elevation & Depth

To maintain a sophisticated, flat-modern appearance, the system avoids heavy drop shadows and instead uses **Tonal Layering** and **Subtle Ambient Shadows**.

- **Shadows:** Only one shadow level is permitted. It is a soft, highly diffused ambient shadow: `0 2px 12px rgba(0, 0, 0, 0.06)`. This is used exclusively for floating elements like modals, dropdowns, and hover states on cards.
- **Flat Depth:** Depth is primarily communicated through color shifts (e.g., a card with a `#FFFFFF` background sitting on a `#FAFAFA` section).
- **Outlines:** Low-contrast borders (`#EEEEEE`) define container boundaries without adding visual weight.

## Shapes

The shape language is strictly **Sharp (0px radius)**. This decision is central to the "Premium" narrative, evoking architectural blueprints and high-end editorial layouts. All buttons, input fields, cards, and image containers must adhere to 90-degree corners.

- **Exceptions:** Icons and the "interlocking ring" decorative motifs may use circular forms, as they act as a counterpoint to the rigid structure of the UI containers.

## Components

### Buttons
- **Primary:** Solid `#FF4081` background, `#FFFFFF` text. No border. Sharp corners.
- **Secondary:** Transparent background, 1px border of `#FF4081`, `#FF4081` text. 
- **Ghost:** Transparent background, 1px border of `#1A1A1A`, `#1A1A1A` text. 
- **Hover States:** Transition to `#E91E63` for primary; slightly darken borders for others.

### Form Fields
- **Inputs:** 1px border in `#EEEEEE`. On focus, the border changes to `#FF4081`. 
- **Labels:** Use `label-caps` typography style, positioned above the input field.
- **Checkboxes/Radio Buttons:** Square (0px radius), using Primary Pink for the active/checked state.

### Cards & Containers
- **Standard Card:** `#FFFFFF` background, sharp corners, 1px `#EEEEEE` border. Use the subtle ambient shadow only on hover.
- **Premium Card:** Includes a 2px top-border in Gold (`#D4AF37`).

### Badges & Chips
- **Status Badges:** Use light background tints of the status color (e.g., Light Green for success) with dark text (`#1A1A1A`). Keep corners sharp.
- **VIP Badges:** Gold background (`#D4AF37`) with White text, using the `label-caps` font style.

### Navigation
- **Sidebar:** Cream background (`#FAFAFA`) with vertical separators. Active items are indicated by a 4px vertical bar of Primary Pink on the far left or right edge.