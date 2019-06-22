/**
 * 存放公共组件位置
 */

import login from './login'


export default {
    install(Vue) {
        Vue.component('login', login)
      

    }
}