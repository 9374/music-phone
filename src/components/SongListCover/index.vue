<template>
  <div
    class="item"
    @click="
      $router.push(
        Song.id ? `/playListDetail/${Song.id} ` : `/playListDetail/${id} `
      )
    "
  >
    <van-image :src="picUrl + '?param=200y200'">
      <!--         Song.picUrl
          ? Song.picUrl + '?param=200y200'
          : Song.image.imageUrl + '?param=200y200' -->
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
      <span class="playCount"
        ><van-icon name="play" />{{
          formatNumber(Song.playCount) || formatNumber(playCount)
        }}</span
      >
    </van-image>
    <p class="song_name">
      {{ Song.name || Song.mainTitle.title }}
    </p>
  </div>
</template>

<script>
import { formatNumber } from '@/utils/index.js'
export default {
  name: 'SongListCover',
  props: {
    Song: {
      type: Object,
      default: () => ({})
    },
    id: {
      type: String,
      default: '0'
    },
    playCount: {
      type: Number,
      default: 0
    },
    picUrl: {
      type: String,
      default: ''
    }
  },
  setup () {
    return { formatNumber }
  }
}
</script>

<style lang="less" scoped>
.item {
  width: 100px;
  // display: inline-block;
  margin: 0 5px;
  height: 138px;
  float: left;
  .van-image {
    position: relative;
    height: 100px;
    width: 100px;
    border-radius: 10px;
    overflow: hidden;
    max-width: 100%;
    .playCount {
      color: #fff;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      border-radius: 20px;
      position: absolute;
      top: 4px;
      right: 4px;
      padding: 2px 3px;
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
  .song_name {
    font-size: 12px;
    // padding: 0 20px;
    // padding-right: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    /* white-space: nowrap; */
    /* 控制显示2行超出显示省略号 */
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 行数 */
    -webkit-box-orient: vertical;
  }
}
</style>
