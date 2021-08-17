<template>
  <div class="nav">
    <div class="box">
      <div class="menu" v-for="item in dragonBallList" :key="item.id">
        <div class="pic">
          <van-image fit="cover" :src="item.iconUrl" />
          <span v-if="item.id === -1" class="date">{{ currentDate }}</span>
        </div>
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { dragonBallAPI } from '@/Api/home.js'
import { ref, onMounted } from 'vue'
const useDragonBall = () => {
  const dragonBallList = ref([])
  const getDragonBallList = async () => {
    const res = await dragonBallAPI()
    console.log('菜单数据', res)
    dragonBallList.value = res.data.slice(0, 4)
  }
  onMounted(() => {
    getDragonBallList()
  })
  // 获取今天日期
  const currentDate = new Date().getDate()
  return { dragonBallList, currentDate }
}
export default {
  setup () {
    const { dragonBallList, currentDate } = useDragonBall()
    return { dragonBallList, currentDate }
  }
}
</script>

<style lang="less" scoped>
.nav {
  margin: 20px 0;
  border-radius: 20px;
  background-color: #fff;
  .box {
    padding: 10px 0;
    display: flex;
    justify-content: space-around;
    .menu {
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      display: flex;
      .pic {
        position: relative;
        background-color: rgba(241, 106, 106, 0.3);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        .date {
          font-size: 12px;
          position: absolute;
          top: 64%;
          left: 49%;
          transform: translate(-50%, -50%);
        }
      }
      span {
        height: 20px;
        font-size: 14px;
      }
    }
  }
}
</style>
