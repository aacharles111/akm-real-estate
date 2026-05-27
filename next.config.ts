import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "assets.mixkit.co",
      },
      {
        protocol: "https",
        hostname: "social-collage.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "social-collage.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
