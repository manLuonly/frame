// eslint-disable-next-line
import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const Home = () =>
    import( /* webpackChunkName: "page" */ '@/pages/home/home.vue');
const Login = () =>
    import( /* webpackChunkName: "page" */ '@/pages/login/login.vue');
const NotFound = () =>
    import( /* webpackChunkName: "page" */ '@/pages/notFound.vue');
const UserLayout = () =>
    import( /* webpackChunkName: "page" */ '@/components/userLayout');
const Waiting = () =>
    import( /* webpackChunkName: "page" */ '@/pages/waiting.vue');

Vue.use(Router)


const router = new Router({
    base: '/',
    mode: 'hash',
    routes: [
        {
            path: '/',
            redirect:'/home',
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            name: '404',
            path: '/404',
            component: NotFound
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})

router.beforeEach((to, from, next) => {
    NProgress.start();
    if (to.path == '/wait' && from.path == "/login") {
        // next();
        // setTimeout(() => {
        //     next({
        //         path: '/home'
        //     });
        // }, 3000)
    } else {
        next();
    }
})

router.afterEach((to, from) => {
    // 做一些额外处理，比如进度条的效果
    NProgress.done();
})
export default router;