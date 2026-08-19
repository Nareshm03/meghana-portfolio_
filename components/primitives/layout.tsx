"use client";

import styled from "styled-components";
import { media } from "@/lib/media";

/**
 * Container caps content width and handles the responsive side margins.
 * Every section wraps its content in this — no section should define its
 * own ad hoc max-width or padding value.
 */
export const Container = styled.div`
  max-width: ${({ theme }) => theme.container.main};
  margin-inline: auto;
  padding-inline: ${({ theme }) => theme.space[3]};

  @media ${media.tablet} {
    padding-inline: ${({ theme }) => theme.space[6]};
  }
`;

/**
 * Stack is a plain flex-column with a gap sourced from the spacing scale —
 * used instead of ad hoc margin-bottom values scattered across components.
 * $gap takes a theme.space key (1–8), never a raw pixel value.
 */
export const Stack = styled.div<{ $gap: keyof typeof import("@/lib/theme").theme.space }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme, $gap }) => theme.space[$gap]};
`;

/**
 * Section wraps every top-level page section with the standard vertical
 * rhythm (Design System: section-to-section spacing). Sections needing a
 * different rhythm (e.g. a section-level dramatic pause) override $py
 * explicitly rather than every section inventing its own value.
 */
export const Section = styled.section<{
  $py?: keyof typeof import("@/lib/theme").theme.space;
}>`
  padding-block: ${({ theme, $py }) => theme.space[$py ?? 6]};
`;
