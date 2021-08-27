<template>
  <!-- 歌单广场->精品歌单 -->

  <van-list
    offset="300"
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <div class="van-clearfix">
      <div class="list">
        <SongListCover
          v-for="item in topList"
          :picUrl="item.coverImgUrl"
          :key="item.id"
          :Song="item"
        />
      </div>
    </div>
  </van-list>
</template>

<script>
import { ref, onMounted } from 'vue'
import { playlistTopHighqualityAPI } from '@/Api/playList.js'
// import PlaylistModel from './playlistModel.vue'

// 精品歌单
const useTopList = () => {
  const topList = ref([])
  const total = ref(0)
  const finished = ref(false)
  const loading = ref(true)
  const onLoad = () => {
    console.log(loading.value)
    getTopList()
  }
  const params = {
    limit: 30,
    before: null
  }
  const getTopList = async () => {
    console.log('进入事件')
    if (finished.value) return
    // if (loading.value) return
    const res = await playlistTopHighqualityAPI(params)
    if (res.code === 200) {
      console.log('精品歌单', res)
      topList.value.push(...res.playlists)
      total.value = res.total
      loading.value = false
      if (res.playlists[res.playlists.length - 1].updateTime && res.more) {
        params.before = res.playlists[res.playlists.length - 1].updateTime
      } else {
        finished.value = true
      }
    }

    // console.log(params.before)
  }
  onMounted(() => {
    getTopList()
    params.before = null
  })
  return { topList, total, loading, finished, onLoad }
}
export default {
  // components: {
  //   PlaylistModel
  // },
  setup () {
    const { topList, total, loading, finished, onLoad } = useTopList()
    return { topList, total, loading, finished, onLoad }
  }
}
</script>

<style lang="less" scoped>
.list {
  padding: 10px 22px;
  vertical-align: middle;
  .item {
    margin-bottom: 10px;
  }
}
</style>
