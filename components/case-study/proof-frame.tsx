"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import styled from "styled-components";
import { Lightbox } from "@/components/case-study/lightbox";

/**
 * The accent-bordered "authenticated evidence" frame — Visual Bible Section 8,
 * Design System Section 9. Reserved for verified, real proof (e.g. Kundaroma).
 * Never applied to speculative/concept visuals (e.g. Veloura).
 *
 * Aspect ratio is intentionally NOT hardcoded — portrait, square, or
 * landscape, determined by the real asset. Do not force this into a square
 * container.
 *
 * `compact` sizes it down for use inside the Hero's headline-intrusion
 * placement, where a full-size frame would overpower the composition.
 */
const FrameButton = styled(motion.button)<{ $compact?: boolean }>`
  display: inline-block;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.space[1]};
  background: none;
  cursor: pointer;
  text-align: left;
  max-width: ${({ $compact }) => ($compact ? "160px" : "320px")};
`;

const Placeholder = styled.div<{ $compact?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  aspect-ratio: 4 / 5;
  width: ${({ $compact }) => ($compact ? "140px" : "280px")};
  border-radius: ${({ theme }) => theme.radius.sm};
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ $compact }) => ($compact ? "11px" : "13px")};
  padding: ${({ theme }) => theme.space[2]};
`;

const StyledImage = styled(Image)`
  height: auto;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.sm};
  display: block;
`;

const EnlargedFrame = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.space[1]};
  background-color: ${({ theme }) => theme.colors.background};
`;

interface ProofFrameProps {
  imageSrc?: string;
  imageAlt: string;
  compact?: boolean;
}

export function ProofFrame({ imageSrc, imageAlt, compact }: ProofFrameProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const frameContent = imageSrc ? (
    <StyledImage
      src={imageSrc}
      alt={imageAlt}
      width={0}
      height={0}
      sizes="(max-width: 768px) 90vw, 33vw"
    />
  ) : (
    // TODO: replace with the real Kundaroma Instagram-post asset once it has
    // been sourced and its crop decided per the locked rule (preserve the
    // full creative first, trim only unnecessary Instagram chrome, let the
    // resulting ratio be whatever it is).
    <Placeholder role="img" aria-label={imageAlt} $compact={compact}>
      TODO — real Kundaroma
      <br />
      proof image not yet sourced
    </Placeholder>
  );

  return (
    <>
      <FrameButton
        type="button"
        onClick={() => setIsLightboxOpen(true)}
        aria-label={`View enlarged: ${imageAlt}`}
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
        transition={{
          default: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }, // entrance reveal
          scale: { duration: 0.15, ease: [0.16, 1, 0.3, 1] }, // hover only
        }}
        $compact={compact}
      >
        {frameContent}
      </FrameButton>

      <Lightbox isOpen={isLightboxOpen} onClose={() => setIsLightboxOpen(false)} imageAlt={imageAlt}>
        <EnlargedFrame>{frameContent}</EnlargedFrame>
      </Lightbox>
    </>
  );
}
