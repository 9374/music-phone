<template>
  <van-button round @click="$router.push('/search')">
    <van-icon name="search" class="srearchIcon" />
    搜索歌曲 歌单 歌手
  </van-button>
</template>

<script>
export default {
  name: 'HeaderSearch',
  setup () {
    return {}
  }
}
</script>

<style lang="less" scoped>
button {
  flex: 1;
  position: relative;
  top: 0;
  left: 0;
  height: 30px;
  margin-left: 10px;
  background-color: rgb(235, 235, 235);
  font-size: 14px;
  color: #aaa;
  .srearchIcon {
    position: absolute;
    font-size: 20px;
    top: 4px;
    left: 20px;
  }
}
</style>
