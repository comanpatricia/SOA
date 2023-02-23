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
  },
};
