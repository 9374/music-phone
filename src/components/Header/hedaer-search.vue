<!--
 * @description: 头部搜索
 * @fileName: hedaer-search.vue
 * @author: HanXiaoHui
 * @date: 2023-02-11 18:28:05
 * @version: V1.0.0
!-->
<template>
  <van-button round @click="$router.push('/search')">
    <van-icon name="search" class="srearchIcon" />

    {{ searchDefault.showKeyword }}
  </van-button>
</template>

<script>
import { onMounted } from 'vue'
import { searchDefault } from '@/Api/search.js'
import { mapState, useStore } from 'vuex'
export default {
  name: 'HeaderSearch',
  setup () {
    const store = useStore()
    const getSearchText = async () => {
      const res = await searchDefault()
      console.log('默认搜索词', res)
      store.commit('search/updateSearchDefault', res.data)
    }
    onMounted(() => {
      getSearchText()
    })
    return {}
  },
  computed: {
    ...mapState('search', ['searchDefault'])
  }
}
</script>

<style lang="less" scoped>
button {
  flex: 1;
  position: relative;
  top: 0;
  left: 0;
  height: 30px;
  margin-left: 10px;
  background-color: rgb(235, 235, 235);
  font-size: 14px;
  color: #aaa;
  .srearchIcon {
    position: absolute;
    font-size: 20px;
    top: 4px;
    left: 20px;
  }
}
</style>
