<template>
  <div class="nav">
    <div class="box">
      <ul>
        <li>每日推荐</li>
        <li>私人FM</li>
        <li>歌单</li>
        <li>排行榜</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  setup () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.nav {
  line-height: 80px;
  height: 80px;
  margin: 20px 0;
  border-radius: 20px;
  background-color: #fff;
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
