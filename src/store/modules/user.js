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
