import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/slomo-landing",
  images: { unoptimized: true },
};

export default nextConfig;
