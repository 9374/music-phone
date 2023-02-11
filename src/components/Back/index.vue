<!--
 * @description: 后退按钮;
 * @fileName: index.vue
 * @author: HanXiaoHui
 * @date: 2023-02-11 18:27:06
 * @version: V1.0.0
!-->
<template>
  <van-icon name="arrow-left" @click="back" />
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Back',
  props: {
    to: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const router = useRouter()
    const back = () => {
      if (props.to) {
        router.push(props.to)
      } else {
        router.back()
      }
    }
    return { back }
  }
}
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
  color: black;
  .van-icon-arrow-left {
    font-size: 30px;
  }
}
</style>
