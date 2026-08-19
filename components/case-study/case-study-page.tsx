"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Circle } from "lucide-react";
import styled from "styled-components";
import type { CaseStudyDetail } from "@/content/case-studies/kundaroma";

const Article = styled.article`
  min-height: 100vh;
  padding: 34px 5vw 120px;
  background: ${({ theme }) => theme.colors.background};
`;

const Header = styled.header`
  max-width: 1240px;
  margin: auto;
`;

const Back = styled(Link)`
  display: inline-flex;
  gap: 9px;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font: 500 .68rem ${({ theme }) => theme.fonts.mono};
  letter-spacing: .08em;
  text-decoration: none;
  text-transform: uppercase;
`;

const Title = styled.h1`
  max-width: 1000px;
  margin: 130px 0 28px;
  font: 400 clamp(5rem, 15vw, 15rem)/.78 ${({ theme }) => theme.fonts.display};
  letter-spacing: -.1em;
`;

const Fact = styled.p`
  margin: 0;
  font: 500 .7rem ${({ theme }) => theme.fonts.mono};
  letter-spacing: .1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Spread = styled.div`
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  gap: 10vw;
  max-width: 1100px;
  margin: 150px auto 0;
  @media (max-width: 700px) { display: block; margin-top: 90px; }
`;

const Index = styled.div`
  font: 500 .68rem ${({ theme }) => theme.fonts.mono};
  letter-spacing: .1em;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Copy = styled.div`
  p { max-width: 610px; margin: 0 0 30px; font: 400 clamp(1.25rem, 2.2vw, 2rem)/1.35 ${({ theme }) => theme.fonts.display}; }
`;

const Visual = styled.div<{ $concept: boolean }>`
  min-height: 440px;
  margin-top: 100px;
  padding: 28px;
  display: flex;
  align-items: end;
  background: ${({ $concept }) => $concept ? "#e1c0ba" : "#bb7770"};
  color: ${({ $concept }) => $concept ? "#58343a" : "#f7f4ef"};
  ${({ $concept }) => $concept && "border-radius: 50% 50% 0 0;"}
  transform: rotate(-2deg);
  @media (max-width: 700px) { min-height: 300px; margin-top: 70px; }
`;

const VisualImage = styled(Image)`
  width: min(100%, 760px);
  height: auto;
  max-height: 760px;
  object-fit: contain;
  object-position: left bottom;
`;

const Outcome = styled.section`
  max-width: 900px;
  margin: 170px auto 0;
  padding-top: 28px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  h2 { max-width: 760px; margin: 55px 0 0; font: 400 clamp(3rem, 7vw, 7rem)/.86 ${({ theme }) => theme.fonts.display}; letter-spacing: -.08em; }
`;

const Next = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: 150px auto 0;
  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: inherit;
  font: 400 clamp(2rem, 4vw, 4.5rem)/1 ${({ theme }) => theme.fonts.display};
  letter-spacing: -.06em;
  text-decoration: none;
`;

export function CaseStudyPage({ study }: { study: CaseStudyDetail }) {
  return (
    <Article>
      <Header>
        <Back href="/#work"><ArrowLeft size={15} aria-hidden="true" /> Back to work</Back>
        <Title>{study.title}</Title>
        <Fact>{study.factStrip}</Fact>
      </Header>
      <Spread>
        <Index>01 / The story</Index>
        <Copy>{study.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</Copy>
      </Spread>
      <Visual $concept={!study.isVerifiedEvidence} role="img" aria-label={`${study.title} visual`}>
        {study.isVerifiedEvidence ? (
          <VisualImage
            src="/kundaroma/kadal-editorial.jpeg"
            alt="Kundaroma Kadal fragrance creative with navy perfume bottle and gold vertical typography"
            width={600}
            height={900}
          />
        ) : null}
        <Index>{study.isVerifiedEvidence ? "Verified proof / Kundaroma Instagram creative" : "Concept visual / not launched"}</Index>
      </Visual>
      <Outcome>
        <Index><Circle size={10} fill="currentColor" aria-hidden="true" /> Outcome</Index>
        <h2>{study.outcome}</h2>
      </Outcome>
      <Next href={`/work/${study.nextSlug}`}>Next: {study.nextTitle}<ArrowRight size={28} /></Next>
    </Article>
  );
}