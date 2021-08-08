<template>
  <div class="SongItem">
    <div class="info">
      <div class="name">STAY</div>
      <div class="singer">张杰</div>
    </div>
    <div class="icon"><van-icon name="weapp-nav" /></div>
  </div>
  <p></p>
</template>

<script>
export default {
  name: 'SongItem'

}
</script>

<style lang="less" scoped>
.SongItem {
  display: flex;
  margin: 0 20px;
  padding: 10px 0;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
  .info {
    .name {
      font-size: 16px;
      color: black;
    }
    .singer {
      font-size: 14px;
      color: #ccc;
    }
  }
  .icon {
    color: #ccc;
  }
}
</style>
