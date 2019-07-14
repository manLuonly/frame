let md5 = require('js-md5')
import fetch from '@/api/fetch.js'
/**
 * 全局方法
 */
let publicFn = (Vue) => {
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

     /**
     * 将消息提示 方法挂在window上
     * @param   一个String
     * @example  _message.success  _message.error  _message.warning
     * @return 
     */
    window._message = ()=>{
      let message  = Vue.prototype.$message

      return  message
    }
}

/**
 * 存放公共组件位置
 */


export default {
    install(Vue) {
        publicFn(Vue)
    },
}