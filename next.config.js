/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mblogthumb-phinf.pstatic.net',
      },
    ],
  },
};

module.exports = nextConfig;
