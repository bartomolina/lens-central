/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lens.infura-ipfs.io",
      },
    ],
  },
  eslint: {
    dirs: ["app", "ui", "lib"],
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
