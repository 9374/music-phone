import HeaderMenu from './Header/header-menu.vue'
import HeaderNav from './Header'
import HeaderSearch from './Header/hedaer-search.vue'
import FooterNav from './Footer'
import SongItem from './SongItem'
import ListItem from './ListItem'
import ListCard from './ListCard'

const arr = [HeaderMenu, HeaderNav, HeaderSearch, FooterNav, ListItem, SongItem, ListCard]
let len = arr.length

export default {
  install (app) {
    while (len--) {
      app.component(arr[len].name, arr[len])
    }
  }
}
