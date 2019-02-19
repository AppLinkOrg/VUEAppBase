import axios from 'axios'
import store from '../store'
import {
  baseUrl
} from './env'

import {
  removeStore
} from '@/config/mUtils'

import {
  hex_md5
} from '@/plugins/md5-min'


let cancel, promiseArr = {}

const CancelToken = axios.CancelToken

axios.defaults.baseURL = baseUrl
axios.defaults.timeout = 10000
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
// axios.defaults.withCredentials = false

//请求拦截
axios.interceptors.request.use(config => {

  //发起请求时，取消掉当前正在进行的相同请求
  if (promiseArr[config.url]) {
    promiseArr[config.url]('操作取消')
    promiseArr[config.url] = cancel
  } else {
    promiseArr[config.url] = cancel
  }

  let sign = ""
  let fmd5str = ""
  let MDSalt = ""
  let token = store.state.token
  let uid = store.state.uid

  if (token !== null && uid !== null) {

    let poststr = poststrFn(config.data)
    let md5str = config.baseURL + config.url + "~" + poststr + "~" + token + "~" + uid
    md5str = md5str.toUpperCase()

    fmd5str = md5str + MDSalt
    sign = hex_md5(md5str + MDSalt)

    config.headers.Sign = sign
    config.headers.Fmd5str = fmd5str
    config.headers.TokenKey = uid

  }

  config.data = paramUrlencoded(config.data)

  // console.log('config.data', config.data)
  return config
}, error => {
  return Promise.reject(error)
})

//响应拦截
axios.interceptors.response.use(response => {
  console.log(response.data)

  return response
}, error => {

  return Promise.resolve(error.response)
})

//处理数据格式
export const poststrFn = (postparam) => {

  var arr = []
  for (let i in postparam) {
    arr.push(i)
  }

  var sorrtedArray = arr.sort((n1, n2) => {
    return (n1 > n2) ? 1 : 0
  });

  var jsonarr = []
  for (let i of arr) {
    jsonarr[i] = postparam[i];
  }

  var poststrarr = []
  for (let i in jsonarr) {
    var str = jsonarr[i].toString();
    str = str.replace(/[\-|\~|\_|\.|\!|\~|\*|\'|\(|\)]/g, "");
    str = encodeURIComponent(str);
    poststrarr.push(i + "=" + str);
  }
  return poststrarr.join("&");

}

export const paramUrlencoded = (json) => {
  var arr = []
  for (let i in json) {
    arr.push(i + "=" + encodeURIComponent(json[i]))
  }
  return arr.join("&")
}

export default {
  //get请求
  get(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        headers: {
          'Content-Type': 'application/json;',
          'Accept': 'application/json'
        },
        params: param,
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        resolve(res.data)
      })
    })
  },
  //post请求
  post(url, param) {

    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          // 'headers': poststrFn(param)
        },
        url,
        data: param,
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        resolve(res.data)
      })
    })
  }
}