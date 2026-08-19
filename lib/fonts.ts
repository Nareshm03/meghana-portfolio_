import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";

/**
 * Two typefaces, one mono — Design System Section 3 / Visual Bible Section 3.
 * Two weights only per family (400/500) — never a third weight (Rule 2).
 */

export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-fraunces",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"], // 600 reserved for heading-section only
  variable: "--font-inter",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});
