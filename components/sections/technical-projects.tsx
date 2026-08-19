import { ExternalLink } from "lucide-react";
import { technicalProjects } from "@/content/technical-projects";

export function TechnicalProjects() {
  return (
    <section
      aria-label="Also built"
      className="mx-auto max-w-container px-space-3 py-space-6 md:px-space-6"
    >
      <h2 className="text-heading-section font-sans font-semibold text-text-primary">
        Also Built
      </h2>

      <div className="mt-space-4 grid gap-space-4 md:grid-cols-2">
        {technicalProjects.map((project) => (
          <div key={project.title} className="rounded-md bg-surface p-space-3">
            <span className="text-label-eyebrow uppercase tracking-wide text-text-secondary">
              {project.meta}
            </span>
            <h3 className="mt-space-1 font-sans text-lg font-medium text-text-primary">
              {project.title}
            </h3>
            <p className="mt-space-2 text-body text-text-secondary">{project.description}</p>
            <a
              href={project.linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-space-2 inline-flex items-center gap-1.5 text-caption font-medium text-accent transition-colors duration-fast hover:text-accent-hover"
            >
              {project.linkLabel}
              <ExternalLink size={12} aria-hidden="true" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
