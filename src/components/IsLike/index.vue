<template>
  <div>
    <van-icon v-if="true" name="like" />
    <van-icon v-else name="like-o" />
  </div>
</template>

<script>
export default {
  name: 'IsLike'
}
</script>

<style lang="less" scoped>
.van-icon {
  font-size: 24px;
}
</style>
