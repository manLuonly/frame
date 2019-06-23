// // 定host

// 开发环境（SAT）
// const SAT_HOST = 'http://localhost:8080';

// // 测试环境 (UAT)
// const UAT_HOST = '';

// 生产环境 (PRO) 上线后
// const PRO_HOST = '';

//开发环境
const ISHOST = false;
//线上坏境
const HOST_API = ISHOST ? '/' : '/api/';

const API_LOGIN = HOST_API + 'login'




export default {
    API_LOGIN
}


