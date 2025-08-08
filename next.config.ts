import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  transpilePackages: ["framer-motion"],
};

export default nextConfig;
