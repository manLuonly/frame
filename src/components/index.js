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
     * @param   duration(默认自动关闭延时，单位秒){number} maxCount(最大显示数, 超过限制时，最早的消息会被自动关闭){number}  top(消息距离顶部的位置){string}
     * @example  _message(op).success(str)  _message(op).error(str)  _message(op).warning(str)
     * @return 
     */
    window._message = (duration, maxCount, top)=>{
      let message  = Vue.prototype.$message
      message.config({
        top,
        duration,
        maxCount,
      });
      return  message
    }

     /**
     * 抛出异常 方法
     * @param   ｛String｝
     * @example _error('xxx')
     * @return throw new error(xxx)
     */
    window._error = function (err){
      throw new Error(err)
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