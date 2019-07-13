let md5 = require('js-md5')
import fetch from '@/api/fetch.js'
/**
 * 全局方法
 */
let publicFn = () => {
    /**
     * 将md5加密方法挂在window上
     * @param 
     * @example _md5("lijiacheng")
     * @return {string} 加密后的字符串
     */
    window._md5 = md5

    /**
     * 将fetch api请求的方法挂在window上
     * @param url = '', data = {}, type = 'GET/POST', method = 'fetch'
     * @example  fetch('str', {}, 'GET')
     * @return promise
     */
    window._fetch = fetch
}

/**
 * 存放公共组件位置
 */
/**
 * 登录页的登录组件
 */
import login from './login/login'
/**
 * 登录页的忘记密码组件
 */
import forgetPassword from './forget-password/forget-password'


export default {
    install(Vue) {
        Vue.component('login', login)
        Vue.component('forget-password', forgetPassword)
        publicFn()
    },
}