"use client";

import { ThemeProvider } from "styled-components";
import { theme } from "@/lib/theme";
import { GlobalStyle } from "@/lib/global-style";
import { SmoothScrollProvider } from "@/lib/smooth-scroll-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SmoothScrollProvider>{children}</SmoothScrollProvider>
    </ThemeProvider>
  );
}
