<template>
  <div class="top">
    <HeaderMenu />
    <HeaderSearch />
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
.top {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
</style>
