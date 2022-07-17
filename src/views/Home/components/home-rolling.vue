<template>
  <div class="banner">
    <!-- :autoplay="3000" -->
    <van-swipe class="my-swipe"  indicator-color="white">
      <van-swipe-item v-for="item in bannerList" :key="item.bannerId">
        <img class="bannerImg" :src="item.pic" alt="" />
        <span class="typeTitle" :style="{backgroundColor:item.titleColor}" >{{item.typeTitle}}</span>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { BannerListAPI } from '@/Api/banner.js'
import { ref, onMounted } from 'vue'
function useBannerList () {
  const bannerList = ref([])
  const getBannerList = async () => {
    const res = await BannerListAPI({ type: 2 })
    console.log('轮播图数据', res)
    if (res.code === 200) {
      bannerList.value = res.banners.filter((item) => item.targetType === 1)
    }
  }
  onMounted(() => {
    getBannerList()
  })
  return { bannerList }
}
export default {
  name: 'Swipe',
  setup () {
    const { bannerList } = useBannerList()
    return { bannerList }
  }
}
</script>

<style lang="less" scoped>
.banner {
  margin: 20px 0;
  overflow: hidden;
  border-radius: 20px;
}
.van-swipe {
  width: 100%;
}
.my-swipe .van-swipe-item {
  // color: #fff;
  font-size: 20px;
  // line-height: 150px;
  text-align: center;
  // background-color: #39a9ed;
  width: 101%;
  position: relative;
}
.bannerImg {
  width: 100%;
  vertical-align: middle;
}
.typeTitle{
  position: absolute;
  font-size:12px;
  color: #fff;
  right: 4px;
  bottom: 2px;
  padding:2px 7px ;
  border-radius: 5px;
}
</style>
