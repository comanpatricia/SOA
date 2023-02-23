const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'vue1',
        remotes: {
          'vue2': 'vue2@http://localhost:8081/remoteEntry.js',
        },
      }),
    ],
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
};

