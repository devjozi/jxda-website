// Purpose: Next.js config with optional static export for static hosting.
import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === 'true';

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: 'export' } : {}),
  images: {
      unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
