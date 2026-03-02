import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [375, 640, 768, 1024, 1280, 1536, 1920],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
