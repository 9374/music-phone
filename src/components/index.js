import HeaderMenu from './Header/header-menu.vue'
import HeaderNav from './Header'
import HeaderSearch from './Header/hedaer-search.vue'
import FooterNav from './Footer'

const arr = [HeaderMenu, HeaderNav, HeaderSearch, FooterNav]
let len = arr.length

export default {
  install (app) {
    while (len--) {
      app.component(arr[len].name, arr[len])
    }
  }
}
