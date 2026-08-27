/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.revengeof.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      // Redirect to current CCBP year
      {
        source: '/',
        destination: '/2025',
        permanent: true,
      },
      {
        source: '/ccbp-2024',
        destination: '/2024',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
