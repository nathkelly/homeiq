
/** @type {import('next').NextConfig} */
const nextConfig = {
  // proxy all /api calls to your backend container
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/api/:path*', 
        // inside Docker use http://backend:3001/api/:path*
      },
    ]
  },
}
module.exports = nextConfig;
