import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ('./public')
/**
 * 挂载公共组件
 */
import commonComponents from '@/components'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueAxios, axios);
Vue.use(commonComponents);
Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')