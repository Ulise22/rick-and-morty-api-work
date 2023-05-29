/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatters: [
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com',
        port: ' ',
        pathname: '/api/character'
      }
    ],
    domains: ['rickandmortyapi.com']
  }
}

module.exports = nextConfig
