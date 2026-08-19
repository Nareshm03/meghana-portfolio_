import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { CaseStudyDetail } from "@/content/case-studies/kundaroma";
import { ProofFrame } from "@/components/case-study/proof-frame";

/**
 * The reusable Case Study Template — locked spec: "The Report, Annotated."
 * Back link → title → fact-strip → body (constraint/overview merged) →
 * proof image → outcome → (reflection, only if real — omitted for both
 * current case studies, per the truth policy) → next-project link.
 *
 * isVerifiedEvidence controls the image treatment: Kundaroma gets the
 * accent-framed ProofFrame; Veloura gets a plain, unframed placeholder —
 * the frame's presence is itself part of how this site signals real vs.
 * concept, so it must never appear on unverified visuals.
 */
export function CaseStudyPage({ study }: { study: CaseStudyDetail }) {
  return (
    <article className="mx-auto max-w-container px-space-3 py-space-7 md:px-space-6">
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-caption text-text-secondary transition-colors duration-fast hover:text-accent"
      >
        <ArrowLeft size={14} aria-hidden="true" />
        Back to work
      </Link>

      <h1 className="mt-space-4 font-display text-display-case-title font-medium text-text-primary md:text-[2.5rem]">
        {study.title}
      </h1>
      <p className="mt-space-1 text-label-eyebrow uppercase tracking-wide text-text-secondary">
        {study.factStrip}
      </p>

      <div className="mt-space-6 max-w-text space-y-space-3 text-body text-text-primary">
        {study.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-space-6">
        {study.isVerifiedEvidence ? (
          <ProofFrame
            imageAlt={`Proof image for the ${study.title} case study`}
          />
        ) : (
          // Plain, unframed placeholder — no accent border, since this is a
          // concept visual, not verified evidence. TODO: real Veloura
          // concept visuals (billboard mockup, brand identity) not yet sourced.
          <div
            role="img"
            aria-label={`Concept visual for the ${study.title} case study — not yet sourced`}
            className="flex aspect-[4/3] w-[320px] items-center justify-center rounded-md bg-surface text-center text-caption text-text-secondary"
          >
            TODO — {study.title} concept
            <br />
            visuals not yet sourced
          </div>
        )}
      </div>

      <p className="mt-space-6 max-w-text text-body font-medium text-text-primary">
        {study.outcome}
      </p>

      <Link
        href={`/work/${study.nextSlug}`}
        className="mt-space-7 inline-flex items-center gap-2 text-body font-medium text-accent transition-colors duration-fast hover:text-accent-hover"
      >
        Next: {study.nextTitle}
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </article>
  );
}
