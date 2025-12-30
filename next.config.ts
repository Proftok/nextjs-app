import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'strapi-d4kw008g04k8cs0swcwgk4c4',
                port: '1337',
            },
            {
                protocol: 'https',
                hostname: '*.yourdomain.com', // Will be replaced with actual domain
            },
        ],
    },
    env: {
        STRAPI_API_URL: process.env.STRAPI_API_URL,
        NEXT_PUBLIC_STRAPI_API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
    },
};

export default nextConfig;
