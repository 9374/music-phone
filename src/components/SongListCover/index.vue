<template>
  <div
    class="item"
    @click="
      $router.push(
        Song.id ? `/playListDetail/${Song.id} ` : `/playListDetail/${id} `
      )
    "
  >
    <van-image
      :src="
        Song.picUrl
          ? Song.picUrl + '?param=200y200'
          : Song.image.imageUrl + '?param=200y200'
      "
    >
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
    </van-image>
    <p class="song_name">
      {{ Song.name || Song.mainTitle.title }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'SongListCover',
  props: {
    Song: {
      type: Object,
      default: () => ({})
    },
    id: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="less" scoped>
.item {
  width: 100px;
  display: block;
  margin: 0 5px;
  height: 138px;
  float: left;
  .van-image {
    height: 100px;
    width: 100px;
    border-radius: 10px;
    overflow: hidden;
    max-width: 100%;
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
