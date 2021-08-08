<template>
  <div class="userInfo">
    <div class="user">
      <div class="avatar">
        <van-image
          round
          width="50px"
          height="50px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
      <div class="info">
        <p>12341234</p>
        <div>
          <span>lv.10</span>
        </div>
      </div>
    </div>
    <div class="iconright">
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script>
export default {
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
        border: 4px solid #fff;
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
