<template>
  <div class="box">
    <div class="top">
      <HeaderMenu />
      <div class="userName">
        <span>123</span>
      </div>
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
.box {
  height: 50px;
  .top {
    // background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    width: 375px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 100;
    .userName {
      display: none;
    }
  }
  .show {
    background-color: #fff;
    .userName {
      color: black;
      display: block;
      flex: 1;
      text-align: center;
    }
  }
}
</style>
