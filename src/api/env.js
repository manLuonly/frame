/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 * 
 */
let baseUrl = '';
let routerMode = 'hash';

if (process.env.NODE_ENV == 'development') {
    baseUrl = '/api/';
} else {
    baseUrl = '/'; // 线上地址
}

export {
    baseUrl,
    routerMode
}