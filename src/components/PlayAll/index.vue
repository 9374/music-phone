<template>
  <div class="playBtn">
    <van-icon name="play-circle-o" /><span>播放全部</span>
  </div>
</template>

<script>
export default {
  name: 'PlayAll',
  setup () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.playBtn {
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  padding: 10px 0;
  font-size: 20px;
  span {
    font-size: 16px;
  }
  .van-icon-play-circle-o {
    margin-right: 10px;
    overflow: hidden;
    border-radius: 50%;
    color: #fff;
    background-color: red;
  }
}
</style>
