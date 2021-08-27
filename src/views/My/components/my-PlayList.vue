<template>
  <van-config-provider :theme-vars="themeVars">
    <van-tabs v-model:active="active" @click-tab="onClickTab">
      <van-tab title="创建歌单"></van-tab>
      <van-tab title="收藏歌单"></van-tab>
    </van-tabs>
  </van-config-provider>
  <MyList title="创建歌单">
    <MyListItem
      v-for="item in userCreatePlayList"
      :key="item.id"
      :ListDetail="item"
    />
  </MyList>
  <MyList title="收藏歌单">
    <MyListItem
      v-for="item in userCollectionPlayList"
      :key="item.id"
      :ListDetail="item"
    />
  </MyList>
</template>

<script>
import { ref, inject } from 'vue'
import MyList from './my-List.vue'
import MyListItem from './my-list-item.vue'
export default {
  components: {
    MyList,
    MyListItem
  },
  setup () {
    const userCreatePlayList = inject('userCreatePlayList')
    const userCollectionPlayList = inject('userCollectionPlayList')
    const active = ref(2)
    const themeVars = {
      tabsNavBackgroundColor: '#f7f7f7'
    }
    const onClickTab = () => {
      console.log('123')
    }
    return { active, themeVars, onClickTab, userCreatePlayList, userCollectionPlayList }
  }
}
</script>

<style lang="less" scoped>
</style>
