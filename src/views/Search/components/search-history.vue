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
  justify-content: space-around;
  height: 30px;
  .title {
    width: 50px;
    display: block;
    font-size: 16px;
    font-weight: 600;
    // margin-right: 10px;
  }
  .tags {
    height: 30px;
    overflow: hidden;
    float: left;
    .box {
      min-width: 250px;
      overflow: auto;
      white-space: nowrap;
      &::-webkit-scrollbar {
        display: none;
      }
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
