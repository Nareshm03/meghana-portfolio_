export interface ExperienceEntry {
  role: string;
  org: string;
  ongoing: boolean;
  description: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    role: "Content Writer",
    org: "Inscribe",
    ongoing: true,
    description:
      "Write and plan content for the club's social media and storytelling pieces, handling copywriting and content strategy for ongoing posts.",
  },
  {
    role: "Designer",
    org: "Nova Innovative Compskey (NIC)",
    ongoing: true,
    description:
      "Design event posters and graphics for the club using Canva and Figma, contributing to its visual identity and creative direction.",
  },
  {
    role: "Design Team Member",
    org: "SDC",
    ongoing: true,
    description: "Design event posters and social media graphics for SDC's coding workshops, hackathons, and tech events.",
  },
  {
    role: "Design Team Member",
    org: "Rag Abhinaya",
    ongoing: true,
    description:
      "Design promotional posters and social media assets for the club's theatre productions and stage performances.",
  },
  {
    role: "Design Contributor",
    org: "Swayam",
    ongoing: false,
    description: "Created event and social media design assets for MVJCE's annual cultural fest.",
  },
];
