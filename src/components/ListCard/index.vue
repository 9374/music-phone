<template>
  <div class="card">
    <div class="head">
      <div class="title">{{ title }}</div>
      <span v-if="title === '歌曲'" class=""><van-icon name="play" />播放</span>
    </div>
    <div class="body">
      <slot> </slot>
    </div>
    <div class="footer">
      <p v-if="title === '歌曲'">查看全部39首歌曲<van-icon name="arrow" /></p>
      <p v-if="title === '歌单'">查看全部29个歌单</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListCard',
  props: {
    title: {
      type: String,
      default: '歌曲'
    }
  }
}
</script>

<style lang="less" scoped>
.card {
  border-radius: 20px;
  background-color: #fff;
  margin-top: 1px;
  .head {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    .title {
      font-size: 19px;
    }
    span {
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 20px;
      padding: 3px 10px;
    }
  }
  .footer {
    padding: 10px 0;
    border-top: 1px solid #ccc;
    text-align: center;
    p {
      color: #aaa;
      font-size: 14px;
    }
  }
}
</style>
