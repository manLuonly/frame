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

    }
}