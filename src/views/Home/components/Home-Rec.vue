<template>
  <div class="rec">
    <div class="header">
      <p>{{ left }}</p>
      <span>{{ right }}<van-icon name="arrow" /></span>
    </div>
    <div class="body">
      <div class="box">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    left: {
      type: String,
      default: '推荐歌单'
    },
    right: {
      type: String,
      default: '更多'
    }
  },
  setup () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.rec {
  margin: 20px 0;
  height: 200px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  .header {
    padding: 10px 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 17px;
      font-weight: 600;
    }
    span {
      font-size: 13px;
      padding: 3px 7px;
      border-radius: 30px;
      border: 1px solid black;
    }
  }
  .body {
    height: 350px;
    overflow: scroll;
    .box {
      display: block;
      padding: 0 20px;
      width: 500px;
      .item {
        display: inline-block;
        border: 1px solid red;
        padding: 0 10px;
        height: 70px;
        width: 60px;
        background-color: #ccc;
      }
    }
  }
}
</style>
