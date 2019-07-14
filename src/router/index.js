import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { log } from 'util';
/* webpackChunkName: "page" */
const Home = () =>
    import ( /* webpackChunkName: "page" */ '@/pages/home/home.vue');
const Login = () =>
    import (  /* webpackChunkName: "page" */'@/pages/login/login.vue');
const notFound = () =>
    import ( /* webpackChunkName: "page" */ '@/pages/notFound.vue');


Vue.use(Router)


const router = new Router({
    base: '/',
    mode: 'hash',
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

router.beforeEach((to, from, next) => {
    NProgress.start();
    if(to.path == '/404' && from.path == "/login") {
        next();
        setTimeout(() => {
            next({
                path:'/home'
            });
        }, 3000)
    }else {
       next();
    }
})

router.afterEach((to, from) => {
    // 做一些额外处理，比如进度条的效果
    NProgress.done();
})
export default router;