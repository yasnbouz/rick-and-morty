const withPreact = require('next-plugin-preact');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  images: {
    domains: ['rickandmortyapi.com'],
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = { fs: 'empty' }; // eslint-disable-line no-param-reassign
    }

    return config;
  },
};
module.exports = withBundleAnalyzer(withPreact(nextConfig));
