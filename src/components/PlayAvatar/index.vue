<template>
  <div
    class="cover widthsmall discAnimation"
    :class="{ widthsmall: type === 'smail', widthBig: type === 'big' }"
  >
    <img class="fm" src="@/assets/MusicDetailCard/cover.jpg" alt="" />
    <img class="bg" src="@/assets/MusicDetailCard/disc.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'PlayAvatar',
  props: {
    type: {
      type: String,
      default: 'small'
    }
  }
}
</script>

<style lang="less" scoped>
.cover {
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  .bg {
    position: absolute;
    max-width: 100%;
    max-height: 100%;
  }
  .fm {
    z-index: -1;
    position: absolute;
    max-width: 100%;
    max-height: 100%;
  }
}
.widthsmall {
  width: 50px;
  height: 50px;
}
.widthBig {
  width: 290px;
  height: 290px;
}
// 旋转
@keyframes disc {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.discAnimation {
  /* infinite动画无限循环 */
  animation: disc 25s linear infinite;
  /* 动画延迟一秒 */
  // animation-delay: 0.8s;
}
</style>
