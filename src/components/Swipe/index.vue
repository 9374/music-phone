<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in BannerList" :key="item.encodeId">
        <img class="bannerImg" :src="item.pic" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { BannerListAPI } from '@/Api/banner.js'
import { ref, onMounted } from 'vue'
function useBannerList () {
  const BannerList = ref([])
  const getBannerList = async () => {
    const res = await BannerListAPI({ type: 2 })
    console.log('轮播图数据', res)
    BannerList.value = res.banners
  }
  onMounted(() => {
    getBannerList()
  })
  return { BannerList }
}
export default {
  name: 'Swipe',
  setup () {
    const { BannerList } = useBannerList()
    return { BannerList }
  }
}
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  // line-height: 150px;
  text-align: center;
  // background-color: #39a9ed;
}
.bannerImg {
  max-width: 100%;
}
</style>
