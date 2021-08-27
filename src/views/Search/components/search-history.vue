<template>
  <div class="history">
    <span class="title">历史</span>
    <div class="tags">
      <div class="box">
        <span
          @click="$router.push('/search/result/' + item)"
          v-for="item in searchHistoryList"
          :key="item"
          class="tag"
          >{{ item }}</span
        >
      </div>
    </div>
    <div class="delete" @click="closeHistory">
      <van-icon name="delete-o" />
    </div>
  </div>
</template>

<script>
import { useStore, mapState } from 'vuex'
export default {
  name: 'SrarchHistory',
  computed: {
    ...mapState('search', ['searchHistoryList'])
  },
  setup () {
    const store = useStore()
    const closeHistory = () => {
      store.commit('search/closeSearchHistory')
    }
    return { closeHistory }
  }
}
</script>

<style lang="less" scoped>
.history {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  .title {
    width: 50px;
    display: block;
    font-size: 14px;
    font-weight: 600;
  }
  .tags {
    max-width: 280px;
    // height: 30px;
    // float: left;
    .box {
      height: 30px;
      min-width: 280px;
      overflow-x: scroll;
      overflow-y: hidden;
      white-space: nowrap;
      &::-webkit-scrollbar {
        display: none;
      }
      .tag {
        height: 30px;
        display: inline-block;
        font-size: 14px;
        background-color: #eee;
        padding: 5px 10px;
        border-radius: 15px;
        margin: 0px 10px;
      }
    }
  }
  .van-icon-delete-o {
    font-size: 22px;
  }
}
</style>
