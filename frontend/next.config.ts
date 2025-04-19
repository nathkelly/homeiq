// frontend/next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 1️⃣ Proxy /api calls through Next so the browser never needs CORS or env‐vars.
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3001/api/:path*"
      },
    ];
  },

  // 2️⃣ Tell Next dev to be OK serving its own /_next/* assets
  //    to both localhost:3000 AND your LAN IP.
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://192.168.0.2:3000",
  ],
};

module.exports = nextConfig;
