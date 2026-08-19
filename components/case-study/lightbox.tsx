"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

/**
 * Simple enlarged view with a close affordance — Design System Section 9
 * ("Fullscreen / Zoom / Lightbox"): "no elaborate gallery UI."
 *
 * Rendered in-place rather than via a React portal — fine as long as no
 * ancestor introduces a new stacking/containing context. If this component
 * is reused somewhere that does, switch to createPortal.
 */
const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.lightbox};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.overlay};
  padding: ${({ theme }) => theme.space[3]};
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.space[3]};
  right: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.colors.background};
  background: none;
  border: none;
  cursor: pointer;
  transition: color ${({ theme }) => theme.motion.fast} ${({ theme }) => theme.motion.ease};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const ImageWrapper = styled.div`
  max-height: 85vh;
  max-width: 90vw;
`;

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageAlt: string;
  children: React.ReactNode;
}

export function Lightbox({ isOpen, onClose, imageAlt, children }: LightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) closeButtonRef.current?.focus();
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          role="dialog"
          aria-modal="true"
          aria-label={imageAlt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          onClick={onClose}
        >
          <CloseButton ref={closeButtonRef} onClick={onClose} aria-label="Close enlarged image">
            <X size={28} aria-hidden="true" />
          </CloseButton>
          <ImageWrapper onClick={(e) => e.stopPropagation()}>{children}</ImageWrapper>
        </Overlay>
      )}
    </AnimatePresence>
  );
}
