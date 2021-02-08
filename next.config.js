const withPreact = require('next-plugin-preact');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const nextConfig = {
  images: {
    domains: ['rickandmortyapi.com'],
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = { fs: 'empty' }; // eslint-disable-line no-param-reassign
    }

    return config;
  },
};
module.exports = withBundleAnalyzer(withPWA(withPreact(nextConfig)));
