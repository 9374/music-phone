<template>
  <!-- 歌曲组件 -->
  <div class="SongItem">
    <div class="left">
      <div class="cover" v-if="isCover">
        <van-image fit="cover" :src="song.picUrl + '?param=100y100'" />
        <van-icon name="play" />
      </div>
      <div class="info">
        <div class="name">{{ song.name }}</div>
        <div class="singer" v-if="song.song">
          <span v-for="(item, i) in song.song.album.artists" :key="item.id">
            {{ i ? " / " : "" }}{{ item.name }}
          </span>
        </div>
        <div class="singer" v-if="song.artists">
          <span v-for="(item, i) in song.artists" :key="item.id">
            {{ i ? " / " : "" }}{{ item.name }}
          </span>
        </div>
        <div class="singer" v-if="song.ar">
          <span v-for="(item, i) in song.ar" :key="item.id">
            {{ i ? " / " : "" }}{{ item.name }}
          </span>
        </div>
      </div>
    </div>
    <div class="icon"><van-icon name="ellipsis" /></div>
  </div>
  <p></p>
</template>

<script>
//
export default {
  name: 'SongItem',
  props: {
    isCover: {
      type: Boolean,
      default: false
    },
    song: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="less" scoped>
.SongItem {
  flex: 1;
  display: flex;
  padding: 10px 0;
  margin: 0 20px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
  .left {
    max-width: 260px;
    display: flex;
    align-items: center;
    .cover {
      position: relative;
      .van-image {
        width: 50px;
        height: 50px;
        overflow: hidden;
        border-radius: 10px;
        vertical-align: middle;
      }
      .van-icon-play {
        font-size: 24px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: rgba(255, 255, 255, 0.7);
      }
      margin-right: 10px;
    }
    .info {
      .name {
        font-size: 16px;
        max-width: 220px;
        color: black;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .singer {
        font-size: 14px;
        color: #ccc;
      }
    }
  }
  .icon {
    font-size: 24px;
    color: #ccc;
  }
}
</style>
