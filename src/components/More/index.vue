<template>
  <router-link :to="to">
    <span>{{ title }}<van-icon name="arrow" /></span>
  </router-link>
</template>

<script>
export default {
  name: 'More',
  props: {
    to: {
      type: String,
      default: '/'
    },
    title: {
      type: String,
      default: '更多'
    }
  }
}
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
  color: black;
}
span {
  font-size: 12px;
  padding: 3px 0px 3px 5px;
  border-radius: 30px;
  border: 1px solid black;
}
</style>
