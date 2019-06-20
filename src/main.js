import Vue from 'vue'
import App from './App.vue'
import './router'
import store from './store'
/**
 * 挂载公共组件
 */
import commonComponents from '@/components'
import axios from 'axios'
import VueAxios from 'vue-axios'
console.log(commonComponents)

import './ui/element-ui.js'

Vue.use(VueAxios, axios);
Vue.use(commonComponents);
Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')