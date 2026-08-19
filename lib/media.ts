import { theme } from "@/lib/theme";

/**
 * Plain query-string constants for ergonomic use inside styled-components
 * template literals: `@media ${media.tablet} { ... }`. Values are sourced
 * from theme.breakpoints — if the breakpoints ever change, update them
 * there; this file just formats them for CSS.
 */
export const media = {
  tablet: `(min-width: ${theme.breakpoints.tablet})`,
  desktop: `(min-width: ${theme.breakpoints.desktop})`,
};
