const crypto = require.resolve('crypto-browserify');
const url = require.resolve('url/');
module.exports = {
  resolver: {
    extraNodeModules: {
      crypto,
      url,
    },
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
