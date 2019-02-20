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
axios.defaults.timeout = 10000
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
// axios.defaults.withCredentials = false


export default {
  //post请求
  post(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        headers: {
          'Content-Type': 'application/json;',
          'Accept': 'application/json',
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