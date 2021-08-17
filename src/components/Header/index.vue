<template>
  <div class="box">
    <div class="top">
      <HeaderMenu />
      <HeaderSearch />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderNav',
  setup () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.box {
  height: 50px;
  width: 375px;
  .top {
    background-color: #f8f8f8;
    box-sizing: border-box;
    width: 375px;
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }
}
</style>
