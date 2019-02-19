import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
import {
  getStore
} from '@/config/mUtils'

Vue.use(Vuex)

const state = {
  userInfo: JSON.parse(getStore('userInfo')) || null,
  token: getStore('token') || null,
  uid: getStore('uid') || null,
  info: null,
  isLogin: false,
  computedTime: 0, //倒计时
  search: null
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})