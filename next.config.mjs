import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    // remotePatterns: ['raw.githubusercontent.com']
      remotePatterns: [
      {
        protocol: "https",
        hostname: 'raw.githubusercontent.com',
      },
      // {
      //   protocol: "http",
      //   hostname: "localhost",
      //   },
      ]
  }
};

export default withNextIntl(nextConfig);
