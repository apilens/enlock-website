import type { NextConfig } from "next";

// GitHub Pages serves from /slomo-landing; Vercel (slomo.dev) serves from the root.
const onGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: onGitHubPages ? "/slomo-landing" : "",
  images: { unoptimized: true },
};

export default nextConfig;
