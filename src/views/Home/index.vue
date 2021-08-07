<template >
  <div :style="{ background: '#f7f7f7' }">
    <HeaderNav />

    <div class="content">
      <HomeRoling />
      <HomeNav />
      <HomeRec> </HomeRec>
      <HomeRec left="雷达歌单" right="更多"> </HomeRec>
    </div>

    <FooterNav />
  </div>
</template>

<script>
import HomeNav from './components/Home-Nav.vue'
import HomeRoling from './components/home-rolling.vue'
import HomeRec from './components/Home-Rec.vue'
export default {
  components: {
    HomeRoling,
    HomeNav,
    HomeRec
  },
  setup () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.content {
  padding: 0 20px;
  padding-bottom: 50px;
}
</style>
