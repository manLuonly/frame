import Vue from 'vue';
import Router from 'vue-router';
/* webpackChunkName: "page" */
const Home = () =>
    import ( /* webpackChunkName: "page" */'@/pages/home/home.vue');
const Login = () =>
    import (  /* webpackChunkName: "page" */'@/pages/login/login.vue');
const notFound = () =>
    import ( /* webpackChunkName: "page" */ '@/pages/notFound.vue');


Vue.use(Router)


const router = new Router({
    base: '/',
    mode: 'history',
    routes: [

        {
            path: '/home',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            name: '404',
            path: '/404',
            component: notFound
        },
        {
            path: '*',    
            redirect: '/home'
        }
    ]
})

// router.beforeEach((to, from, next) => {

// })
export default router;