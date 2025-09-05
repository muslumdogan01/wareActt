/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'prized-excitement-8827b8b6f4.strapiapp.com',
        pathname: '/uploads/**', 
      },
      {
        protocol: 'https',
        hostname: 'prized-excitement-8827b8b6f4.media.strapiapp.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
