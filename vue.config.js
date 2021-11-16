module.exports = {
  lintOnSave: false,
  pages: {
    index: {
      entry: "src/main.js"
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://42.193.15.69:8181/',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
}
