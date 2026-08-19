export interface CaseStudySummary {
  slug: string;
  title: string;
  tag: "Real Client" | "Concept";
  teaser: string;
  weight: "primary" | "secondary"; // drives the unequal-weight card sizing
}

export interface CondensedEntry {
  title: string;
  tag: "Concept";
  description: string;
}

// LOCKED per the "unequal weight" merge: Kundaroma is real and leads;
// Veloura is strong but speculative and sits visibly smaller; Untamed
// Streetwear is condensed to a text row, no image, no card treatment.
export const featuredCaseStudies: CaseStudySummary[] = [
  {
    slug: "kundaroma",
    title: "Kundaroma",
    tag: "Real Client",
    teaser:
      "An unsolicited design, sent cold to a real perfume brand. They posted it on their own Instagram.",
    weight: "primary",
  },
  {
    slug: "veloura",
    title: "Veloura",
    tag: "Concept",
    teaser:
      "A self-initiated luxury haircare brand, built end to end — including a billboard campaign that puts the product's claim on public display for five days.",
    weight: "secondary",
  },
];

export const condensedWork: CondensedEntry = {
  title: "Untamed Streetwear",
  tag: "Concept",
  description:
    "A content-calendar strategy exercise — pillars, Reel and post concepts, and a structured posting schedule built around a streetwear brand's \"passion\" theme.",
};
