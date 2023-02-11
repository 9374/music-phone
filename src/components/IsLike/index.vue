<!--
 * @description: 喜欢歌曲按钮
 * @fileName: index.vue
 * @author: HanXiaoHui
 * @date: 2023-02-11 18:28:20
 * @version: V1.0.0
!-->
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
