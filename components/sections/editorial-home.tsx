"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { ArrowDownRight, ArrowUpRight, Mail, MoveDown } from "lucide-react";
import { contactContent } from "@/content/contact";
import { experienceEntries } from "@/content/experience";
import { featuredCaseStudies, condensedWork } from "@/content/featured-work";
import { skillGroups } from "@/content/skills";
import { technicalProjects } from "@/content/technical-projects";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const Page = styled.main`
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
`;

const Nav = styled.nav`
  position: absolute;
  inset: 0 0 auto;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1360px;
  margin: auto;
  padding: 28px 5vw;
  color: ${({ theme }) => theme.colors.textPrimary};
  font: 500 0.72rem/1 ${({ theme }) => theme.fonts.mono};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Mark = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.35rem;
  letter-spacing: -0.04em;
  text-transform: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 24px;
  @media (max-width: 600px) {
    display: none;
  }
  a {
    color: inherit;
    text-decoration: none;
    opacity: 0.7;
    transition: opacity 200ms ease;
    &:hover { opacity: 1; }
  }
`;

const Scene = styled.section<{ $tone?: "cream" | "ink" | "rose" | "blue" | "paper" }>`
  position: relative;
  padding: clamp(96px, 13vw, 190px) 5vw;
  ${({ $tone, theme }) => $tone === "ink" && css`background: ${theme.colors.textPrimary}; color: ${theme.colors.background};`}
  ${({ $tone, theme }) => $tone === "rose" && css`background: #d7a3a0; color: #2d1719;`}
  ${({ $tone, theme }) => $tone === "blue" && css`background: #1d3652; color: #f7f4ef;`}
  ${({ $tone, theme }) => $tone === "paper" && css`background: #e8e1d5;`}
`;

const Inner = styled.div`
  max-width: 1240px;
  margin: auto;
`;

const Eyebrow = styled.p`
  margin: 0 0 24px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font: 500 0.68rem/1.4 ${({ theme }) => theme.fonts.mono};
  letter-spacing: 0.11em;
  text-transform: uppercase;
`;

const Huge = styled.h2`
  max-width: 980px;
  margin: 0;
  font: 400 clamp(3.2rem, 9vw, 9.5rem)/0.87 ${({ theme }) => theme.fonts.display};
  letter-spacing: -0.075em;
`;

const Body = styled.p`
  max-width: 480px;
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: clamp(1rem, 1.4vw, 1.2rem);
  line-height: 1.55;
`;

const ArrowLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: inherit;
  font: 500 0.72rem/1 ${({ theme }) => theme.fonts.mono};
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;
  &:hover svg { transform: translate(3px, -3px); }
  svg { transition: transform 200ms ease; }
`;

const Hero = styled(Scene)`
  min-height: min(900px, 100vh);
  padding-top: clamp(160px, 22vh, 240px);
  display: flex;
  align-items: center;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
  gap: 8vw;
  align-items: end;
  @media (max-width: 700px) { display: block; }
`;

const HeroTitle = styled.h1`
  position: relative;
  z-index: 1;
  max-width: 950px;
  margin: 0;
  font: 400 clamp(4.1rem, 12.4vw, 12rem)/0.78 ${({ theme }) => theme.fonts.display};
  letter-spacing: -0.09em;
  span { display: block; }
  span:last-child { margin-left: clamp(20px, 10vw, 150px); }
`;

const Proof = styled.div`
  position: relative;
  min-height: 340px;
  margin-bottom: -30px;
  background:
    linear-gradient(135deg, rgba(255,255,255,.4) 0 12%, transparent 12% 100%),
    repeating-linear-gradient(0deg, rgba(45,23,25,.08) 0 1px, transparent 1px 5px),
    #c88782;
  border: 1px solid rgba(45,23,25,.3);
  transform: rotate(3deg);
  &::before {
    content: "KUNDAROMA / PROOF";
    position: absolute;
    top: 18px; left: 18px;
    font: 500 0.63rem ${({ theme }) => theme.fonts.mono};
    letter-spacing: .12em;
  }
  &::after {
    content: "real post\\A source image pending";
    white-space: pre;
    position: absolute;
    left: 18px; bottom: 18px;
    font: 400 0.7rem/1.5 ${({ theme }) => theme.fonts.mono};
  }
  @media (max-width: 700px) { min-height: 230px; max-width: 290px; margin: 48px 20px 0 auto; }
`;

const HeroNote = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: 70px;
  @media (max-width: 700px) { display: block; margin-top: 48px; }
`;

const Index = styled.span`
  font: 500 0.68rem ${({ theme }) => theme.fonts.mono};
  letter-spacing: .1em;
  text-transform: uppercase;
`;

const Intro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10vw;
  align-items: end;
  @media (max-width: 700px) { display: block; }
`;

const Feature = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 9vw;
  align-items: center;
  @media (max-width: 800px) { display: block; }
`;

const FeatureVisual = styled.div`
  min-height: 570px;
  padding: 30px;
  display: flex;
  align-items: end;
  background: #b46d63;
  color: #f7f4ef;
  transform: rotate(-2deg);
  @media (max-width: 800px) { min-height: 390px; margin-bottom: 64px; }
`;

const VisualLabel = styled.div`
  max-width: 220px;
  font: 500 .7rem/1.5 ${({ theme }) => theme.fonts.mono};
  letter-spacing: .08em;
  text-transform: uppercase;
`;

const FeatureCopy = styled.div`
  h2 { margin: 0 0 28px; font: 400 clamp(4rem, 9vw, 8.5rem)/.82 ${({ theme }) => theme.fonts.display}; letter-spacing: -.08em; }
  p { max-width: 440px; margin: 0 0 36px; font-size: 1.15rem; line-height: 1.55; }
`;

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  margin-top: 90px;
  border-top: 1px solid currentColor;
  @media (max-width: 800px) { grid-template-columns: repeat(2, 1fr); }
`;

const Beat = styled.div`
  min-height: 260px;
  padding: 22px 16px 20px 0;
  border-right: 1px solid currentColor;
  &:last-child { border-right: 0; }
  h3 { margin: 45px 0 12px; font: 400 2rem/.95 ${({ theme }) => theme.fonts.display}; letter-spacing: -.05em; }
  p { margin: 0; font-size: .85rem; line-height: 1.5; opacity: .7; }
  @media (max-width: 800px) { &:nth-child(2) { border-right: 0; } }
`;

const Campaign = styled.div`
  display: grid;
  grid-template-columns: 1fr .7fr;
  gap: 10vw;
  align-items: end;
  @media (max-width: 700px) { display: block; }
`;

const CampaignBlock = styled.div`
  min-height: 530px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #f3d5cd;
  color: #59333a;
  border-radius: 50% 50% 0 0;
  transform: rotate(2deg);
  h3 { max-width: 600px; margin: 40px 0 0; font: 400 clamp(4rem, 8vw, 8rem)/.8 ${({ theme }) => theme.fonts.display}; letter-spacing: -.08em; }
`;

const Archive = styled.div`
  margin-top: 100px;
  border-top: 1px solid currentColor;
`;

const ArchiveRow = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 1fr 120px;
  gap: 18px;
  align-items: baseline;
  padding: 23px 0;
  border-bottom: 1px solid currentColor;
  font-size: .92rem;
  transition: padding 250ms ease;
  &:hover { padding-left: 18px; padding-right: 18px; }
  strong { font: 400 clamp(1.8rem, 3.5vw, 3.6rem)/.9 ${({ theme }) => theme.fonts.display}; letter-spacing: -.05em; }
  small { font: 500 .62rem ${({ theme }) => theme.fonts.mono}; text-transform: uppercase; letter-spacing: .08em; }
  @media (max-width: 700px) { grid-template-columns: 42px 1fr; small:nth-child(3), small:last-child { grid-column: 2; } }
`;

const Notebook = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8vw;
  @media (max-width: 700px) { display: block; }
`;

const TechItem = styled.article`
  padding-top: 22px;
  border-top: 1px solid rgba(247,244,239,.35);
  & + & { margin-top: 90px; }
  h3 { margin: 38px 0 18px; font: 400 clamp(2.8rem, 5vw, 5.5rem)/.85 ${({ theme }) => theme.fonts.display}; letter-spacing: -.07em; }
  p { max-width: 420px; color: rgba(247,244,239,.7); line-height: 1.55; }
  a { display: inline-flex; margin-top: 22px; color: inherit; }
`;

const NotebookVisual = styled.div<{ $alt?: boolean }>`
  height: 210px;
  margin-top: 30px;
  background: ${({ $alt }) => $alt
    ? "linear-gradient(110deg, transparent 45%, rgba(247,244,239,.7) 45% 46%, transparent 46%), repeating-linear-gradient(0deg, rgba(247,244,239,.2) 0 1px, transparent 1px 24px)"
    : "radial-gradient(circle at 35% 45%, #e2a59b 0 4px, transparent 5px), linear-gradient(90deg, transparent 49%, rgba(247,244,239,.6) 49% 50%, transparent 50%), repeating-linear-gradient(90deg, rgba(247,244,239,.18) 0 1px, transparent 1px 26px)"};
  border: 1px solid rgba(247,244,239,.35);
`;

const Quote = styled.blockquote`
  max-width: 900px;
  margin: 0;
  font: 400 clamp(3rem, 7vw, 7.2rem)/.9 ${({ theme }) => theme.fonts.display};
  letter-spacing: -.075em;
  p { margin: 0; }
  footer { margin-top: 36px; font: 500 .68rem ${({ theme }) => theme.fonts.mono}; letter-spacing: .1em; text-transform: uppercase; opacity: .65; }
`;

const Credits = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 10vw;
  @media (max-width: 700px) { display: block; }
  h2 { margin: 0; font: 400 clamp(3rem, 7vw, 7rem)/.85 ${({ theme }) => theme.fonts.display}; letter-spacing: -.08em; }
  dl { margin: 0; }
  dt { margin-top: 20px; font: 500 .65rem ${({ theme }) => theme.fonts.mono}; letter-spacing: .09em; text-transform: uppercase; color: ${({ theme }) => theme.colors.textSecondary}; }
  dd { margin: 7px 0 0; font-size: 1.1rem; line-height: 1.5; }
`;

const Contact = styled(Scene)`
  min-height: 650px;
  display: flex;
  align-items: end;
  background: #241f1a;
  color: #f7f4ef;
  h2 { max-width: 900px; margin: 0 0 55px; font: 400 clamp(4.5rem, 12vw, 12rem)/.78 ${({ theme }) => theme.fonts.display}; letter-spacing: -.09em; }
  a { color: inherit; }
`;

export function EditorialHome() {
  return (
    <Page>
      <Nav aria-label="Main navigation">
        <Mark href="/">M.</Mark>
        <NavLinks><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></NavLinks>
        <span>Portfolio / 2026</span>
      </Nav>

      <Hero aria-label="Introduction">
        <Inner>
          <HeroGrid>
            <div>
              <Eyebrow>01 / Opening — Meghana Padmavathi</Eyebrow>
              <HeroTitle><span>I wasn&apos;t hired.</span><span>She posted it anyway.</span></HeroTitle>
            </div>
            <Proof role="img" aria-label="Kundaroma proof image placeholder" />
          </HeroGrid>
          <HeroNote>
            <Body>A second-year AI/ML student who also designs brand strategy and campaigns.</Body>
            <ArrowLink href={contactContent.ctaHref}>Email me <ArrowUpRight size={16} /></ArrowLink>
          </HeroNote>
          <MoveDown size={18} aria-hidden="true" style={{ marginTop: 70 }} />
        </Inner>
      </Hero>

      <Scene $tone="paper" id="about">
        <Inner>
          <Intro>
            <div><Eyebrow>02 / Positioning</Eyebrow><Huge>Creative instinct, technical range.</Huge></div>
            <Body>I move between the first idea and the final system — finding the sentence, shaping the world around it, and making the work feel considered.</Body>
          </Intro>
        </Inner>
      </Scene>

      <Scene id="work">
        <Inner>
          <Eyebrow>03 / Feature story — Real client</Eyebrow>
          <Feature>
            <FeatureVisual><VisualLabel>01<br />Kundaroma<br /><br />Unsolicited design<br />posted by the brand</VisualLabel></FeatureVisual>
            <FeatureCopy>
              <h2>{featuredCaseStudies[0]?.title}</h2>
              <p>{featuredCaseStudies[0]?.teaser}</p>
              <ArrowLink href="/work/kundaroma">Read the story <ArrowUpRight size={16} /></ArrowLink>
            </FeatureCopy>
          </Feature>
          <StoryGrid>
            {["No brief.", "Send it anyway.", "Make it useful.", "They posted it."].map((title, index) => (
              <Beat key={title}><Index>0{index + 1}</Index><h3>{title}</h3><p>{["A cold idea for a real perfume brand.", "Three local businesses, one instinct.", "A design with a reason to exist.", "The outcome, without embellishment."][index]}</p></Beat>
            ))}
          </StoryGrid>
        </Inner>
      </Scene>

      <Scene $tone="rose">
        <Inner>
          <Eyebrow>04 / Campaign world — Concept</Eyebrow>
          <Campaign>
            <CampaignBlock><Index>Veloura / Concept — Not launched</Index><h3>Confidence under pressure.</h3><Index>Luxury haircare / campaign direction</Index></CampaignBlock>
            <div><Huge>Built to be seen.</Huge><Body style={{ marginTop: 34, color: "#59333a" }}>A self-initiated luxury haircare brand built from positioning to public-facing campaign. Conceptual work, clearly labeled.</Body><div style={{ marginTop: 34 }}><ArrowLink href="/work/veloura">Open Veloura <ArrowUpRight size={16} /></ArrowLink></div></div>
          </Campaign>
        </Inner>
      </Scene>

      <Scene>
        <Inner>
          <Eyebrow>05 / Supporting creative work</Eyebrow>
          <Huge>An archive of trying things on purpose.</Huge>
          <Archive>
            {[condensedWork, { title: "The Naga Kitchen", tag: "Concept", description: "Unsolicited brand and social media design direction." }, { title: "Golden Gym", tag: "Concept", description: "A local business outreach concept." }].map((item, index) => (
              <ArchiveRow key={item.title}><small>0{index + 1}</small><strong>{item.title}</strong><small>{item.tag}</small><small>{index === 0 ? "Strategy" : "Brand design"}</small></ArchiveRow>
            ))}
          </Archive>
        </Inner>
      </Scene>

      <Scene $tone="ink">
        <Inner>
          <Eyebrow>06 / Technical notebook</Eyebrow>
          <Notebook>
            <div><Huge>Proof of range.</Huge><Body style={{ marginTop: 34, color: "rgba(247,244,239,.7)" }}>The technical work stays in the notebook: visual, annotated, and useful — never a separate developer persona.</Body></div>
            <div>
              {technicalProjects.map((project, index) => <TechItem key={project.title}><Index>0{index + 1} / {project.meta}</Index><NotebookVisual $alt={index === 1} /><h3>{project.title}</h3><p>{project.description}</p><a href={project.linkHref} target="_blank" rel="noreferrer">{project.linkLabel} <ArrowUpRight size={16} /></a></TechItem>)}
            </div>
          </Notebook>
        </Inner>
      </Scene>

      <Scene $tone="paper">
        <Inner>
          <Eyebrow>07 / Writing</Eyebrow>
          <Quote><p>&ldquo;Good work should make the next idea easier to see.&rdquo;</p><footer>Notes on creative strategy / Meghana</footer></Quote>
        </Inner>
      </Scene>

      <Scene>
        <Inner>
          <Credits>
            <div><Eyebrow>08 / Credits</Eyebrow><h2>What I&apos;m making room for.</h2></div>
            <div>
              {experienceEntries.map((entry) => <div key={entry.org}><dt>{entry.org} {entry.ongoing ? " / ongoing" : ""}</dt><dd>{entry.role} — {entry.description}</dd></div>)}
              <dl>{skillGroups.map((group) => <div key={group.category}><dt>{group.category}</dt><dd>{group.items}</dd></div>)}</dl>
            </div>
          </Credits>
        </Inner>
      </Scene>

      <Contact id="contact">
        <Inner>
          <Eyebrow style={{ color: "rgba(247,244,239,.6)" }}>09 / Open line</Eyebrow>
          <h2>{contactContent.heading}.<br />Let&apos;s make it matter.</h2>
          <ArrowLink href={contactContent.ctaHref}>Email me <Mail size={16} /></ArrowLink>
        </Inner>
      </Contact>
    </Page>
  );
}