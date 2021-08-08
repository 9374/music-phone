<template>
  <van-config-provider :theme-vars="themeVars">
    <van-tabs v-model:active="active" @click-tab="onClickTab">
      <van-tab title="创建歌单"></van-tab>
      <van-tab title="收藏歌单"></van-tab>
    </van-tabs>
  </van-config-provider>
  <MyList title="创建歌单" />
  <MyList title="收藏歌单" />
</template>

<script>
import { ref } from 'vue'
import MyList from './my-List.vue'
export default {
  components: {
    MyList
  },
  setup () {
    const active = ref(2)
    const themeVars = {
      tabsNavBackgroundColor: '#f7f7f7'
    }
    const onClickTab = () => {
      console.log('123')
    }
    return { active, themeVars, onClickTab }
  }
}
</script>

<style lang="less" scoped>
</style>
