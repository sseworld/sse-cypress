/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['wrnqhhlyoppsqdowfhqb.supabase.co/'],
  },
};

module.exports = nextConfig;
