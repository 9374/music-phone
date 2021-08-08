<template>
  <van-config-provider :theme-vars="themeVars">
    <van-tabbar route v-model="active">
      <van-tabbar-item to="/" icon="music-o">发现</van-tabbar-item>
      <van-tabbar-item to="/my" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </van-config-provider>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'FooterNav',
  setup () {
    const active = ref(0)
    const themeVars = {
      tabbarItemActiveColor: 'red'
    }
    return { active, themeVars }
  }
}
</script>

<style lang="less" scoped>
/deep/.van-tabbar {
  height: 50px;
}
</style>
