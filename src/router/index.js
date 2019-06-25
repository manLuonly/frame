import Vue from 'vue';
import Router from 'vue-router';

const Home = () =>
    import( /* webpackChunkName: "home" */ '@/pages/home/home.vue');
const Login = () =>
    import( /* webpackChunkName: "login" */ '@/components/login/login.vue');



Vue.use(Router)


const router = new Router({
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
            path: '*',
            redirect: '/home'
        }
    ]
})

// router.beforeEach((to, from, next) => {
    
// })
export default router;