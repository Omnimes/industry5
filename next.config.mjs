import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      }
    ]
  },
  experimental: {
    authInterrupts: true,
    nextScriptWorkers: true,
    webVitalsAttribution: ['CLS', 'LCP'],
  },
};

export default withNextIntl(nextConfig);
