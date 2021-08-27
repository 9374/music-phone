<template>
  <div>
    <div class="head">
      <div class="top">
        <Back to="/search" />
        <van-search
          v-model="value"
          :placeholder="$route.params.kw"
          shape="round"
          right-icon="close"
          @search="onSearch"
          @cancel="onCancel"
        >
        </van-search>
      </div>
    </div>
    <van-tabs v-model="active" swipeable animated>
      <van-tab title="综合"
        ><ResultAll :songs="allsongsResultList" :playlist="allPlayListResult"
      /></van-tab>
      <van-tab title="单曲"><ResultSong :songs="songsResultList" /></van-tab>
      <van-tab title="歌单"><ResultList :playlist="PlayListResult" /></van-tab>
    </van-tabs>
  </div>
  <PlayControl />
</template>

<script>
import ResultAll from './compontens/search-result-all.vue'
import ResultSong from './compontens/search-result-song.vue'
import ResultList from './compontens/search-result-list.vue'
import { searchAPI, searchMultimatchAPI } from '@/Api/search.js'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
const useSearchResult = (API) => {
  const route = useRoute()
  const store = useStore()
  const searchResultList = ref({})
  const songsResultList = ref({})
  const PlayListResult = ref({})
  const allsongsResultList = ref({})
  const allPlayListResult = ref({})

  onMounted(() => {
    API()
    // getResultList()
    store.commit('search/addSearchHistory', route.params.kw)
  })
  return { searchResultList, PlayListResult, songsResultList, allsongsResultList, allPlayListResult }
}
export default {
  components: {
    ResultAll,
    ResultSong,
    ResultList
  },
  setup () {
    const router = useRouter()
    const route = useRoute()
    const value = ref('')
    const active = ref(1)
    const getResultList = async () => {
      // 获取相关搜索结果
      const res = await searchMultimatchAPI(route.params.kw)
      console.log('可能感兴趣的搜索结果', res)
      searchResultList.value = res.result
      // 获取单曲搜索结果
      const res2 = await searchAPI(route.params.kw, '', 1)
      console.log('歌曲搜索结果', res2)
      songsResultList.value = res2.result
      // 单曲预览前五首
      allsongsResultList.value.songCount = songsResultList.value.songCount
      allsongsResultList.value.songs = songsResultList.value.songs.slice(0, 5)
      // 获取歌单搜索结果
      const res3 = await searchAPI(route.params.kw, '', 1000)
      console.log('歌单搜索结果', res3)
      PlayListResult.value = res3.result
      // 歌单预览前五个
      allPlayListResult.value.playlistCount = PlayListResult.value.playlistCount
      allPlayListResult.value.playlists = PlayListResult.value.playlists.slice(0, 5)
    }
    const onSearch = () => {
      router.replace(`/search/result/${value.value}`)
      getResultList()
    }
    const { allPlayListResult, allsongsResultList, searchResultList, PlayListResult, songsResultList } = useSearchResult(getResultList)
    const onCancel = () => {
      router.push('/')
    }
    return { allPlayListResult, allsongsResultList, searchResultList, songsResultList, PlayListResult, active, value, onSearch, onCancel }
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
