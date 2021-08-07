<template>
  <div class="top">
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      input-align="center"
    />
  </div>
</template>

<script>
import { Toast } from 'vant'
import { ref } from 'vue'
export default {
  setup () {
    const value = ref('')
    const onSearch = (val) => Toast(val)
    const onCancel = () => Toast('取消')
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
</style>
