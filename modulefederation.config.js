const { dependencies } = require('./package.json');

module.exports = {
  name: 'remote',
  exposes: {
    './MFSearch': './src/MFSearch',
  },
  filename: 'remoteEntry.js',
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};
