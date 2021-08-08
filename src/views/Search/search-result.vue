<template>
  <div>
    <div class="head">
      <div class="top">
        <van-icon name="arrow-left" @click="$router.push('/search')" />
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          shape="round"
          right-icon="close"
          @search="onSearch"
          @cancel="onCancel"
        >
        </van-search>
      </div>
    </div>
    <van-tabs v-model="active" animated>
      <van-tab title="综合"><ResultAll /></van-tab>
      <van-tab title="单曲"><ResultSong /></van-tab>
      <van-tab title="歌单"><ResultList /></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import ResultAll from './search-result-all.vue'
import ResultSong from './search-result-song.vue'
import ResultList from './/search-result-list.vue'
import { ref } from 'vue'
export default {
  components: {
    ResultAll,
    ResultSong,
    ResultList
  },
  setup () {
    const value = ref('')
    const active = ref(2)
    const onSearch = () => {
      console.log('2')
    }
    const onCancel = () => {
      console.log('2')
    }
    return { active, value, onSearch, onCancel }
  }
}
</script>

<style lang="less" scoped>
.head {
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .van-icon-arrow-left {
      margin: 0 10px;
    }
    .van-search {
      flex: 1;
    }
  }
}
</style>
