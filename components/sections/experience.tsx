import { experienceEntries } from "@/content/experience";

export function Experience() {
  return (
    <section
      aria-label="Experience"
      className="mx-auto max-w-container px-space-3 py-space-6 md:px-space-6"
    >
      <h2 className="text-heading-section font-sans font-semibold text-text-primary">
        Experience
      </h2>

      <ul className="mt-space-4 grid gap-space-3 md:grid-cols-2 md:gap-x-space-4">
        {experienceEntries.map((entry) => (
          <li key={`${entry.role}-${entry.org}`}>
            <p className="text-body font-medium text-text-primary">
              {entry.role} — {entry.org}
            </p>
            <p className="text-caption text-text-secondary">
              {entry.ongoing && (
                <span className="text-label-eyebrow uppercase tracking-wide">Ongoing · </span>
              )}
              {entry.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
