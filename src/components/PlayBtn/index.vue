<template>
  <div>
    <van-icon v-if="true" name="play-circle-o" />
    <van-icon v-else name="pause-circle-o" />
  </div>
</template>

<script>
export default {
  name: 'PlayBtn'
}
</script>

<style lang="less" scoped>
.van-icon {
  font-size: 24px;
}
</style>
