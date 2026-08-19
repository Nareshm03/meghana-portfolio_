"use client";

import styled from "styled-components";
import { Linkedin, Github } from "lucide-react";
import { Container } from "@/components/primitives/layout";
import { Text } from "@/components/primitives/text";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/meghana-p11327/", Icon: Linkedin },
  { label: "GitHub", href: "https://github.com/meghanasp-11", Icon: Github },
];

const FooterWrapper = styled.footer`
  padding-block: ${({ theme }) => theme.space[4]};
`;

const FooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: ${({ theme }) => theme.space[3]};
`;

const IconRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[2]};
`;

const IconLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  display: inline-flex;
  transition: color ${({ theme }) => theme.motion.fast} ${({ theme }) => theme.motion.ease};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <FooterRow>
          <Text $variant="caption" $color="secondary">
            © 2026 Meghana
          </Text>
          <IconRow>
            {socialLinks.map(({ label, href, Icon }) => (
              <IconLink key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon size={18} aria-hidden="true" />
              </IconLink>
            ))}
          </IconRow>
        </FooterRow>
      </Container>
    </FooterWrapper>
  );
}
