import { featuredCaseStudies, condensedWork } from "@/content/featured-work";
import { CaseStudyCard } from "@/components/case-study/case-study-card";

export function FeaturedWork() {
  const [primary, secondary] = featuredCaseStudies;

  return (
    <section
      aria-label="Featured work"
      className="mx-auto max-w-container px-space-3 py-space-6 md:px-space-6"
    >
      <h2 className="text-heading-section font-sans font-semibold text-text-primary">
        Featured Work
      </h2>

      <div className="mt-space-4 flex flex-col gap-space-6">
        {primary && <CaseStudyCard study={primary} />}
        {secondary && <CaseStudyCard study={secondary} />}
      </div>

      {/* Untamed Streetwear — condensed text row, no card, no image.
          Design System Section 5: deliberately lighter-weight than the two
          real case-study cards above. */}
      <div className="mt-space-4 border-t border-border pt-space-3">
        <span className="text-label-eyebrow uppercase tracking-wide text-text-secondary">
          {condensedWork.tag}
        </span>
        <h3 className="mt-space-1 text-body font-medium text-text-primary">
          {condensedWork.title}
        </h3>
        <p className="mt-space-1 max-w-text text-caption text-text-secondary">
          {condensedWork.description}
        </p>
      </div>
    </section>
  );
}
