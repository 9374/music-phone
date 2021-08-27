<template>
  <div class="top">
    <van-search
      v-model="value"
      :placeholder="searchDefault.showKeyword"
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
// import { Toast } from 'vant'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { mapState, useStore } from 'vuex'
export default {
  components: {
    SearchHot,
    SearchHistory
  },
  setup () {
    const router = useRouter()
    const store = useStore()
    const value = ref('')
    const onSearch = (val) => {
      if (value.value.length) {
        router.push(`/search/result/${val}`)
      } else {
        router.push(`/search/result/${store.state.search.searchDefault.realkeyword}`)
      }
    }
    const onCancel = () => {
      router.push('/')
    }
    return {
      value,
      onSearch,
      onCancel
    }
  },
  computed: {
    ...mapState('search', ['searchDefault'])
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
