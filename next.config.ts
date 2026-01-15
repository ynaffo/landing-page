import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/landing-page", // Required for GitHub Pages project repo
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
