import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case-study/case-study-page";
import { kundaroma } from "@/content/case-studies/kundaroma";

export const metadata: Metadata = {
  title: "Kundaroma — Meghana",
  description: kundaroma.body[1],
};

export default function Page() {
  return <CaseStudyPage study={kundaroma} />;
}
