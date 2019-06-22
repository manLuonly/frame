import Vue from 'vue';
import Router from 'vue-router';

// const home = r => require.ensure([], () => r(require('../page/home.vue')), 'home')
const home = () =>
    import ( /* webpackChunkName: "home" */ '@/components/login');


Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/Home',
            meta: {
                requireAuth: true,
            },
            component: home
        },
        {
            path: '*',
            redirect: '/Home'
        },
    ]
})

export default router;