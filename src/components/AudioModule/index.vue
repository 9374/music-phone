<template>
  <div v-if="playstate.currentplayId">
    <audio
      :src="` https://music.163.com/song/media/outer/url?id=${playstate.currentplayId}.mp3`"
    ></audio>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AudioModule',
  setup () {
    return {}
  },
  computed: {
    ...mapState('play', ['playstate'])
  }
}
</script>
