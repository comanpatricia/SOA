const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    publicPath: 'http://localhost:8081/',
    chunkFilename: '[id].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'vue2',
      filename: 'remoteEntry.js',
      exposes: {
        './HelloWorld': './src/components/HelloWorld.vue',
      },
      shared: {
        vue: { singleton: true, eager: true, version: '^2.6.14' },
      },
    }),
  ],
  devServer: {
    port: 8080,
  },
};
