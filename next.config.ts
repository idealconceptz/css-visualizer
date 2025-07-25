import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Enable React Compiler
    reactCompiler: true,
  },
  // Ensure babel configuration is used
  transpilePackages: [],
};

export default nextConfig;
