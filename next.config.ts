import type { NextConfig } from "next";

const nextConfig: NextConfig = {

    images: {
      domains: ['cdn.sanity.io'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
        },
      ],
    },
    env: {
      SHIPENGINE_API_KEY: process.env.SHIPENGINE_API_KEY,
    },
};

export default nextConfig;
