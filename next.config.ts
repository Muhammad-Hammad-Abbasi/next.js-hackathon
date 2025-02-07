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
    env:{
      SHIPENGINE_API_KEY: process.env.SHIPENGINE_API_KEY,
      NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
      STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    }
};

export default nextConfig;
