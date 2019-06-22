/**
 * axios  options
 */

import axios from 'axios'
import API from '../api'
// import router from '@/router'

// window.Promise = Promise

// // axios 配置
// //正式环境：0， 测试环境：1
// let test_env = 0;
// // axios 配置
// axios.defaults.timeout = 100000;
// if (test_env === 1) {
//     // 测试环境
//     axios.defaults.baseURL = '';
// } else {
//     // 正式环境
//     axios.defaults.baseURL = ''; //sever1
// }
// http request 拦截器
// axios.interceptors.request.use(
//     config => {
//         // if (localStorage.token) {
//         //   config.headers.Authorization = `token ${localStorage.token}`;
//         // }
//         config.headers['X-Token'] = `fd971b3eef2d460083b12dfdc077ff5f0`;
//         return config;
//     },
//     err => {
//         return Promise.reject(err);
//     });


// // http response 拦截器
// axios.interceptors.response.use(
//     response => {
//         return response;
//     },
//     error => {
//         if (error.response) {
//             switch (error.response.status) {
//                 case 401:
//                     // 返回 401 清除token信息并跳转到登录页面
//                     // localStorage.removeItem('token')
//                     // localStorage.removeItem('username')
//                         // router.replace({
//                         //   path: '/login',
//                         //   query: {redirect: router.currentRoute.fullPath}
//                         // })
//             }
//         }
//         if (error.response) {
//             return Promise.reject(error.response.data) // 返回接口返回的错误信息
//         } else {
//             return Promise.reject(error)
//         }
//     });

// 配置除 url， 数据， 请求方式 的其他参数
// export default axios;

export default function http({ url, data, method }) {
    let options = {
        url: url,
        method: method,
        baseURL: API.SAT_HOST,
        timeout: 100000,
        withCredentials: false
    }

    if (method == 'GET') {
        options.params = data
    }
    if (method == 'POST') {
        options.data = data
    }

    return axios(options)
}