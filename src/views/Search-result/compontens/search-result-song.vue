<template>
  <div class="main">
    <div class="content bootom">
      <PlayAll />
      <SongItem v-for="item in songs.songs" :key="item.id" :song="item" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    songs: { type: Object, default: () => ({}) }
  }
}
</script>

<style lang="less" scoped>
.content {
  background-color: #fff;
  :deep(.SongItem) {
    margin: 0px;
  }
  margin-bottom: 10px;
}
.bootom {
  padding-bottom: 50px;
}
</style>
