module.exports = {
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
