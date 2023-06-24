/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://firebasestorage.googleapis.com",
      },
    ],
    minimumCacheTTL: 15000000,
  },
};

module.exports = nextConfig;
