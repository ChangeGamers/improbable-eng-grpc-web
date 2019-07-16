const path = require('path');

const LIB_BASE_CONFIG = {
  entry: "./src/index.ts",
  mode: "production",
  module: {
    rules: [{
      test: /\.ts?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.ts']
  },
};

module.exports = [
  {
    name: 'lib-umd',
    ...LIB_BASE_CONFIG,
    output: {
      filename: `grpc-web.umd.js`,
      path: __dirname,
      library: 'grpc',
      libraryTarget: 'umd',
      globalObject: 'this',
    }
  },
];
