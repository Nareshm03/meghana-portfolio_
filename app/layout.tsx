import type { Metadata } from "next";
import { fraunces, inter, jetbrainsMono } from "@/lib/fonts";
import { StyledComponentsRegistry } from "@/lib/registry";
import { Providers } from "@/lib/providers";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Meghana — Brand Strategy & Creative Portfolio",
  description:
    "Portfolio of Meghana, a second-year AI/ML student working across brand strategy, creative direction, and technical builds.",
  // TODO: add openGraph/twitter image once a real, non-placeholder social
  // preview asset exists — do not ship a generic/stock OG image.
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <StyledComponentsRegistry>
          <Providers>
            {children}
            <Footer />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
