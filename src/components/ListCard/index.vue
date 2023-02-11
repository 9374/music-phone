<!--
 * @description: 播放列表每一个歌曲卡片;
 * @fileName: index.vue
 * @author: HanXiaoHui
 * @date: 2023-02-11 18:28:36
 * @version: V1.0.0
!-->
<template>
  <div class="card">
    <div class="head">
      <div class="title">{{ title }}</div>
      <span v-if="title === '歌曲'" class=""><van-icon name="play" />播放</span>
    </div>
    <div class="body">
      <slot> </slot>
    </div>
    <div class="footer">
      <router-link :to="to">
        <p>{{ footerText }}<van-icon name="arrow" /></p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListCard',
  props: {
    title: {
      type: String,
      default: '歌曲'
    },
    to: {
      type: String,
      default: '/'
    },
    footerText: {
      type: String,
      default: '查看全部'
    }
  }
}
</script>

<style lang="less" scoped>
.card {
  border-radius: 20px;
  background-color: #fff;
  margin-top: 1px;
  .head {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    .title {
      font-size: 19px;
    }
    span {
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 20px;
      padding: 3px 10px;
    }
  }
  .footer {
    padding: 10px 0;
    border-top: 1px solid #ccc;
    text-align: center;
    p {
      color: #aaa;
      font-size: 14px;
    }
  }
}
</style>
