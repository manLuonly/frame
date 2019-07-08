import Vue from 'vue';
import Router from 'vue-router';
/* webpackChunkName: "home" */
const Home = () =>
    import ( '@/pages/home/home.vue');
const Login = () =>
    import (  '@/components/login/login.vue');
const notFound = () =>
    import (  '@/pages/notFound.vue');
 


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

// router.beforeEach((to, from, next) => {

// })
export default router;