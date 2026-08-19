import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    // TODO: add the real image host(s) once the Kundaroma/Veloura assets
    // and About photo are sourced (e.g. a CDN or /public local files).
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
