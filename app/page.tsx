import { Hero } from "@/components/sections/hero";

// Only Hero has been migrated to styled-components so far. Featured Work,
// Also Built, Writing, Experience, Skills, and Contact still exist as
// Tailwind-classed components from the previous stack and are intentionally
// NOT rendered here — their className props are inert now that Tailwind is
// gone, so including them would silently ship unstyled content rather than
// a real error. They need the same migration Hero just got, one at a time,
// per the explicit "implement section by section, wait for approval"
// instruction — not a shortcut, a deliberate pause point.
export default function Home() {
  return (
    <main id="work">
      <Hero />
    </main>
  );
}
