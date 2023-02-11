<!--
 * @description: 歌单详情具体内容
 * @fileName: index.vue
 * @author: HanXiaoHui
 * @date: 2023-02-11 18:22:54
 * @version: V1.0.0
!-->
<template>
  <div class="head" :style="bgimg">
    <Back />
    <span class="title">歌单</span>
  </div>
  <div
    class="main"
    :class="playstate.currentplayId ? 'detailPlay' : 'detailNoPlay '"
  >
    <div class="top">
      <div class="bg" :style="bgimg"></div>
      <div class="list-head">
        <div class="banner">
          <div class="left">
            <div class="pic">
              <van-image
                fit="cover"
                :src="playDetailList.coverImgUrl + '?param200y200'"
              />
            </div>
          </div>
          <div class="right">
            <div class="name">
              {{ playDetailList.name }}
            </div>
            <div class="user" v-if="playDetailList.creator">
              <div class="avatar">
                <van-image
                  round
                  :src="playDetailList.creator.avatarUrl + '?param50y50'"
                />
              </div>
              <span>{{ playDetailList.creator.nickname }}</span>
            </div>
            <div class="info">
              {{ playDetailList.description }}
            </div>
          </div>
          <div class="nav">
            <div class="collection allflex">
              <van-icon name="add-o" />
              <span>{{ formatNumber(playDetailList.subscribedCount) }}</span>
            </div>
            |
            <div class="comment allflex">
              <van-icon name="comment-o" />
              <span>{{ formatNumber(playDetailList.commentCount) }}</span>
            </div>
            |
            <div class="share allflex">
              <van-icon name="share-o" />
              <span>{{ formatNumber(playDetailList.shareCount) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list">
      <PlayAll  @palyListAll="palyListAll"/>
      <!-- <PlayAll /> -->
      <div class="listItem" v-for="(item, i) in SongsList" :key="item.id">
        <span class="index">{{ i + 1 }}</span>
        <SongItem :song="item" />
      </div>
    </div>
  </div>
  <PlayControl />
</template>

<script>
import { ref, onMounted } from 'vue'
import { mapState, useStore } from 'vuex'
import { songDetailAPI } from '@/Api/song.js'
import { playDetailAPI } from '@/Api/playList.js'
import { useRoute } from 'vue-router'
import { formatNumber } from '@/utils/index.js'
const usePlayDetail = () => {
  const route = useRoute()
  const playDetailList = ref({})
  const SongsList = ref([])
  const bgimg = ref({})
  const getPlayDetailList = async () => {
    const res = await playDetailAPI(route.params.id)
    console.log('歌单详情', res)
    playDetailList.value = res.playlist
    getSongsList()
    bgimg.value = { '--url': `url(${playDetailList.value.coverImgUrl}?param200y200)` }
  }

  // 获取歌曲列表
  const getSongsList = async () => {
    const arr = ref([])
    playDetailList.value.trackIds.forEach(item => arr.value.push(item.id))
    const str = arr.value.join(',')
    const res = await songDetailAPI(str)
    console.log('歌单内全部歌曲', res)
    SongsList.value = res.songs
  }
  onMounted(() => {
    getPlayDetailList()
  })
  return { playDetailList, bgimg, SongsList }
}
export default {
  setup () {
    const store = useStore()
    function palyListAll () {
      console.log('触发播放全部')
      // console.log(store)
      console.log(SongsList.value[0])
      store.commit('play/changeCurrentPlayId', SongsList.value[0])
      store.commit('play/changePlayList', SongsList.value)
    }
    const { bgimg, playDetailList, SongsList } = usePlayDetail()
    return { playDetailList, formatNumber, bgimg, SongsList, palyListAll }
  },
  computed: {
    ...mapState('play', ['playstate'])
  }
}
</script>

<style lang="less" scoped>
.head {
  padding: 0 20px;
  height: 50px;
  // background-color: rgba(255, 255, 255, 0.2);
  background-color: #ccc;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  overflow: hidden;
  .title {
    flex: 1;
    text-align: center;
    font-size: 20px;
  }
  &:after {
    display: block;
    content: "";
    width: 200%;
    height: 300px;
    position: absolute;
    left: -52%;
    //椭圆左边隐藏10%，右边隐藏10%
    top: -50px;
    background-position: top;
    background-image: var(--url);
    background-position: center;
    filter: blur(20px);
    // filter: opacity(50%);
    // opacity: 1; //透明度设置
    z-index: -1;
  }
}
.main {
  .top {
    overflow-x: hidden;
    height: 250px;
    position: relative;
    .bg {
      background-color: #ccc;
      overflow-x: hidden;
      height: 200px;
      width: 200%;
      position: relative;
      border-radius: 0 0 50% 50%; //左上角，右上角，右下角，左下角
      transform: translateX(-26%);
      left: 0;
      top: 0;
      &:after {
        display: block;
        content: "";
        width: 200%;
        height: 200px;
        position: absolute;
        left: -50%; //椭圆左边隐藏10%，右边隐藏10%
        top: -5px;
        border-radius: 0 0 50% 50%; //左上角，右上角，右下角，左下角
        background-position: center;
        // background-image: url(https://img.yzcdn.cn/vant/cat.jpeg);
        background-image: var(--url);
        background-repeat: no-repeat;
        filter: blur(20px);
        //
        z-index: -1;
      }
    }
    .list-head {
      position: absolute;
      top: 50px;
      left: 0;
      height: 200px;
      width: 100%;
      // overflow: hidden;
      .banner {
        width: 100%;
        padding: 20px 20px 0 20px;
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        // padding-bottom: 40px;
        .left {
          margin-right: 20px;
          border-radius: 20px;
          overflow: hidden;
          .pic {
            .van-image {
              height: 100px;
              width: 100px;
              vertical-align: middle;
            }
          }
        }
        .right {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          flex: 1;
          .name {
            width: 200px;
            font-size: 18px;
            text-overflow: ellipsis;
            overflow: hidden;
            // white-space: nowrap;
            line-clamp: 2;
            -webkit-line-clamp: 2;
            display: -webkit-box;
            -webkit-box-orient: vertical;
          }
          .user {
            display: flex;
            font-size: 14px;
            .van-image {
              vertical-align: middle;
              width: 20px;
              height: 20px;
              margin-right: 10px;
            }
          }
          .info {
            width: 200px;
            font-size: 14px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }
        .nav {
          position: absolute;
          left: 50%;
          bottom: -43%;
          width: 250px;
          height: 35px;
          border-radius: 30px;
          background-color: rgba(255, 255, 255, 0.7);
          transform: translateX(-50%);
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          font-size: 14px;
          .van-icon {
            font-size: 20px;
            margin-right: 10px;
          }
          .allflex {
            align-items: center;
            display: flex;
          }
        }
      }
    }
  }
}

.list {
  padding: 0 20px;
  .listItem {
    display: flex;
    align-items: center;
    .index {
      font-size: 18px;
      color: #a3a3a3;
    }
  }
}
</style>
