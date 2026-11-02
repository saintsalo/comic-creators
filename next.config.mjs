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
  async headers() {
    return [
      // Clear browsers' cached permanent "/ -> /2025" redirect
      {
        source: '/2025',
        headers: [{ key: 'Clear-Site-Data', value: '"cache"' }],
      },
    ]
  },
  async redirects() {
    return [
      // Redirect to current CCBP year
      {
        source: '/',
        destination: '/2026',
        permanent: false,
      },
      // Browsers cached the old permanent "/ -> /2025" redirect, so catch them here
      {
        source: '/2025',
        destination: '/2026',
        permanent: false,
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
