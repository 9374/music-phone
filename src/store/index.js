import { createStore } from 'vuex'
import user from './modules/user.js'
import play from './modules/play.js'
import search from './modules/search.js'
import createPersistedState from 'vuex-persistedstate'
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    play,
    search
  },
  plugins: [
    createPersistedState({
      key: 'music-phone',
      paths: ['user', 'play']
    })]
})
