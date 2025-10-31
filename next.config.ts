import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    domains: ["res.cloudinary.com/"],
    loader: "cloudinary",
    //path: 'https://res.cloudinary.com/<cloudinary-id>/image/upload',
    path: "https://res.cloudinary.com/valvecloudinary/image/upload",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com/",
      },
      {
        protocol: "https",
        hostname: "nersapp.com/**",
      },
    ],
  },
};

export default nextConfig;
