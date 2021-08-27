<template>
  <div
    class="userLike"
    @click="$router.push(`/playListDetail/${item.id}`)"
    v-for="item in userLikeList"
    :key="item.id"
  >
    <div class="left">
      <div class="cover">
        <van-image :src="item.coverImgUrl + '?param=100y100'" />
      </div>
      <div class="info">
        <p>我喜欢的音乐</p>
        <div>
          <span>{{ item.trackCount }}首</span>
        </div>
      </div>
    </div>
    <div class="loveMoudle">
      <span><van-icon name="like-o" /> 心动模式</span>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  setup () {
    const userLikeList = inject('userLikeList')
    return { userLikeList }
  }
}
</script>

<style lang="less" scoped>
.userLike {
  margin: 20px 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  .left {
    display: flex;
    align-items: center;
    .cover {
      margin: 20px;
      .van-image {
        vertical-align: middle;
        overflow: hidden;
        border-radius: 10px;
        width: 50px;
        height: 50px;
      }
    }
    .info {
      p {
        font-size: 19px;
      }
      span {
        font-size: 14px;
        color: #ccc;
      }
    }
  }
  .loveMoudle {
    margin: 0 10px;
    display: flex;
    align-items: center;
    span {
      height: 25px;
      line-height: 25px;
      text-align: center;
      font-size: 14px;
      background-color: #fff;
      border-radius: 30px;
      border: 1px solid #ccc;
      padding: 0 7px;
    }
  }
}
</style>
