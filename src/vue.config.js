// vue.config.js
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://xxxx/device/', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            "/ajax": {
                "target": "http://m.maoyan.com",
                "changeOrigin": true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    }
}