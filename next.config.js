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
  async redirects() {
    return [
      {
        source: '/products/del_forever',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/products/del_temp',
        destination: '/products',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/pji',
        destination: '/about/me/pji',
      },
      {
        source: '/items/:slug',
        destination: '/products/:slug',
      },
    ];
  },
};

module.exports = nextConfig;
