import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // For static site generation
  distDir: 'build', // Specify build directory
  images: {
    unoptimized: true // Required for static export
  }
};

module.exports = {
  reactStrictMode: true,
  // Pastikan tidak ada pengaturan output yang tidak perlu
};

export default nextConfig;
