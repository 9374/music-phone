<template>
  <div class="userInfo">
    <div class="user">
      <div class="avatar">
        <van-image
          round
          :src="
            profile.avatarUrl
              ? profile.avatarUrl + '?param200y200'
              : 'https://imgsa.baidu.com/forum/w%3D580/sign=cf0406cc95504fc2a25fb00dd5dce7f0/18d33c46f21fbe098b4949d065600c338644adfc.jpg'
          "
        />
      </div>
      <div class="info">
        <p v-if="profile.nickname">{{ profile.nickname }}</p>
        <p v-else @click="$router.push('/login')">
          立即登录 <van-icon name="arrow" />
        </p>
        <div v-if="cookie">
          <span>lv.10</span>
        </div>
      </div>
    </div>
    <div v-if="profile.nickname" class="iconright">
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('user', ['profile', 'cookie'])
  },
  setup () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.userInfo {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  // height: 250px;
  .user {
    display: flex;
    align-items: center;
    padding: 10px 0;
    .avatar {
      padding: 0 20px;
      .van-image {
        vertical-align: middle;
        border: 4px solid #fff;
        width: 50px;
        height: 50px;
      }
    }
    .info {
      font-weight: 700;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-size: 16px;
      span {
        font-weight: 400;
        font-size: 12px;
        background-color: #fff;
        border-radius: 30px;
        padding: 2px 10px;
      }
    }
  }
  .iconright {
    display: flex;
    align-items: center;
  }
}
</style>
