// vue.config.js
module.exports = {
  // 将baseUrl: '/api', 改为baseUrl: '/',
    baseUrl: '/', //开发环境
    // baseUrl: '/dist', //线上环境
    devServer: {
        proxy: {
            // '/api': {
            //     target: 'http://xxxx/device/', //对应自己的接口
            //     changeOrigin: true,
            //     ws: true,
            //     pathRewrite: {
            //         '^/api': ''
            //     }
            // },
            "/ajax": {
                "target": "http://m.maoyan.com",
                "changeOrigin": true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    },
    css: {
        loaderOptions: {
          // 给 sass-loader 传递选项
          sass: {
            //引入全局样式
            data: `
               @import "@/style/global.scss";
            `
          }
        }
      }
}