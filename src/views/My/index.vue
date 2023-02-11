<!--
 * @description: 个人页面
 * @fileName: index.vue
 * @author: HanXiaoHui
 * @date: 2023-02-11 18:23:10
 * @version: V1.0.0
!-->
<template>
  <div :style="{ background: '#f7f7f7' }">
    <MyHeader />
    <div class="main">
      <div class="contnet">
        <MyUserInfo />
        <MyLike :likeList="userLikeList" />
        <MyPlayList />
      </div>
    </div>
    <PlayControl :isHome="true" />
    <FooterNav />
  </div>
</template>

<script>
import MyHeader from './components/my-header.vue'
import MyPlayList from './components/my-PlayList.vue'
import MyUserInfo from './components/my-userInfo.vue'
import MyLike from './components/my-Like.vue'
import { useStore } from 'vuex'
import { userPlaylistAPI } from '@/Api/user.js'
import { ref, onMounted, provide } from 'vue'
const useMyList = () => {
  const myList = ref([])
  const userCreatePlayList = ref([])
  const userCollectionPlayList = ref([])
  const userLikeList = ref([])
  const store = useStore()
  provide('userCreatePlayList', userCreatePlayList)
  provide('userCollectionPlayList', userCollectionPlayList)
  provide('userLikeList', userLikeList)
  const getMylist = async () => {
    const res = await userPlaylistAPI(store.state.user.profile.userId)
    console.log(res)
    myList.value = res.playlist
    userCreatePlayList.value = myList.value.filter(item => item.subscribed === false && item.specialType !== 5)
    userLikeList.value = myList.value.filter(item => item.subscribed === false && item.specialType === 5)
    userCollectionPlayList.value = myList.value.filter(item => item.subscribed === true)
  }
  onMounted(() => {
    if (store.state.user.cookie) {
      getMylist()
    }
  })
  return { myList, userCreatePlayList, userCollectionPlayList, userLikeList }
}
export default {
  components: {
    MyHeader,
    MyPlayList,
    MyUserInfo,
    MyLike
  },
  setup () {
    const { myList, userCreatePlayList, userCollectionPlayList, userLikeList } = useMyList()
    return { myList, userCreatePlayList, userCollectionPlayList, userLikeList }
  }

}
</script>

<style lang="less" scoped>
.contnet {
  padding: 0 20px;
  padding-bottom: 50px;
}
</style>
