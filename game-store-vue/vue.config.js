const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    host: '0.0.0.0',
    port: 8081,
    https: false,
    open: false,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrgin: true, //是否同源
        pathRewrite: {
          '/api': ''
        }
      }
    },

  }
})
