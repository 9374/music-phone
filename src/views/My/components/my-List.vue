<template>
  <div class="box">
    <div class="header">
      <p class="title">{{ title }}(1)个</p>
    </div>
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '创建歌单'
    }
  },
  setup () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.box {
  margin-bottom: 20px;
  border-radius: 20px;
  background-color: #fff;
  .header {
    padding: 10px 20px 0 20px;
    .title {
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      color: #909090;
    }
  }
}
</style>
