// // 定host

// // 开发环境（SAT）
// const SAT_HOST = 'http://localhost:8080'

// // 测试环境 (UAT)
// const UAT_HOST = ''

// // 生产环境 (PRO) 上线后
// const PRO_HOST = ''






// export default {
   
// }

import axios from 'axios'
import router from '@/router'

window.Promise = Promise

// axios 配置
//正式环境：0， 测试环境：1
let test_env = 0;
// axios 配置
axios.defaults.timeout = 100000;
if (test_env === 1) {
    // 测试环境
    axios.defaults.baseURL = '';
} else {
    // 正式环境
    axios.defaults.baseURL = ''; //sever1
}
// http request 拦截器
axios.interceptors.request.use(
    config => {
        // if (localStorage.token) {
        //   config.headers.Authorization = `token ${localStorage.token}`;
        // }
        config.headers['X-Token'] = `fd971b3eef2d460083b12dfdc077ff5f0`;
        return config;
    },
    err => {
        return Promise.reject(err);
    });


// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    localStorage.removeItem('token')
                    localStorage.removeItem('username')
                        // router.replace({
                        //   path: '/login',
                        //   query: {redirect: router.currentRoute.fullPath}
                        // })
            }
        }
        if (error.response) {
            return Promise.reject(error.response.data) // 返回接口返回的错误信息
        } else {
            return Promise.reject(error)
        }
    });


export default axios;
