// vue.config.js
module.exports = {
  devServer: {
    port: 3003
    // 代理 本地代理 上线 没有用  还是服务器配置cors好
    // proxy: {
    //   '/api': {
    //     target: 'http://api.liwenfeng.net',
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  }
}
