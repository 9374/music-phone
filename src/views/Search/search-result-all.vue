<template>
  <div class="content all">
    <ListCard title="歌曲">
      <SongItem />
      <SongItem />
      <SongItem />
      <SongItem />
    </ListCard>
    <ListCard title="歌单">
      <SongItem />
      <SongItem />
      <SongItem />
      <SongItem />
    </ListCard>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="less" scoped>
.content {
  border: 1px solid transparent;
  margin-bottom: 20px;
}
</style>
