<template >
  <div class="home">
    <HeaderNav />
    <div class="main">
      <div class="content">
        <!-- 轮播图 -->
        <HomeRoling/>
        <!--           v-if="homePageInfo.blocks"
          :bannerList="homePageInfo.blocks[0].extInfo.banners" -->
        <HomeNav />
        <!-- 推荐歌单 -->
        <HomeRec>
          <div class="box">
            <SongListCover
              :picUrl="item.picUrl"
              v-for="item in recomList"
              :key="item.id"
              :Song="item"
            />
          </div>
          <template #right>
            <More to="/playListSquare" />
          </template>
        </HomeRec>
        <!-- 雷达歌单 -->
        <HomeRec left="雷达歌单" v-if="homePageInfo.blocks&&false">
          <div class="box">
            <SongListCover
              v-for="item in homePageInfo.blocks[1].creatives"
              :key="item.creativeId"
              :id="item.creativeId"
              :picUrl="item.uiElement.image.imageUrl"
              :Song="item.uiElement"
              :playCount="item.resources[0].resourceExtInfo.playCount"
            />
          </div>
          <template #right>
            <More to="/playListSquare" />
          </template>
        </HomeRec>
        <!-- 新歌推荐 -->
        <HomeRec left="新歌">
          <template #right>
            <More />
          </template>
          <SongItem
            v-for="item in newSongList"
            :key="item.id"
            :song="item"
            isCover
          />
        </HomeRec>
      </div>
    </div>

    <PlayControl :isHome="true" />
    <FooterNav />
  </div>
</template>

<script>
import HomeNav from './components/Home-Nav.vue'
import HomeRoling from './components/home-rolling.vue'
import HomeRec from './components/Home-Rec.vue'
import { ref, onMounted } from 'vue'
import { personAlizedAPI } from '@/Api/playList.js'
import { newSongAPI } from '@/Api/song.js'
import { HomePageApi } from '@/Api/home.js'
const useRecomList = () => {
  const recomList = ref([])
  const getRecomList = async () => {
    const res = await personAlizedAPI(6)
    console.log('个性化歌单', res)
    recomList.value = res.result
  }
  onMounted(() => {
    getRecomList()
  })
  return { recomList }
}
const useNewSongList = () => {
  const newSongList = ref([])
  const getNewSongList = async () => {
    const res = await newSongAPI(3)
    console.log('首页推荐新音乐', res)
    newSongList.value = res.result
  }
  onMounted(() => {
    getNewSongList()
  })
  return { newSongList }
}
const useHomePage = () => {
  const homePageInfo = ref([])
  const getHomePageInfo = async () => {
    const res = await HomePageApi()
    console.log('首页数据', res)
    homePageInfo.value = res.data
  }
  onMounted(() => {
    getHomePageInfo()
  })
  return { homePageInfo }
}
export default {
  components: {
    HomeRoling,
    HomeNav,
    HomeRec
  },
  setup () {
    const { recomList } = useRecomList()
    const { newSongList } = useNewSongList()
    const { homePageInfo } = useHomePage()
    return { recomList, newSongList, homePageInfo }
  }
}
</script>

<style lang="less" scoped>
.home {
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  height: 100vh;
  .content {
    flex: 1;
    padding: 0 20px;
    padding-bottom: 50px;
    .box {
      width: 660px;
    }
  }
}
</style>
