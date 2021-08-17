<template>
  <div class="rec">
    <div class="header">
      <p>{{ left }}</p>
      <slot name="right" />
    </div>
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    left: {
      type: String,
      default: '推荐歌单'
    }
  },
  setup () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.rec {
  margin: 20px 0;
  // height: 200px;
  // padding: 0 10px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  .header {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 17px;
      font-weight: 600;
    }
  }
  .body {
    padding: 10px 0;
    overflow: scroll;
  }
}
</style>
