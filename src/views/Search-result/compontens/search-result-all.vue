<template>
  <div class="main bootom">
    <div class="content all">
      <ListCard
        title="单曲"
        to="/"
        :footerText="
          songs.songCount
            ? `查看全部${songs.songCount}首单曲`
            : '查看全部0首单曲'
        "
      >
        <SongItem v-for="item in songs.songs" :key="item.id" :song="item" />
      </ListCard>
      <ListCard
        title="歌单"
        to="/"
        :footerText="
          playlist.playlistCount
            ? `查看全部${playlist.playlistCount}个歌单`
            : '查看全部0个歌单'
        "
      >
        <ListItem
          v-for="item in playlist.playlists"
          :key="item.id"
          :playListItem="item"
        />
      </ListCard>
      <div class="end"></div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    songs: { type: Object, default: () => ({}) },
    playlist: { type: Object, default: () => ({}) }
  }

}
</script>

<style lang="less" scoped>
.content {
  border: 1px solid transparent;
  margin-bottom: 10px;
}
.bootom {
  padding-bottom: 50px;
}
.main {
  background-color: #f8f8f8;
}
</style>
