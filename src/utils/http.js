// 配置除 url， 数据， 请求方式 的其他参数

import axios from 'axios'
import API from '../api'

export default function http({url, data, method}) {
    let options = {
        url:url,
        method:method,
        baseURL:API.SAT_HOST,
        timeout:3000,
        withCredentials:false
    }

    if(method == 'GET') {
        options.params = data
    }
    if(method == 'POST') {
        options.data = data
    }

    return axios(options)
}
