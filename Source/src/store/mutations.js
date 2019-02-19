import {
  LOGOUT,
  LOGIN,
  GET_USERINFO,
  COMPUTEDTIME,
  SAVESEARCH
} from './mutation-types'

import {
  setStore,
  getStore,
  removeStore
} from '../config/mUtils'

export default {
  [LOGIN](state, info) {

    state.userInfo = info
    state.token = info.token
    state.uid = info.id

    setStore('token', info.token)
    setStore('uid', info.id)
    setStore('userInfo', info)

  },
  [LOGOUT](state) {

    state.isLogin = false
    state.userInfo = null
    state.uid = null
    state.token = null
    state.info = {
      sexual: "",
      birth: null,
      signature: "",
      account: 0,
      super_expired_days: 0,
      rank: {
        name: ""
      }
    }

    removeStore('userInfo')
    removeStore('token')
    removeStore('uid')

  },
  [GET_USERINFO](state, info) {

    if (info.id == undefined || info.id == "") {
      this.commit(LOGOUT)
    } else {

      state.isLogin = true
      state.userInfo.name = info.name
      state.userInfo.photo = info.photo
      state.info = info

      setStore('userInfo', state.userInfo)

    }
  },
  [COMPUTEDTIME](state, info) {
    state.computedTime = info
  },
  [SAVESEARCH](state, info) {
    state.search = info
  }
}