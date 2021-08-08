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
  <div class="content">
    <div class="history">
      <span class="title">历史</span>
      <div class="tags">
        <div class="box">
          <span class="tag">我爱</span><span class="tag">我爱</span
          ><span class="tag">我爱</span><span class="tag">我爱</span
          ><span class="tag">我爱</span>
        </div>
      </div>
      <div class="delete">
        <van-icon name="delete-o" />
      </div>
    </div>
    <SearchHot />
  </div>
</template>

<script>
import SearchHot from './search-hot.vue'
import { Toast } from 'vant'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  components: {
    SearchHot
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
.history {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 30px;
  .title {
    width: 44px;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    margin-right: 10px;
  }
  .tags {
    height: 30px;
    overflow: hidden;
    float: left;
    .box {
      overflow: auto;
      white-space: nowrap;
      .tag {
        display: inline-block;
        font-size: 14px;
        background-color: #eee;
        padding: 5px 10px;
        border-radius: 15px;
        margin: 0px 10px;
      }
    }
  }
}
</style>
