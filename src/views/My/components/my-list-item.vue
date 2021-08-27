<template>
  <div class="item">
    <div class="left">
      <van-image :src="ListDetail.coverImgUrl + '?param=100y100'" />
    </div>
    <div class="right">
      <p class="title">{{ ListDetail.name }}</p>
      <p class="info">
        <span>{{ ListDetail.trackCount }}首</span>
        <span v-if="ListDetail.creator"
          >, by {{ ListDetail.creator.nickname }}</span
        >
      </p>
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
      width: 50px;
      height: 50px;
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
