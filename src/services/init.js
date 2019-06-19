import http from '../utils/http'
import API from '../api'

export  function fn({kw}) {

    return new Promise ((resolve, reject)=>{
         http({
             url:API.SEARCH_MOVIE_API,
             method:'GET',
             data: {
                 kw,
             }
         })
         // 请求到了数据，对数据进行处理
         .then(({data, status})=>{
             if(status == 200) {

                 resolve(data)
             }
         })
         .catch(()=>{
             alert('请求失败,请刷新')
             return 0;
         })
     })
 }
