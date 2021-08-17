<template>
  <div class="main">
    <div class="content bootom">
      <ListItem
        v-for="item in playlist.playlists"
        :key="item.id"
        :playListItem="item"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    playlist: { type: Object, default: () => ({}) }
  }
}
</script>

<style lang="less" scoped>
.content {
  padding: 0;
  background-color: #fff;
  margin-bottom: 10px;
}
.bootom {
  padding-bottom: 50px;
}
</style>
