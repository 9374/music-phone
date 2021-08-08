<template>
  <div class="head">
    <div class="title">热搜榜</div>
    <span class=""><van-icon name="play" />播放</span>
  </div>
  <div class="body">
    <ul>
      <van-row>
        <van-col v-for="(item, i) in 10" :key="i" span="12">
          <li @click="fastSearch(item)" :class="i + 1 <= 3 ? 'hot' : ''">
            <span class="index">{{ i + 1 }}</span>
            <span class="name">一首好歌</span>
          </li>
        </van-col>
      </van-row>
    </ul>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()
    const fastSearch = (item) => {
      router.push('/search/result/' + item)
    }
    return { fastSearch }
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
  .index {
    font-size: 16px;
    margin-right: 20px;
    color: #8c8c8c;
  }
  .name {
    color: #333;
    font-size: 16px;
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
</style>
