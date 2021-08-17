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
      state.coolie = payload
    }
  }
}
