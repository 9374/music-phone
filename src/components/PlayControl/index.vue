<template>
  <div :class="isHome ? 'bottom' : 'nohome'" class="control">
    <div class="pic"><PlayAvatar /></div>
    <div class="info">
      <div class="box">
        <div class="name">过明天过后明天过后明天过</div>
        <span>-</span>
        <div class="singer">张杰</div>
      </div>
    </div>
    <div class="right">
      <PlayBtn />
      <PlayListMenu />
    </div>
  </div>
  <PlayDetail />
</template>

<script>
export default {
  name: 'PlayControl',
  props: {
    isHome: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.control {
  position: fixed;

  display: flex;
  height: 50px;
  background-color: #fff;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  .pic {
    position: absolute;
    left: 15px;
    top: -7px;
  }
  .info {
    overflow: hidden;
    flex: 1;
    padding-left: 80px;
    font-size: 14px;
    height: 50px;
    display: flex;
    align-items: center;
    .box {
      overflow: hidden;
      overflow-x: scroll;
      overflow-y: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: flex;
      align-items: center;
      .singer {
        font-size: 12px;
        color: #ccc;
      }
    }
  }
  .right {
    width: 80px;
    justify-content: space-around;
    display: flex;
    padding-right: 20px;
  }
}
.bottom {
  bottom: 50px;
}
.nohome {
  bottom: 0;
}
.hide {
  display: none;
}
</style>
