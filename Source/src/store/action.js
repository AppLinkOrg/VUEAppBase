import {
  getUser
} from '../service/getData'

import {
  GET_USERINFO,
  LOGOUT,
  COMPUTEDTIME
} from './mutation-types'

export default {
  async getUserInfo({
    commit,
    state
  }) {
    let res = await getUser({})
    commit(GET_USERINFO, res)
  },
  logOut({
    commit
  }) {
    commit(LOGOUT)
  },
  countDown({
    state,
    commit
  }) {
    let computedTime = 60
    this.timer = setInterval(() => {
      commit(COMPUTEDTIME, --computedTime)
      if (computedTime === 0) {
        clearInterval(this.timer)
      }
    }, 1000)
  }
}