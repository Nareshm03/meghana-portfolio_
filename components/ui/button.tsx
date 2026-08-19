"use client";

import type { AnchorHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { ArrowRight } from "lucide-react";

/**
 * Exactly two variants exist in this system — Design System Section 4.
 * A third variant is never introduced (Visual Bible Rule 61). "Ghost" and
 * "secondary" are the same style and are not differentiated further.
 */
type ButtonVariant = "primary" | "secondary";

const variantStyles: Record<ButtonVariant, ReturnType<typeof css>> = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.background};
    padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[3]};
    border-radius: ${({ theme }) => theme.radius.md};

    &:hover {
      background-color: ${({ theme }) => theme.colors.accentHover};
    }
  `,
  secondary: css`
    color: ${({ theme }) => theme.colors.accent};

    &:hover {
      color: ${({ theme }) => theme.colors.accentHover};
    }
  `,
};

const StyledLink = styled.a<{ $variant: ButtonVariant }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  transition: color ${({ theme }) => theme.motion.fast} ${({ theme }) => theme.motion.ease},
    background-color ${({ theme }) => theme.motion.fast} ${({ theme }) => theme.motion.ease};
  ${({ $variant }) => variantStyles[$variant]}
`;

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  showArrow?: boolean;
}

export function Button({ variant = "secondary", showArrow = false, children, ...props }: ButtonProps) {
  return (
    <StyledLink $variant={variant} {...props}>
      {children}
      {showArrow && <ArrowRight size={16} aria-hidden="true" />}
    </StyledLink>
  );
}
