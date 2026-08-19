"use client";

import styled from "styled-components";
import { Text } from "@/components/primitives/text";
import { Container, Section, Stack } from "@/components/primitives/layout";
import { Button } from "@/components/ui/button";
import { ProofFrame } from "@/components/case-study/proof-frame";
import { heroContent } from "@/content/hero";
import { media } from "@/lib/media";

/**
 * Hero — implements the approved Composition Reset (three-direction critique,
 * "merged" outcome): the proof image visually interrupts the headline rather
 * than sitting beside it in a conventional split layout.
 *
 * Accessibility note (a deliberate, documented engineering choice): the
 * headline stays as ONE intact sentence in the DOM/accessibility tree — it
 * is never fragmented mid-word around the image. The image is positioned via
 * CSS to intrude into the natural trailing whitespace at the end of line
 * one, not over any actual letterforms — full comprehension is preserved
 * for sighted and screen-reader users alike, matching the original "no
 * letters are actually hidden, only convention is broken" promise from the
 * composition reset.
 */
const HeroWrapper = styled(Section)`
  position: relative;
`;

const HeadlineBlock = styled.div`
  position: relative;
  max-width: ${({ theme }) => theme.container.text};
`;

const ImageIntrusion = styled.div`
  display: none;

  @media ${media.tablet} {
    display: block;
    position: absolute;
    top: 0.6em; /* straddles the gap after line one */
    right: -40px;
    z-index: 1;
  }
`;

const MobileImageBlock = styled.div`
  margin-top: ${({ theme }) => theme.space[4]};

  @media ${media.tablet} {
    display: none;
  }
`;

export function Hero() {
  return (
    <HeroWrapper as="section" aria-label="Introduction" $py={7}>
      <Container>
        <Stack $gap={4}>
          <HeadlineBlock>
            <Text as="h1" $variant="display-hero">
              {heroContent.headlineLines[0]}
              <br />
              {heroContent.headlineLines[1]}
            </Text>

            {/* Desktop/tablet: the image intrudes into the headline block. */}
            <ImageIntrusion>
              <ProofFrame imageAlt={heroContent.proofImageAlt} compact />
            </ImageIntrusion>
          </HeadlineBlock>

          <Text $variant="body" $color="secondary" style={{ maxWidth: 500 }}>
            {heroContent.subheadline}
          </Text>

          {/* Mobile: interruption retires into sequence, per the locked
              responsive plan — image follows the headline in normal flow. */}
          <MobileImageBlock>
            <ProofFrame imageAlt={heroContent.proofImageAlt} />
            <Text
              $variant="caption"
              $color="secondary"
              style={{ marginTop: 8, maxWidth: 280 }}
            >
              {heroContent.proofCaption}
            </Text>
          </MobileImageBlock>

          <div>
            <Button variant="secondary" href={heroContent.ctaHref} showArrow>
              {heroContent.ctaLabel}
            </Button>
          </div>
        </Stack>
      </Container>
    </HeroWrapper>
  );
}
