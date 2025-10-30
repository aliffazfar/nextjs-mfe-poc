import type { NextConfig } from "next";

const ContentSecurityPolicy = `
  script-src 'self' http://localhost:3002 ${process.env.NODE_ENV === 'development' ? "'unsafe-inline' 'unsafe-eval'" : ''};
  object-src 'none';
  base-uri 'self';
`;

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
