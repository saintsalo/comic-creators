/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.revengeof.com'],
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
