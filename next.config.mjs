/** @type {import('next').NextConfig} */
const basePath = '/valentines-site'
const nextConfig = {
  output: 'export', // Required for GitHub Pages
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: {
    unoptimized: true, // GitHub Pages doesn't support the Next.js Image Optimization API
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
