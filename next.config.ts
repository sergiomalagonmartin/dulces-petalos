import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://dulces-petalos.jakala.es/images/**')]
  }
};

export default nextConfig;
