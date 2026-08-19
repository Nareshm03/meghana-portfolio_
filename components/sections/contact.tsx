import { Button } from "@/components/ui/button";
import { contactContent } from "@/content/contact";

export function Contact() {
  return (
    <section
      aria-label="Contact"
      className="mx-auto max-w-container px-space-3 py-space-7 md:px-space-6"
    >
      <h2 className="font-display text-display-case-title font-medium text-text-primary">
        {contactContent.heading}
      </h2>
      <p className="mt-space-2 max-w-text text-body text-text-secondary">
        {contactContent.line}
      </p>
      <div className="mt-space-4">
        <Button variant="primary" href={contactContent.ctaHref}>
          {contactContent.ctaLabel}
        </Button>
      </div>
    </section>
  );
}
