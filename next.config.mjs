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
        destination: '/ccbp-2024',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
