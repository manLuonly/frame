// vue.config.js
// const path = require('path')
// const chalk = require('chalk')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
    // const PrerenderSPAPlugin = require('prerender-spa-plugin')

// // 是否使用预渲染
// const productionPrerender = true
// // 需要预渲染的路由
// const prerenderRoutes = ['/', '/contacts']

// 是否使用gzip
const productionGzip = true
    // 需要gzip压缩的文件后缀
const productionGzipExtensions = ['js', 'css']


module.exports = {
    /**
     * baseUrl vue-cli3.3 版本已废弃
     * process.env.NODE_ENV值 为production(线上生产环境)或development(开发环境)，
     * 可通过这个改变路径
     */
    // baseUrl: '/', //开发环境
    // baseUrl: '/dist', //线上环境
    publicPath: process.env.NODE_ENV === 'production' ? '/dist' : '/',
    /**
     * 经过一顿搜索，发现js的map文件.原来map文件只是帮助我们调试用的，
     * 毕竟打包后的代码都是压缩的，调试起来很不方便。测试没问题，正式上线时，我们完全可以去掉这个文件
     * @value  为false打包时不生成 .map文件减少打包大小
     */
    productionSourceMap: false,
    configureWebpack: config => {
        const myConfig = {
            performance: {
                hints: false
            }
        }
        if (process.env.NODE_ENV === 'production') {
            myConfig.plugins = []

            // 构建时开启gzip，降低服务器压缩对CPU资源的占用，服务器也要相应开启gzip
            productionGzip && myConfig.plugins.push(
                new CompressionWebpackPlugin({
                    test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                    threshold: 8192,
                    minRatio: 0.8,
                    deleteOriginalAssets: false //不删除源文件
                })
            )
        }
        return myConfig
    },

    chainWebpack: config => {
        /**
         * 删除懒加载模块的prefetch，降低带宽压力
         * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
         * 而且预渲染时生成的prefetch标签是modern版本的，低版本浏览器是不需要的
         */
        config.plugins.delete('prefetch')
    },
    devServer: {
        proxy: {
            "/api": {
                "target": "http://39.108.70.180",
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

// .env.development
VUE_APP_BASE_API = '/api'