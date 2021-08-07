<template>
  <div class="item">
    <div class="left">
      <van-image
        width="50"
        height="50"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
    </div>
    <div class="right">
      <p class="title">123123</p>
      <p class="info"><span>20首</span> <span>, by 税税谁</span></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ListDetail: {
      type: Object,
      default: () => ({})
    }
  },
  setup () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.item {
  display: flex;
  .left {
    margin: 10px 20px;
    .van-image {
      vertical-align: middle;
      overflow: hidden;
      border-radius: 10px;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
      font-size: 18px;
    }
    .info {
      font-size: 14px;
      color: #c8c8c8;
    }
  }
}
</style>
