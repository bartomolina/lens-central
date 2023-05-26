/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lens.infura-ipfs.io",
      },
    ],
  },
};

module.exports = nextConfig;
