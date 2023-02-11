<template>
  <!-- -->
  <van-popup v-model:show="show" position="bottom" :style="{ height: '100%' }">
    <div class="playDetail" :style="bgImg">
      <div class="head">
        <div class="hide" @click="changePlayDetail">
          <van-icon name="arrow-down" />
        </div>
        <div class="title">
          <div class="name">{{store.state.play.playstate.currentPlayInfo.name}}</div>
          <div class="singer">{{store.state.play.playstate.currentPlayInfo.ar[0].name}}</div>
        </div>
        <div class="share">
          <van-icon name="share-o" />
        </div>
      </div>
      <div class="detail">
        <div class="content">
          <div class="needle">
            <img src="@/assets/MusicDetailCard/needle.png" alt="" />
          </div>
          <div class="coverbox">
            <PlayAvatar type="big" />
          </div>
          <div class="lyric"></div>
        </div>
      </div>
      <div class="tab">
        <IsLike />
        <van-icon name="chat-o" />
      </div>
      <div class="footer">
        <div class="progress">
          <van-slider v-model="value" @change="onChange" />
        </div>
        <div class="control">
          <div class="loop"><van-icon name="replay" /></div>
          <div class="left"><van-icon name="arrow-left" /></div>
          <div class="play">
            <PlayBtn />
          </div>
          <div class="right"><van-icon name="arrow" /></div>
          <PlayListMenu />
        </div>
      </div>
    </div>
  </van-popup>
  <!--   :class="playstate.playDetail ? 'showdetail' : 'hidedetail'" -->
</template>

<script>
import { mapState, useStore } from 'vuex'
import { ref, watch, computed } from 'vue'
export default {
  name: 'PlayDetail',
  computed: {
    ...mapState('play', ['playstate'])
  },
  setup () {
    const value = ref(0)
    const store = useStore()
    const changePlayDetail = () => {
      store.commit('play/changePlayDetail', false)
    }
    const bgImg = computed(() => {
      // console.log(store.state.play.playsate.currentPlayInfo.name)
      // console.log(store.state.play.playsate.currentPlayInfo.al.picUrl)
      return { '--url': `url(${store.state.play.playstate.currentPlayInfo.al.picUrl}?param200y200)` }
    })
    const show = ref(false)

    // const visible = ref(false)
    watch(() => { return store.state.play.playstate.playDetail }, (newVal) => {
      console.log(newVal)
      show.value = newVal
      console.log('newVF=', newVal)
      // bgimg.value = { '--url': `url(${playDetailList.value.coverImgUrl}?param200y200)` }
    }, { immediate: true })
    const onChange = () => {

    }
    return { value, onChange, changePlayDetail, show, bgImg, store }
  }

}
</script>

<style lang="less" scoped>
.playDetail {
  overflow: hidden;
  background-color: #ccc;
  height: 100vh;
  width: 100%;
  z-index: 10000;
  position: absolute;
  top: 0;
  left: 0;
  // transition: all 0.5s ease;
  // transform: translateY(100vh);
  &:after {
    display: block;
    content: "";
    width: 110%;
    height: 110%;
    position: absolute;
    left: -20px; //椭圆左边隐藏10%，右边隐藏10%
    top: -40px;
    // border-radius: 0 0 50% 50%; //左上角，右上角，右下角，左下角
    background-position: center;
    background-image: var(--url);
    background-repeat: no-repeat;
    filter: blur(19px);
    background-size: cover;
    z-index: -1;
  }
  .head {
    height: 50px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .van-icon {
      font-size: 24px;
    }
    .title {
      text-align: center;
      .name {
        font-size: 18px;
      }
      .singer {
        font-size: 16px;
      }
    }
  }
  .detail {
    height: calc(100vh - 180px);
    .content {
      position: relative;
      background-color: transparent;
      .needle {
        position: absolute;
        z-index: 10;
        top: 20px;
        left: 50%;
        width: 130px;
        transition: all 1s;
        transform-origin: 5.3px 5.3px;
        img {
          max-width: 100%;
        }
      }
      .needleRotate {
        transform-origin: 5.3px 5.3px;
        transform: rotate(22deg);
      }
      .coverbox {
        top: 100px;
        left: 44px;
        // transform: translateX(-50%);
        position: absolute;
      }
    }
  }
  .tab {
    display: flex;
    justify-content: space-evenly;
  }
  .footer {
    position: fixed;
    padding: 20px;
    width: 100%;
    bottom: 0;
    left: 0;
    .control {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .van-icon {
        font-size: 24px;
      }
      :deep(.play .van-icon) {
        font-size: 44px;
      }
    }
  }
}
@keyframes fadein {
  0% {
    display: none;
    height: 0vh;
    transform: translateY(100vh);
  }
  100% {
    display: block;
    height: 100vh;
    transform: translateY(0);
  }
}
@keyframes fadeout {
  0% {
    display: block;
    height: 100vh;
    transform: translateY(0);
  }
  90% {
    transform: translateY(100vh);
    height: 0vh;
  }
  100% {
    display: none;
  }
}
.showdetail {
  animation: fadein 1s forwards;
}
.hidedetail {
  animation: fadeout 1s forwards;
}
.showbox {
  height: 0;
  overflow: hidden;
}
// .hide {
// }
</style>
