"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Smooth scroll — slow, elegant, cinematic per the brief. Deliberately NOT
 * initialized if the visitor has prefers-reduced-motion enabled: smooth
 * scrolling can cause real discomfort for people with vestibular disorders,
 * and "editorial" is never a justification for weakening accessibility
 * (Creative Bible, Ch. 18 — a hard, non-negotiable rule, not a nice-to-have).
 * Native scroll is the fallback, not a degraded experience.
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1, // slow and calm, not snappy — matches the motion brief
      easing: (t: number) => 1 - Math.pow(1 - t, 3), // gentle ease-out, no overshoot
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
