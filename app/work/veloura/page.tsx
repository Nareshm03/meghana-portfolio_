import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case-study/case-study-page";
import { veloura } from "@/content/case-studies/veloura";

export const metadata: Metadata = {
  title: "Veloura — Meghana",
  description: veloura.body[0],
};

export default function Page() {
  return <CaseStudyPage study={veloura} />;
}
