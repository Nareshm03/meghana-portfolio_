"use client";

import styled, { css } from "styled-components";
import { media } from "@/lib/media";

type TextVariant =
  | "display-hero"
  | "display-case-title"
  | "heading-section"
  | "body"
  | "label-eyebrow"
  | "caption";

type TextColor = "primary" | "secondary" | "accent" | "background";

/**
 * One component covers every text style on the site — variants map
 * directly to the locked type-scale tokens in lib/theme.ts. A component
 * should never hardcode a font-size; it should reach for a Text variant
 * instead. Semantic HTML tag is controlled independently via the `as`
 * prop (styled-components supports this natively) — variant is a purely
 * visual concern, tag is a purely semantic one, and the two are
 * deliberately decoupled (an h1 doesn't have to look like displayHero;
 * displayHero doesn't have to render as an h1).
 */
const variantStyles: Record<TextVariant, ReturnType<typeof css>> = {
  "display-hero": css`
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.type.displayHero.mobile};
    line-height: ${({ theme }) => theme.type.displayHero.lineHeight};
    letter-spacing: ${({ theme }) => theme.type.displayHero.tracking};
    @media ${media.tablet} {
      font-size: ${({ theme }) => theme.type.displayHero.desktop};
    }
  `,
  "display-case-title": css`
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.type.displayCaseTitle.mobile};
    line-height: ${({ theme }) => theme.type.displayCaseTitle.lineHeight};
    letter-spacing: ${({ theme }) => theme.type.displayCaseTitle.tracking};
    @media ${media.tablet} {
      font-size: ${({ theme }) => theme.type.displayCaseTitle.desktop};
    }
  `,
  "heading-section": css`
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    font-size: ${({ theme }) => theme.type.headingSection.size};
    line-height: ${({ theme }) => theme.type.headingSection.lineHeight};
  `,
  body: css`
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.type.body.size};
    line-height: ${({ theme }) => theme.type.body.lineHeight};
  `,
  "label-eyebrow": css`
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.type.labelEyebrow.size};
    line-height: ${({ theme }) => theme.type.labelEyebrow.lineHeight};
    letter-spacing: ${({ theme }) => theme.type.labelEyebrow.tracking};
    text-transform: uppercase;
  `,
  caption: css`
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.type.caption.size};
    line-height: ${({ theme }) => theme.type.caption.lineHeight};
  `,
};

const colorMap: Record<TextColor, keyof typeof import("@/lib/theme").theme.colors> = {
  primary: "textPrimary",
  secondary: "textSecondary",
  accent: "accent",
  background: "background",
};

export const Text = styled.p<{ $variant: TextVariant; $color?: TextColor }>`
  margin: 0;
  color: ${({ theme, $color }) => theme.colors[colorMap[$color ?? "primary"]]};
  ${({ $variant }) => variantStyles[$variant]}
`;
