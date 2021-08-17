<template>
  <div class="banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerList" :key="item.encodeId">
        <img class="bannerImg" :src="item.pic" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// import { BannerListAPI } from '@/Api/banner.js'
// import { ref, onMounted } from 'vue'
/* function useBannerList () {
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
} */
export default {
  name: 'Swipe',
  props: {
    bannerList: {
      type: Array,
      default: () => []
    }
  },
  setup () {

  }
}
</script>

<style lang="less" scoped>
.banner {
  margin: 20px 0;
  overflow: hidden;
  border-radius: 20px;
}
.my-swipe .van-swipe-item {
  // color: #fff;
  font-size: 20px;
  // line-height: 150px;
  text-align: center;
  // background-color: #39a9ed;
  width: 101%;
}
.bannerImg {
  width: 100%;
  vertical-align: middle;
}
</style>
