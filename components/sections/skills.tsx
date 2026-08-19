import { skillGroups } from "@/content/skills";

export function Skills() {
  return (
    <section
      aria-label="Skills"
      className="mx-auto max-w-container px-space-3 py-space-6 md:px-space-6"
    >
      <dl className="space-y-space-3">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <dt className="text-label-eyebrow uppercase tracking-wide text-text-secondary">
              {group.category}
            </dt>
            <dd className="text-body text-text-primary">{group.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
