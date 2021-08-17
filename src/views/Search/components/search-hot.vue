<template>
  <div class="head">
    <div class="title">热搜榜</div>
    <span class=""><van-icon name="play" />播放</span>
  </div>
  <div class="body">
    <van-row>
      <van-col v-for="(item, i) in searchHotList" :key="i" span="12">
        <div
          @click="fastSearch(item.searchWord)"
          class="hotItem"
          :class="i + 1 <= 3 ? 'hot' : ''"
        >
          <span class="index">{{ i + 1 }}</span>
          <span class="name" :class="{ subTen: i < 9 }">{{
            item.searchWord
          }}</span>
          <span class="icon">
            <img v-if="item.iconUrl" :src="item.iconUrl" alt=""
          /></span>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { searchHotAPI } from '@/Api/search.js'
// 获取热搜列表
const useGetSearchHotList = () => {
  const searchHotList = ref([])
  const getSearchhHotList = async () => {
    const res = await searchHotAPI()
    console.log('热搜榜', res)
    searchHotList.value = res.data
  }
  onMounted(() => {
    getSearchhHotList()
  })
  return { searchHotList }
}
export default {
  setup () {
    const router = useRouter()
    const fastSearch = (item) => {
      router.push('/search/result/' + item)
    }
    const { searchHotList } = useGetSearchHotList()
    return { fastSearch, searchHotList }
  }
}
</script>

<style lang="less" scoped>
.head {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  .title {
    font-size: 20px;
  }
  span {
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 3px 10px;
  }
}
.body {
  .van-col {
    margin-top: 10px;
  }
  .index {
    font-size: 14px;
    margin-right: 20px;
    color: #8c8c8c;
  }
  .name {
    font-size: 14px;
    color: #333;
  }
  .hotItem {
    display: flex;
    align-items: center;
    .icon {
      margin-left: 5px;
      height: 12px;
      img {
        vertical-align: top;
        max-height: 100%;
      }
    }
  }
}
.hot {
  .index {
    font-size: 18px;
    color: red;
  }
  .name {
    color: black;
  }
}
.subTen {
  padding-left: 8px;
}
</style>
