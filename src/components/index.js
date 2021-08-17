import HeaderMenu from './Header/header-menu.vue'
import HeaderNav from './Header'
import HeaderSearch from './Header/hedaer-search.vue'
import FooterNav from './Footer'
import SongItem from './SongItem'
import ListItem from './ListItem'
import ListCard from './ListCard'
import Back from './Back'
import PlayAll from './PlayAll'
import PlayListMenu from './PlayListMenu'
import PlayControl from './PlayControl'
import PlayAvatar from './PlayAvatar'
import PlayBtn from './PlayBtn'
import PlayDetail from './PlayDetail'
import IsLike from './IsLike'
import Swipe from './Swipe'
import SongListCover from './SongListCover/'
import AudioModule from './AudioModule'
import More from './More/'
const arr = [More, AudioModule, SongListCover, Swipe, IsLike, PlayDetail, PlayBtn, PlayAvatar, PlayControl, PlayListMenu, Back, HeaderMenu, PlayAll, HeaderNav, HeaderSearch, FooterNav, ListItem, SongItem, ListCard]
let len = arr.length
export default {
  install (app) {
    while (len--) {
      app.component(arr[len].name, arr[len])
    }
  }
}
