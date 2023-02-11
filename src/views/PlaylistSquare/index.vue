<!--
 * @description: 歌单广场
 * @fileName: index.vue
 * @author: HanXiaoHui
 * @date: 2023-02-11 18:22:28
 * @version: V1.0.0
!-->
<template>
  <div>
    <div class="head">
      <Back to="/" />
      <div class="title">歌单广场</div>
      <div class="right"></div>
    </div>
    <div class="main" :class="playstate.currentplayId ? '' : 'detailPlay '">
      <van-tabs
        @change="onClickTab"
        sticky
        swipeable
        offset-top="1.333rem"
        v-model:active="active"
      >
        <van-tab
          v-for="item in playListCatlist"
          :key="item.id"
          :title="item.name"
          :name="item.name"
        >
          <Recommended v-if="item.name === '推荐'" />
          <TopList v-if="item.name === '精品'" />
          <PlaylistModel v-if="item.name !== '精品' && item.name !== '推荐'">
            <van-list
              offset="300"
              v-model:loading="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad(item.name)"
            >
              <div class="van-clearfix">
                <div class="list">
                  <SongListCover
                    v-for="item in CurrentHotList"
                    :picUrl="item.coverImgUrl"
                    :key="item.id"
                    :Song="item"
                  />
                </div>
              </div>
            </van-list>
          </PlaylistModel>
        </van-tab>
      </van-tabs>
    </div>
    <PlayControl />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TopList from './components/TopList.vue'
import PlaylistModel from './components/playlistModel.vue'
import Recommended from './components/Recommended'
import { ref, onMounted } from 'vue'
import { playlistHotAPI, playlistTopHighqualityAPI } from '@/Api/playList.js'
const usePlayListCatlist = () => {
  const playListCatlist = ref([{ id: 10, name: '推荐' }, { id: 11, name: '精品' }])
  const getPlayListCatlist = async () => {
    const res = await playlistHotAPI()
    console.log('分类数据', res)
    playListCatlist.value.push(...res.tags)
  }
  onMounted(() => {
    getPlayListCatlist()
  })
  return { playListCatlist }
}
export default {
  components: {
    PlaylistModel,
    Recommended,
    TopList
  },
  computed: {
    ...mapState('play', ['playstate'])
  },
  setup () {
    // 当前显示索引
    const active = ref(0)
    // 分类列表
    const { playListCatlist } = usePlayListCatlist()
    const finished = ref(false)
    const loading = ref(false)
    const total = ref(0)
    const params = ref({
      cat: null,
      before: null,
      limit: 30
    })
    const CurrentHotList = ref([])
    const getHotPlayList = async (params) => {
      const res = await playlistTopHighqualityAPI(params)
      loading.value = false
      console.log(params.cat, res)
      CurrentHotList.value.push(...res.playlists)
      total.value = res.total
      if (res.playlists[res.playlists.length - 1].updateTime && res.more) {
        params.before = res.playlists[res.playlists.length - 1].updateTime
      } else {
        finished.value = true
      }
    }
    const onLoad = (name) => {
      params.value.cat = name
      console.log(params.value)
      getHotPlayList(params.value)
    }
    // 切换列表
    const onClickTab = (name) => {
      if (name === '推荐' || name === '精品') return
      CurrentHotList.value = []
      params.value.before = null
      loading.value = false
      finished.value = false
      // params.value.cat = name
      // getHotPlayList(params)
    }
    return { playListCatlist, active, onClickTab, finished, loading, onLoad, CurrentHotList }
  }
}
</script>

<style lang="less" scoped>
:deep(body) {
  height: 100%;
}
.head {
  padding: 0 20px;
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  .right {
    width: 30px;
  }
}
</style>
