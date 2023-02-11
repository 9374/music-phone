/*
 * @description:个人信息相关储存;
 * @fileName: user.js
 * @author: HanxiaoHui
 * @date: 2023-02-11 18:26:09
 * @version: V1.0.0
*/
import { loginStateAPI } from '@/Api/user.js'
export default {
  namespaced: true,

  state: () => ({
    profile: {},
    cookie: ''
  }),
  mutations: {
    updateProfile (state, payload) {
      state.profile = payload
    },
    updateCookie (state, payload) {
      state.cookie = payload
    }
  },
  actions: {
    async loginStateInfo ({ commit }) {
      const res = await loginStateAPI()
      console.log(res)
    }
  }

}
