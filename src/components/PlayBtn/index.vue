<template>
  <div @click.stop="playing">
    <van-icon v-if="playstate.isPlaying" name="play-circle-o" />
    <van-icon v-else name="pause-circle-o" />
  </div>
</template>

<script>
import { mapState, useStore } from 'vuex'

export default {
  name: 'PlayBtn',
  setup () {
    const store = useStore()
    const playing = () => {
      store.commit('play/changePlaying', !store.state.play.playstate.isPlaying)
    }
    return { playing }
  },
  computed: {
    ...mapState('play', ['playstate'])
  }
}
</script>

<style lang="less" scoped>
.van-icon {
  font-size: 24px;
}
</style>
