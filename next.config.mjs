/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Critical for static site generation
  basePath: '', // Keep empty for root deployment
  trailingSlash: false,
  images: {
    unoptimized: true, // Required for static export
  },
  typescript: {
    ignoreBuildErrors: false,
  },
}

export default nextConfig
