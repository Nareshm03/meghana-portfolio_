"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth; /* Lenis overrides this in practice, but this
      stays as a no-JS/no-Lenis fallback. */
  }

  body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.fonts.body};
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
  }

  /* One focus treatment, sitewide — Design System Section 11. Never suppressed. */
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.accent};
    opacity: 0.2;
  }

  /* Reduced motion — CSS-level backstop. Framer Motion components handle
     this themselves via useReducedMotion(); this covers anything else. */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
