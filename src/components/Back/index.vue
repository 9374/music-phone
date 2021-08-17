<template>
  <van-icon name="arrow-left" @click="$router.back()" />
</template>

<script>
export default {
  name: 'Back',
  setup () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.van-icon-arrow-left {
  font-size: 24px;
}
</style>
