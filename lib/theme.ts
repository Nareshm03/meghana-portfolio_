/**
 * DESIGN TOKEN SYSTEM — styled-components theme
 *
 * This is the single source of truth for every visual value on the site.
 * Every value here traces to the locked design documents (Visual Direction
 * Bible, Design System, Creative Bible) — nothing here is arbitrary, and
 * nothing should be hardcoded in a component that could instead reference
 * a token from here.
 */

export const theme = {
  colors: {
    background: "#F7F4EF", // warm cream, never stark white
    surface: "#F0EBE2", // slightly deeper cream — depth via tone, not shadow
    textPrimary: "#241F1A", // warm near-black charcoal, never pure black
    textSecondary: "#6E6459", // one desaturated gray-brown, used everywhere
    border: "rgba(36, 31, 26, 0.1)", // hairline: text-primary at ~10% opacity
    // PLACEHOLDER — must be replaced with a color sampled directly from the
    // real Kundaroma or Veloura assets before this ships. Chosen specifically
    // to avoid the "warm cream + invented terracotta" AI-design default.
    accent: "#8A4B4F",
    accentHover: "#7A4145",
    overlay: "rgba(36, 31, 26, 0.75)", // lightbox background — translucent warm charcoal
  },

  fonts: {
    display: "var(--font-fraunces), Georgia, serif",
    body: "var(--font-inter), system-ui, -apple-system, sans-serif",
    mono: "var(--font-jetbrains-mono), ui-monospace, monospace",
  },

  // Two weights only, per family — Design System Rule 2. A third weight is
  // never introduced.
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600, // reserved for heading-section only
  },

  // Named to match the already-locked semantic type scale exactly.
  // Responsive sizing (desktop vs. mobile) is handled per-component via
  // the breakpoints below, not baked into the token itself — a single
  // "display-hero" token would otherwise have to awkwardly encode two
  // different pixel values.
  type: {
    displayHero: { desktop: "4rem", mobile: "2.25rem", lineHeight: 1.1, tracking: "-0.015em" },
    displayCaseTitle: { desktop: "2.25rem", mobile: "1.75rem", lineHeight: 1.15, tracking: "-0.01em" },
    headingSection: { size: "1.375rem", lineHeight: 1.3, tracking: "0" },
    body: { size: "1.125rem", lineHeight: 1.55, tracking: "0" },
    labelEyebrow: { size: "0.8125rem", lineHeight: 1.4, tracking: "0.05em" },
    caption: { size: "0.8125rem", lineHeight: 1.4, tracking: "0" },
  },

  // 8px base, named semantically (never referenced by raw pixel value in a
  // component) — Design System Section 1.
  space: {
    1: "8px",
    2: "16px",
    3: "24px",
    4: "32px",
    5: "48px",
    6: "64px",
    7: "96px",
    8: "128px",
  },

  radius: {
    sm: "4px", // tags, small elements
    md: "8px", // cards, buttons, image frame
  },

  container: {
    main: "1200px",
    text: "650px", // reading-width cap for prose blocks
  },

  motion: {
    fast: "150ms",
    base: "250ms",
    slow: "500ms",
    max: "600ms", // the one sanctioned exception — Hero/case-study proof reveal
    ease: "cubic-bezier(0.16, 1, 0.3, 1)", // the one easing curve, used everywhere
  },

  breakpoints: {
    tablet: "768px",
    desktop: "1024px",
  },

  zIndex: {
    nav: 10,
    lightbox: 50,
  },
} as const;

export type AppTheme = typeof theme;
