export interface TechnicalProject {
  title: string;
  meta: string;
  description: string;
  linkLabel: string;
  linkHref: string;
}

export const technicalProjects: TechnicalProject[] = [
  {
    title: "CampusHub",
    meta: "Team Project — Frontend Contributor",
    description:
      "Built the complete Teacher and Parent dashboard frontends for a full-stack campus management platform, working within a 3-person team. Presented at Project Expo 2026, MVJ College of Engineering.",
    linkLabel: "Live Demo",
    linkHref: "https://campus-hub-3.vercel.app/",
  },
  {
    title: "AI Circuit Analyzer",
    meta: "Independent — Technical / AI Project",
    description:
      "A computer-vision tool, built solo in Python, Flask, and OpenCV, that turns a photograph of a digital circuit into its Boolean expression, truth table, and timing diagram — and automatically identifies the circuit type.",
    linkLabel: "GitHub",
    linkHref: "https://github.com/meghanasp-11/Circuit-Analyzer",
  },
];
