import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ayush',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
