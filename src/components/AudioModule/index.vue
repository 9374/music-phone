<!--
 * @description: 播放器
 * @fileName: index.vue
 * @author: HanXiaoHui
 * @date: 2023-02-11 18:26:56
 * @version: V1.0.0
!-->
<template>
  <div v-if="playstate.currentplayId">
    <audio
      @timeupdate="onupdate"
      @canplay="getDuration"
      @play="play"
      @pause="pause"
      @ended="end"
      :loop="playstate.isLoop"
      :src=src
      :autoplay="playstate.isPlaying"
    ></audio>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore, mapState } from 'vuex'
export default {
  name: 'AudioModule',
  setup () {
    const store = useStore()
    console.log(store.state.play.playstate.currentplayId)

    // const src = ` https://music.163.com/song/media/outer/url?id=${store.state.play.playstate.currentplayId}.mp3`
    const src = computed(() => {
      console.log(store)
      console.log(store.playstate)
      return ` https://music.163.com/song/media/outer/url?id=${store.state.play.playstate.currentplayId}.mp3`
    })
    function onupdate () {

    }
    onMounted(() => {
      console.log('1')
    })
    return { src, onupdate }
  },
  computed: {
    ...mapState('play', ['playstate'])
  }
}
</script>
