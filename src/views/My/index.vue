<template>
  <div :style="{ background: '#f7f7f7' }">
    <MyHeader />
    <div class="contnet">
      <MyUserInfo />
      <MyLike />
      <MyPlayList />
    </div>
    <FooterNav />
  </div>
</template>

<script>
import MyHeader from './components/my-header.vue'
import MyPlayList from './components/my-PlayList.vue'
import MyUserInfo from './components/my-userInfo.vue'
import MyLike from './components/my-Like.vue'
export default {
  components: {
    MyHeader,
    MyPlayList,
    MyUserInfo,
    MyLike
  },
  setup () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.contnet {
  padding: 0 20px;
  padding-bottom: 50px;
}
</style>
