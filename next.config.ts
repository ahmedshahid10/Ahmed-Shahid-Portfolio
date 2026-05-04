import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Ahmed-Shahid-Portfolio",
  assetPrefix: "/Ahmed-Shahid-Portfolio",
  trailingSlash: true,
};

export default nextConfig;
