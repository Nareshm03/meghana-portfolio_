const writingEntry = {
  title: "D2C Brand Marketing & Social Media Analysis",
  hook: "Studied how emerging D2C brands in food, beauty, and lifestyle approach social media.",
};

export function Writing() {
  return (
    <section
      aria-label="Writing"
      className="mx-auto max-w-container px-space-3 py-space-6 md:px-space-6"
    >
      <h2 className="text-heading-section font-sans font-semibold text-text-primary">Writing</h2>
      <div className="mt-space-3">
        <h3 className="text-body font-medium text-text-primary">{writingEntry.title}</h3>
        <p className="mt-space-1 max-w-text text-caption text-text-secondary">
          {writingEntry.hook}
        </p>
      </div>
    </section>
  );
}
