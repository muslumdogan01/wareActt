/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wareact-cms.onrender.com",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
