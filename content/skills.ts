export interface SkillGroup {
  category: string;
  items: string;
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Marketing & Strategy",
    items:
      "Brand Strategy, Brand Storytelling, Campaign Design, Content Strategy, Product Marketing, Advertising",
  },
  { category: "Writing", items: "Copywriting, Social Media Writing, Email Marketing" },
  { category: "Design Tools", items: "Canva, Figma, Filmora, DaVinci Resolve" },
  { category: "Technical", items: "Python, Flask, OpenCV, React, Next.js" },
  {
    category: "Core Strengths",
    items: "Communication, Client Pitching, Cross-Platform Campaign Planning",
  },
];
