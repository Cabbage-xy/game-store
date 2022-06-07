const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    port: 80,
    https: false,
    oprn: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrgin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    },

  }
})
