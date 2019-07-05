import { baseUrl } from './env'
/**
 * 引入 antd-vue的提示方法
 */
import Message from '@/ui/antd-vue-ui'


export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
    type = type.toUpperCase();
    url = baseUrl + url;
    // 规定get请求的参数使用时放在data中，如同post请求
    if (type == 'GET') {
        let dataStr = ''; //数据拼接字符串
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
        })

        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
        }
    }
    // // 对于支持fetch方法的浏览器，处理如下：
    if (window.fetch && method == 'fetch') {
        let requestConfig = {
            // // fetch默认不会带cookie，需要添加配置项credentials允许携带cookie
            credentials: 'include',
            method: type,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: "cors", // 以CORS的形式跨域
            cache: "force-cache"
        }

        if (type == 'POST') {
            Object.defineProperty(requestConfig, 'body', {
                value: JSON.stringify(data)
            })
        }

        try {
            const response = await fetch(url, requestConfig);
            const responseJson = await response.text();
            /**
             * 这里为 response.json()会报错 不知道是什么情况
             */
            // const responseJson = await response.json();
            
            /**
             * status 不是200 提示错误信息
             */
            if(response.status != 200 ) {
                Message.error(responseJson)
            }

            return responseJson
        } catch (error) {
            Message.error(error)
            throw new Error(error)
        }
    } else { // 对于不支持fetch的浏览器，便自动使用 ajax + promise
        return new Promise((resolve, reject) => {
            let requestObj;
            if (window.XMLHttpRequest) {
                requestObj = new XMLHttpRequest();
            } else {
                requestObj = new ActiveXObject; // 兼容IE
            }

            let sendData = '';
            if (type == 'POST') {
                sendData = JSON.stringify(data);
            }

            requestObj.open(type, url, true);
            requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            requestObj.send(sendData);

            requestObj.onreadystatechange = () => {
                if (requestObj.readyState == 4) {
                    if (requestObj.status == 200) {
                        let obj = requestObj.response
                        if (typeof obj !== 'object') {
                            obj = JSON.parse(obj);
                        }
                        resolve(obj)
                    } else {
                        reject(requestObj)
                    }
                }
            }
        })
    }
}