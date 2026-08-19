"use client";

import Link from "next/link";
import Image from "next/image";
import styled, { css } from "styled-components";
import { ArrowUpRight, Mail, MoveDown } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { contactContent } from "@/content/contact";
import { experienceEntries } from "@/content/experience";
import { featuredCaseStudies, condensedWork } from "@/content/featured-work";
import { skillGroups } from "@/content/skills";
import { technicalProjects } from "@/content/technical-projects";

const Page = styled.main`
  overflow: hidden;
  background: #f7f4ef;
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
  color: #241f1a;
  font: 500 0.72rem/1 ui-monospace, monospace;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Mark = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-family: Georgia, serif;
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
  ${({ $tone }) => $tone === "ink" && css`background: #241f1a; color: #f7f4ef;`}
  ${({ $tone }) => $tone === "rose" && css`background: #d7a3a0; color: #2d1719;`}
  ${({ $tone }) => $tone === "blue" && css`background: #1d3652; color: #f7f4ef;`}
  ${({ $tone }) => $tone === "paper" && css`background: #e8e1d5;`}
`;

const Inner = styled.div`
  max-width: 1240px;
  margin: auto;
`;

const Eyebrow = styled.p`
  margin: 0 0 30px;
  color: #6e6459;
  font: 500 0.62rem/1.5 ui-monospace, monospace;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

const Huge = styled.h2<{ $gesture?: "position" | "archive" | "range" }>`
  max-width: ${({ $gesture }) => ($gesture === "archive" ? "720px" : "980px")};
  margin: 0;
  font: 400 ${({ $gesture }) => $gesture === "position"
    ? "clamp(3.5rem, 8vw, 8.5rem)"
    : $gesture === "range"
      ? "clamp(3rem, 6.8vw, 7.2rem)"
      : "clamp(2.8rem, 6vw, 6.6rem)"}/.87 Georgia, serif;
  letter-spacing: ${({ $gesture }) => ($gesture === "archive" ? "-0.06em" : "-0.075em")};
  text-wrap: balance;
`;

const Body = styled.p`
  max-width: 33ch;
  margin: 0;
  color: #6e6459;
  font-size: clamp(1rem, 1.4vw, 1.2rem);
  line-height: 1.6;
  letter-spacing: -0.012em;
`;

const ArrowLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: inherit;
  font: 500 0.72rem/1 ui-monospace, monospace;
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
  position: relative;
  min-height: min(650px, 68vh);
  display: flex;
  align-items: center;
  @media (max-width: 700px) {
    min-height: auto;
    display: block;
  }
`;

const HeroEdition = styled.span`
  position: absolute;
  top: -54px;
  right: 5vw;
  z-index: 0;
  color: rgba(36,31,26,.07);
  font: 400 clamp(13rem, 25vw, 25rem)/.7 Georgia, serif;
  letter-spacing: -.12em;
  pointer-events: none;
  user-select: none;
`;

const HeroTitle = styled.h1`
  position: relative;
  z-index: 2;
  max-width: 980px;
  margin: 0;
  font: 400 clamp(4rem, 11.8vw, 11rem)/0.74 Georgia, serif;
  letter-spacing: -0.1em;
  text-wrap: balance;
  span { display: block; }
  span:first-child { margin-left: clamp(0px, 3vw, 42px); }
  span:last-child { margin-left: clamp(34px, 13vw, 180px); }
  @media (max-width: 700px) {
    font-size: clamp(3.6rem, 17vw, 6rem);
    line-height: .8;
    span:first-child { margin-left: 0; }
    span:last-child { margin: 10px 0 0 12vw; }
  }
`;

const Proof = styled.div`
  position: relative;
  z-index: 3;
  width: clamp(190px, 22vw, 310px);
  height: clamp(390px, 49vw, 560px);
  margin: 0 0 0 clamp(-145px, -11vw, -30px);
  overflow: hidden;
  background: #f2ede5;
  border: 1px solid rgba(45,23,25,.3);
  box-shadow: 14px 18px 0 rgba(36, 31, 26, .08);
  transform: rotate(2.5deg);
  transform-origin: 50% 80%;
  &::before {
    content: "";
    position: absolute;
    inset: 7px;
    z-index: 2;
    border: 1px solid rgba(247,244,239,.62);
    pointer-events: none;
  }
  @media (max-width: 700px) {
    width: min(66vw, 280px);
    height: min(110vw, 410px);
    margin: 48px 8vw 0 auto;
    transform: rotate(2deg);
  }
`;

const HeroArtwork = styled(Image)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const HeroStamp = styled.span`
  position: absolute;
  z-index: 4;
  top: -18px;
  right: -64px;
  color: #6e6459;
  font: 500 .62rem/1 ui-monospace, monospace;
  letter-spacing: .12em;
  text-transform: uppercase;
  transform: rotate(90deg);
  transform-origin: left bottom;
  @media (max-width: 700px) {
    top: -14px;
    right: -56px;
  }
`;

const HeroRule = styled.div`
  position: absolute;
  z-index: 4;
  left: 0;
  bottom: 18px;
  width: 54px;
  border-top: 1px solid currentColor;
`;

const HeroCaption = styled.span`
  position: absolute;
  z-index: 4;
  bottom: -31px;
  left: 7px;
  color: #6e6459;
  font: 500 .58rem/1.2 ui-monospace, monospace;
  letter-spacing: .08em;
  text-transform: uppercase;
  white-space: nowrap;
`;

const OceanScene = styled.section`
  position: relative;
  min-height: min(850px, 90vh);
  padding: 8vw 5vw;
  overflow: hidden;
  background: #7bd6d2;
  color: #123d43;
  img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; object-position: center; }
`;

const OceanOverlay = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1240px;
  margin: auto;
  pointer-events: none;
  h2 { max-width: 500px; margin: 0; font: 400 clamp(4rem, 10vw, 10rem)/.8 Georgia, serif; letter-spacing: -.08em; }
  @media (max-width: 700px) {
    display: block;
    h2 { margin-top: 34vh; }
  }
`;

const HeroNote = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: -18px;
  padding-top: 30px;
  border-top: 1px solid rgba(36,31,26,.25);
  gap: 32px;
  @media (max-width: 700px) { display: block; margin-top: 48px; }
`;

const Index = styled.span`
  font: 500 0.68rem ui-monospace, monospace;
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
  position: relative;
  min-height: 570px;
  overflow: hidden;
  padding: 30px;
  display: flex;
  align-items: end;
  background: #b46d63;
  color: #f7f4ef;
  transform: rotate(-2deg);
  @media (max-width: 800px) { min-height: 390px; margin-bottom: 64px; }
`;

const VisualLabel = styled.div`
  position: relative;
  z-index: 1;
  padding: 10px;
  background: rgba(36, 31, 26, .78);
  max-width: 220px;
  font: 500 .7rem/1.5 ui-monospace, monospace;
  letter-spacing: .08em;
  text-transform: uppercase;
`;

const FeatureCopy = styled.div`
  h2 {
    max-width: 9ch;
    margin: 0 0 34px;
    font: 400 clamp(3.5rem, 7.5vw, 7.8rem)/.78 Georgia, serif;
    letter-spacing: -.085em;
    text-wrap: balance;
  }
  p {
    max-width: 34ch;
    margin: 0 0 40px;
    font-size: 1.08rem;
    line-height: 1.62;
    letter-spacing: -.012em;
  }
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
  h3 { margin: 52px 0 14px; font: 400 clamp(1.7rem, 2.6vw, 2.5rem)/.9 Georgia, serif; letter-spacing: -.06em; text-wrap: balance; }
  p { max-width: 18ch; margin: 0; font-size: .78rem; line-height: 1.55; letter-spacing: .005em; opacity: .7; }
  @media (max-width: 800px) { &:nth-child(2) { border-right: 0; } }
`;

const VelouraScene = styled(Scene)`
  overflow: hidden;
  background: #182827;
  color: #e9e0d1;
  padding-top: clamp(120px, 15vw, 210px);
  padding-bottom: clamp(120px, 16vw, 220px);
`;

const VelouraTopline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(233,224,209,.35);
  color: #b9c9b7;
  @media (max-width: 700px) { gap: 24px; align-items: start; }
`;

const VelouraMark = styled.h2`
  margin: 0;
  font: 400 clamp(4.5rem, 14vw, 13rem)/.75 Georgia, serif;
  letter-spacing: -.12em;
  text-wrap: nowrap;
  color: #e9e0d1;
`;

const ConceptFlag = styled.div`
  position: relative;
  z-index: 2;
  max-width: 170px;
  padding: 10px 12px;
  border: 1px solid #d09b83;
  color: #edb79e;
  font: 500 .64rem/1.35 ui-monospace, monospace;
  letter-spacing: .1em;
  text-transform: uppercase;
  @media (max-width: 700px) { max-width: 145px; }
`;

const VelouraIntro = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1.1fr .9fr;
  gap: 8vw;
  align-items: end;
  margin-top: clamp(58px, 9vw, 120px);
  @media (max-width: 700px) { display: block; }
`;

const VelouraClaim = styled.h3`
  position: relative;
  z-index: 1;
  max-width: 8ch;
  margin: 0;
  color: #edb79e;
  font: 400 clamp(5rem, 12vw, 12rem)/.76 Georgia, serif;
  letter-spacing: -.1em;
  text-wrap: balance;
`;

const ClaimNote = styled.p`
  max-width: 25ch;
  margin: 0 0 10px auto;
  color: rgba(233,224,209,.72);
  font: 500 .62rem/1.65 ui-monospace, monospace;
  letter-spacing: .075em;
  text-transform: uppercase;
  @media (max-width: 700px) { margin: 32px 0 0; }
`;

const ExposureField = styled.div`
  position: relative;
  min-height: 410px;
  margin-top: clamp(80px, 12vw, 170px);
  border-top: 1px solid rgba(233,224,209,.35);
  border-bottom: 1px solid rgba(233,224,209,.35);
  background:
    radial-gradient(ellipse at 74% 48%, rgba(208,155,131,.5), transparent 28%),
    linear-gradient(115deg, transparent 0 56%, rgba(73,115,99,.55) 56% 57%, transparent 57%),
    linear-gradient(165deg, #253a35 0 52%, #182827 52%);
  overflow: hidden;
  @media (max-width: 700px) { min-height: 460px; }
`;

const ExposureHeading = styled.div`
  position: absolute;
  top: 22px;
  left: 0;
  color: #b9c9b7;
  font: 500 .65rem/1 ui-monospace, monospace;
  letter-spacing: .12em;
  text-transform: uppercase;
`;

const DayField = styled.div`
  position: absolute;
  inset: 58px 0 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  @media (max-width: 700px) {
    inset: 68px 0 28px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: stretch;
  }
`;

const Day = styled.span<{ $index: number }>`
  display: block;
  color: ${({ $index }) => ($index === 2 ? "#edb79e" : "rgba(233,224,209,.84)")};
  font: 400 clamp(2.7rem, ${({ $index }) => 4 + $index * 1.5}vw, 7rem)/.8 Georgia, serif;
  letter-spacing: -.09em;
  transform: translateY(${({ $index }) => ($index % 2 ? "34px" : "-20px")}) rotate(${({ $index }) => ($index - 2) * 2}deg);
  @media (max-width: 700px) {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-size: clamp(2.1rem, 10vw, 3.4rem);
  }
`;

const QRDevice = styled.div`
  position: absolute;
  right: 6vw;
  bottom: 18px;
  width: 112px;
  height: 112px;
  padding: 10px;
  background: #e9e0d1;
  border: 8px solid #e9e0d1;
  color: #182827;
  transform: rotate(-7deg);
  box-shadow: 8px 9px 0 rgba(0,0,0,.16);
  background-image:
    linear-gradient(90deg, #182827 10%, transparent 10% 22%, #182827 22% 34%, transparent 34% 47%, #182827 47% 61%, transparent 61% 75%, #182827 75% 89%, transparent 89%),
    linear-gradient(#182827 10%, transparent 10% 24%, #182827 24% 38%, transparent 38% 52%, #182827 52% 66%, transparent 66% 80%, #182827 80%);
  background-size: 100% 100%;
  &::after {
    content: "SCAN / CONCEPT";
    position: absolute;
    top: calc(100% + 12px);
    right: -3px;
    color: #edb79e;
    font: 500 .58rem/1 ui-monospace, monospace;
    letter-spacing: .08em;
    white-space: nowrap;
  }
  @media (max-width: 700px) { right: 3vw; width: 92px; height: 92px; }
`;

const CampaignFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 30px;
  margin-top: 100px;
  @media (max-width: 700px) { display: block; }
`;

const Archive = styled.div`
  position: relative;
  margin-top: 100px;
  border-top: 1px solid currentColor;
`;

const ArchivePreview = styled.div`
  position: absolute;
  top: 26px;
  right: 0;
  width: min(31vw, 370px);
  height: 310px;
  overflow: hidden;
  pointer-events: none;
  @media (max-width: 700px) {
    position: relative;
    top: auto;
    width: 100%;
    height: 230px;
    margin-bottom: 36px;
  }
`;

const ArchivePlate = styled.div<{ $variant: number; $visible: boolean }>`
  position: absolute;
  inset: 0;
  padding: 22px;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? "translateY(0)" : "translateY(14px)")};
  transition: opacity 280ms ease, transform 380ms cubic-bezier(.16,1,.3,1);
  background: ${({ $variant }) => [
    "linear-gradient(135deg, #d8c8a9 0 23%, #8c3f39 23% 24%, #d8c8a9 24% 63%, #202b2d 63%)",
    "linear-gradient(115deg, #e2b9a4 0 29%, #55343b 29% 57%, #efddc8 57%)",
    "linear-gradient(150deg, #d9ded5 0 38%, #1e3840 38% 70%, #bf765f 70%)",
  ][$variant]};
  color: ${({ $variant }) => ($variant === 1 ? "#55343b" : "#f5eee3")};
  &::before {
    content: "";
    position: absolute;
    inset: 14px;
    border: 1px solid currentColor;
    opacity: .55;
  }
  &::after {
    content: ${({ $variant }) => [`"PASSION / 01"`, `"TABLE / 02"`, `"TRAIN / 03"`][$variant]};
    position: absolute;
    right: 22px;
    bottom: 20px;
    font: 500 .62rem/1 ui-monospace, monospace;
    letter-spacing: .12em;
  }
`;

const ArchivePlateTitle = styled.span`
  position: relative;
  z-index: 1;
  display: block;
  max-width: 220px;
  font: 400 clamp(2rem, 4vw, 4rem)/.85 Georgia, serif;
  letter-spacing: -.08em;
  text-wrap: balance;
`;

const ArchivePlateNote = styled.span`
  position: absolute;
  z-index: 1;
  left: 22px;
  bottom: 20px;
  max-width: 140px;
  font: 500 .62rem/1.4 ui-monospace, monospace;
  letter-spacing: .06em;
  text-transform: uppercase;
`;

const ArchiveRows = styled.div`
  position: relative;
  z-index: 1;
  width: calc(100% - min(33vw, 410px));
  @media (max-width: 700px) { width: 100%; }
`;

const ArchiveRow = styled.button<{ $active: boolean }>`
  display: grid;
  grid-template-columns: 70px minmax(0, 1fr) 92px 28px;
  width: 100%;
  gap: 18px;
  align-items: baseline;
  appearance: none;
  border: 0;
  color: inherit;
  background: transparent;
  text-align: left;
  cursor: pointer;
  padding: 23px 0;
  border-bottom: 1px solid currentColor;
  &:hover strong, &:focus-visible strong { transform: translateX(10px); }
  &:hover small, &:focus-visible small, &[data-active="true"] small { opacity: 1; }
  strong {
    display: block;
    font: 400 clamp(1.7rem, 3.2vw, 3.35rem)/.88 Georgia, serif;
    letter-spacing: -.06em;
    text-wrap: balance;
    transition: transform 280ms cubic-bezier(.16,1,.3,1);
  }
  small {
    opacity: ${({ $active }) => ($active ? 1 : .55)};
    font: 500 .65rem/1.2 ui-monospace, monospace;
    letter-spacing: .08em;
    text-transform: uppercase;
    transition: opacity 220ms ease;
  }
  span:last-child { justify-self: end; font-size: 1.2rem; }
  @media (max-width: 700px) {
    grid-template-columns: 38px minmax(0, 1fr) 24px;
    gap: 10px;
    small:nth-child(3) { display: none; }
  }
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
  h3 { max-width: 10ch; margin: 38px 0 18px; font: 400 clamp(2.6rem, 4.5vw, 5rem)/.84 Georgia, serif; letter-spacing: -.075em; text-wrap: balance; }
  p { max-width: 34ch; color: rgba(247,244,239,.7); line-height: 1.62; letter-spacing: -.01em; }
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
  max-width: 780px;
  margin: 0;
  font: 400 clamp(2.7rem, 6.2vw, 6.5rem)/.9 Georgia, serif;
  letter-spacing: -.08em;
  text-wrap: balance;
  p { margin: 0; }
  footer { margin-top: 36px; font: 500 .68rem ui-monospace, monospace; letter-spacing: .1em; text-transform: uppercase; opacity: .65; }
`;

const Credits = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 10vw;
  @media (max-width: 700px) { display: block; }
  h2 { max-width: 8ch; margin: 0; font: 400 clamp(3rem, 6vw, 6.2rem)/.84 Georgia, serif; letter-spacing: -.085em; text-wrap: balance; }
  dl { margin: 0; }
  dt { margin-top: 20px; font: 500 .65rem ui-monospace, monospace; letter-spacing: .09em; text-transform: uppercase; color: #6e6459; }
  dd { max-width: 31ch; margin: 7px 0 0; font-size: 1.02rem; line-height: 1.58; letter-spacing: -.01em; }
`;

const CreditsList = styled.dl`
  margin: 0;
`;

const Contact = styled(Scene)`
  min-height: 650px;
  display: flex;
  align-items: end;
  background: #241f1a;
  color: #f7f4ef;
  h2 { max-width: 9ch; margin: 0 0 55px; font: 400 clamp(4.2rem, 11vw, 11rem)/.76 Georgia, serif; letter-spacing: -.1em; text-wrap: balance; }
  a { color: inherit; }
`;

export function EditorialHome() {
  const [activeArchive, setActiveArchive] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const titleY = useTransform(scrollYProgress, [0, 0.24], [0, -18]);
  const artworkY = useTransform(scrollYProgress, [0, 0.24], [0, 28]);
  const noteY = useTransform(scrollYProgress, [0, 0.18], [16, 0]);
  const velouraY = useTransform(scrollYProgress, [0.42, 0.72], [34, 0]);
  const velouraScale = useTransform(scrollYProgress, [0.42, 0.72], [.97, 1]);

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
            <HeroEdition aria-hidden="true">01</HeroEdition>
            <motion.div style={prefersReducedMotion ? undefined : { y: titleY }}>
              <Eyebrow>01 / Opening — Meghana Padmavathi</Eyebrow>
              <HeroTitle><span>I wasn&apos;t hired.</span><span>She posted it anyway.</span></HeroTitle>
            </motion.div>
            <motion.div style={prefersReducedMotion ? undefined : { y: artworkY }}>
              <Proof>
                <HeroArtwork
                  src="/kundaroma/kadal-editorial.jpeg"
                  alt="Kundaroma Kadal fragrance creative with navy perfume bottle and gold vertical typography"
                  width={600}
                  height={900}
                  priority
                />
                <HeroStamp>Kundaroma / Kadal / 2026</HeroStamp>
                <HeroRule />
                <HeroCaption>Unsolicited design / posted by the brand</HeroCaption>
              </Proof>
            </motion.div>
          </HeroGrid>
          <motion.div style={prefersReducedMotion ? undefined : { y: noteY }}>
            <HeroNote>
            <Body>A second-year AI/ML student who also designs brand strategy and campaigns.</Body>
            <ArrowLink href={contactContent.ctaHref}>Email me <ArrowUpRight size={16} /></ArrowLink>
            </HeroNote>
          </motion.div>
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
            <FeatureVisual>
              <HeroArtwork
                src="/kundaroma/kadal-editorial.jpeg"
                alt="Kundaroma Kadal fragrance creative with navy perfume bottle and gold vertical typography"
                width={600}
                height={900}
              />
              <VisualLabel>01<br />Kundaroma<br /><br />Unsolicited design<br />posted by the brand</VisualLabel>
            </FeatureVisual>
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

      <OceanScene aria-label="Kundaroma ocean creative">
        <Image
          src="/kundaroma/kadal-ocean.jpeg"
          alt="Kundaroma Kadal fragrance creative framed over turquoise ocean water"
          width={900}
          height={1200}
        />
        <OceanOverlay>
          <Eyebrow style={{ color: "#123d43" }}>04 / The work</Eyebrow>
          <h2>As deep as the ocean.</h2>
        </OceanOverlay>
      </OceanScene>

      <VelouraScene>
        <Inner>
          <VelouraTopline>
            <Eyebrow style={{ color: "#b9c9b7", margin: 0 }}>04 / Brand world — Veloura</Eyebrow>
            <ConceptFlag>Concept — Not launched</ConceptFlag>
          </VelouraTopline>
          <motion.div style={prefersReducedMotion ? undefined : { y: velouraY, scale: velouraScale }}>
            <VelouraIntro>
              <VelouraMark>VELOURA</VelouraMark>
              <ClaimNote>Luxury haircare / self-initiated campaign direction / 2026</ClaimNote>
            </VelouraIntro>
            <VelouraIntro>
              <VelouraClaim>Confidence under pressure.</VelouraClaim>
              <ClaimNote>Real hair exposed outdoors for five days. The claim becomes the test.</ClaimNote>
            </VelouraIntro>
            <ExposureField>
              <ExposureHeading>02 / The mechanic — exposure study</ExposureHeading>
              <DayField aria-label="Five-day outdoor exposure study">
                {[1, 2, 3, 4, 5].map((day, index) => <Day key={day} $index={index}>DAY {String(day).padStart(2, "0")}</Day>)}
              </DayField>
              <QRDevice aria-label="QR code campaign mechanic, concept device" />
            </ExposureField>
            <CampaignFooter>
              <Body style={{ color: "rgba(233,224,209,.72)" }}>A billboard mechanic designed to make the product claim public, measurable, and impossible to ignore. The QR code invites the audience into the test.</Body>
              <ArrowLink href="/work/veloura" style={{ color: "#e9e0d1" }}>Open the concept <ArrowUpRight size={16} /></ArrowLink>
            </CampaignFooter>
          </motion.div>
        </Inner>
      </VelouraScene>

      <Scene>
        <Inner>
          <Eyebrow>05 / Supporting creative work</Eyebrow>
          <Huge>An archive of trying things on purpose.</Huge>
          <Archive>
            <ArchivePreview aria-hidden="true">
              {[condensedWork, { title: "The Naga Kitchen", tag: "Concept", description: "Unsolicited brand and social media design direction." }, { title: "Golden Gym", tag: "Concept", description: "A local business outreach concept." }].map((item, index) => (
                <ArchivePlate key={item.title} $variant={index} $visible={activeArchive === index}>
                  <ArchivePlateTitle>{item.title}</ArchivePlateTitle>
                  <ArchivePlateNote>{item.tag} / {index === 0 ? "Strategy" : "Brand design"}</ArchivePlateNote>
                </ArchivePlate>
              ))}
            </ArchivePreview>
            <ArchiveRows>
              {[condensedWork, { title: "The Naga Kitchen", tag: "Concept", description: "Unsolicited brand and social media design direction." }, { title: "Golden Gym", tag: "Concept", description: "A local business outreach concept." }].map((item, index) => (
                <ArchiveRow
                  key={item.title}
                  type="button"
                  $active={activeArchive === index}
                  data-active={activeArchive === index}
                  onMouseEnter={() => setActiveArchive(index)}
                  onFocus={() => setActiveArchive(index)}
                  onClick={() => setActiveArchive(index)}
                  aria-label={`Preview ${item.title}`}
                >
                  <small>0{index + 1}</small>
                  <strong>{item.title}</strong>
                  <small>{item.tag} / {index === 0 ? "Strategy" : "Brand design"}</small>
                  <span aria-hidden="true">→</span>
                </ArchiveRow>
              ))}
            </ArchiveRows>
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
              <CreditsList>
                {experienceEntries.map((entry) => <div key={entry.org}><dt>{entry.org} {entry.ongoing ? " / ongoing" : ""}</dt><dd>{entry.role} — {entry.description}</dd></div>)}
              </CreditsList>
              <CreditsList>{skillGroups.map((group) => <div key={group.category}><dt>{group.category}</dt><dd>{group.items}</dd></div>)}</CreditsList>
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