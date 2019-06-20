import Vue from 'vue';
import Router from 'vue-router';

// const home = r => require.ensure([], () => r(require('../page/home.vue')), 'home')
const home =  () => import (/* webpackChunkName: "home" */ '../components/HelloWorld.vue');


Vue.use(Router)

const router = new Router({
    routes: [{
            path: '*',
            redirect: '/Home'
        },
        {
            path: '/Home',
            meta: {
                requireAuth: true,
            },
            component: home
        },
    ]
})

export default router;