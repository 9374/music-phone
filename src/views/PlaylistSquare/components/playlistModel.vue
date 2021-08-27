<template>
  <div class="list">
    <div class="head">
      <p>{{ title }}</p>
    </div>
    <div class="body">
      <div class="box">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaylistModel',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.list {
  padding: 0 20px;
  .head {
    font-size: 23px;
    margin: 10px 0;
  }
}
</style>
