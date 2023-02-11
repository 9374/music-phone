<!--
 * @description: 首页卡片
 * @fileName: index.vue
 * @author: HanXiaoHui
 * @date: 2023-02-11 18:28:58
 * @version: V1.0.0
!-->
<template>
  <div class="item" @click="$router.push('/playListDetail/' + playListItem.id)">
    <div class="left">
      <van-image :src="playListItem.coverImgUrl + '?param=100y100'" />
    </div>
    <div class="right">
      <p class="title">{{ playListItem.name }}</p>
      <p class="info" v-if="playListItem.creator">
        <span>{{ playListItem.trackCount }}首音乐</span>
        <span>, by {{ playListItem.creator.nickname }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    playListItem: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="less" scoped>
.item {
  display: flex;
  margin: 10px 0;
  padding: 0 20px;
  .left {
    margin-right: 20px;
    .van-image {
      vertical-align: middle;
      overflow: hidden;
      border-radius: 10px;
      width: 50px;
      height: 50px;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
      max-width: 240px;
      font-size: 18px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .info {
      font-size: 14px;
      color: #c8c8c8;
    }
  }
}
</style>
