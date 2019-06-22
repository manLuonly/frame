import Vue from 'vue';
import Router from 'vue-router';

const home = () =>
    import ( /* webpackChunkName: "home" */ '@/page/home/home.vue');
const login = () =>
    import ( /* webpackChunkName: "login" */ '@/components/login');


Vue.use(Router)

// const router = new Router({
//     routes: [{
//             path: '/home',
//             meta: {
//                 requireAuth: true,
//             },
//             component: home
//         },
//         {
//             path: '/login',
//             component: login
//         },
//         {
//             path: '*',
//             redirect: '/home'
//         }
//     ]
// })

const router = new Router({
    routes: [

        {
            path: '/Home',
            component: home
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '*',
            redirect: '/Home'
        }
    ]
})

export default router;