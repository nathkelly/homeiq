/** @type {import('next').NextConfig} */
const nextConfig = {
  // Proxy /api calls through Next so your React code can ALWAYS fetch("/api/…")
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/api/:path*',
      },
    ]
  },

  // Whitelist both your dev origins
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://192.168.0.2:3000',  // ← your PC’s LAN IP
  ],
}

module.exports = nextConfig
