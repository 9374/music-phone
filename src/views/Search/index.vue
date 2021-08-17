<template>
  <div class="top">
    <van-search
      v-model="value"
      placeholder="搜索 歌手 歌曲"
      shape="round"
      input-align="center"
      action-text="取消"
      show-action
      @search="onSearch"
      @cancel="onCancel"
    />
  </div>
  <div class="main">
    <div class="content">
      <SearchHistory />
      <SearchHot />
    </div>
  </div>
  <PlayControl />
</template>

<script>
import SearchHot from './components/search-hot.vue'
import SearchHistory from './components/search-history.vue'
import { Toast } from 'vant'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  components: {
    SearchHot,
    SearchHistory
  },
  setup () {
    const router = useRouter()
    const value = ref('')
    const onSearch = (val) => {
      Toast(val)
    }

    const onCancel = () => {
      Toast('取消')
      router.push('/')
    }
    return {
      value,
      onSearch,
      onCancel
    }
  }
}
</script>

<style lang="less" scoped>
.top {
  height: 2.13333rem;
}
.content {
  background-color: #fff;
}
</style>
