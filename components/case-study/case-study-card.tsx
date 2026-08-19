import Link from "next/link";
import type { CaseStudySummary } from "@/content/featured-work";

/**
 * Design System Section 5 — Case Study Card. Sizing/weight difference is
 * driven by the `weight` prop, per the locked "unequal weight" merge:
 * Kundaroma (primary) reads larger than Veloura (secondary) — a calibrated
 * difference signaling "this one has external proof," not "this one
 * matters less."
 */
export function CaseStudyCard({ study }: { study: CaseStudySummary }) {
  const isPrimary = study.weight === "primary";

  return (
    <Link
      href={`/work/${study.slug}`}
      className="block rounded-md bg-surface p-space-3 transition-colors duration-fast hover:bg-surface/80"
    >
      <span className="text-label-eyebrow uppercase tracking-wide text-text-secondary">
        {study.tag}
      </span>
      <h3
        className={
          isPrimary
            ? "mt-space-1 font-display text-display-case-title font-medium text-text-primary"
            : "mt-space-1 font-display text-[1.75rem] font-medium leading-[1.15] text-text-primary"
        }
      >
        {study.title}
      </h3>
      <p className="mt-space-2 max-w-text text-body text-text-secondary">{study.teaser}</p>
    </Link>
  );
}
