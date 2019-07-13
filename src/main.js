import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/**
 * 挂载公共组件 及全局方法
 */
import commonComponents from '@/components'
Vue.use(commonComponents);

import './ui/antd-vue-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')