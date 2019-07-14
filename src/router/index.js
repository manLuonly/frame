import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
/* webpackChunkName: "page" */
const Home = () =>
    import ( /* webpackChunkName: "page" */ '@/pages/home/home.vue');
const Login = () =>
    import ( /* webpackChunkName: "page" */ '@/components/login/login.vue');
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
            path: '/loginpage',
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
    next();
})

router.afterEach((to, from) => {
    // 做一些额外处理，比如进度条的效果
    NProgress.done();
})
export default router;