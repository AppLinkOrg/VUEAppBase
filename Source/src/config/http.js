import axios from 'axios'
import {
  baseUrl
} from './env'


import {
  hex_md5
} from '@/plugins/md5-min'

let UNICODE="test";

let cancel, promiseArr = {}

const CancelToken = axios.CancelToken

axios.defaults.baseURL = baseUrl
axios.defaults.timeout = 100000
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
// axios.defaults.withCredentials = false


export default {
  //post请求
  post(url, param) {
    
    //param=querystring.parse(decodeURIComponent(param));
    var vp=[];
    for(let p in param){
      vp.push(p+"="+decodeURIComponent(param[p]));
    }
    param=vp.join("&");
    //alert(param);

    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
          'TOKEN':window.localStorage.getItem("UserToken"),
          'UNICODE': UNICODE
        },
        url,
        data: param,
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then((res) => {
        var requestresult={
          url,param,res,data:res.data
        };
        console.log(requestresult);
        resolve(res.data)
      }).catch((response) => {
        console.log('请求失败')
        var requestresult={
          status:'请求失败',
          url,param,response
        };
        console.log(requestresult);
        reject(response)
      });
    })
  }
}