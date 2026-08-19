export interface CaseStudyDetail {
  slug: string;
  title: string;
  tag: "Real Client" | "Concept";
  factStrip: string;
  isVerifiedEvidence: boolean; // drives whether ProofFrame's accent border applies
  body: string[]; // paragraphs, in order — constraint/overview merged per the template
  outcome: string;
  nextSlug: string;
  nextTitle: string;
}

// Every sentence here traces directly to Meghana's resume. No research,
// challenge, or reflection content is included because none has been
// confirmed as real — per the locked truth policy, these are omitted
// rather than filled with plausible-sounding placeholder prose.
export const kundaroma: CaseStudyDetail = {
  slug: "kundaroma",
  title: "Kundaroma",
  tag: "Real Client",
  factStrip: "Real Client · Freelance Outreach · Bengaluru & Kundapura",
  isVerifiedEvidence: true,
  body: [
    "No brief. No prior relationship with the brand. No guarantee of a response.",
    "Meghana reached out to three local businesses — a gym (Golden Gym, Sarjapur), a perfume brand (Kundaroma), and a restaurant (The Naga Kitchen) — with unsolicited brand and social media design concepts.",
    "The design for Kundaroma was sent directly, without a formal pitch or brief.",
  ],
  outcome: "Kundaroma liked the design enough to post it directly on their official Instagram.",
  nextSlug: "veloura",
  nextTitle: "Veloura",
};
