<template>
  <!-- 歌单广场=>推荐歌单 -->
  <PlaylistModel title="你的专属歌单">
    <SongListCover
      :picUrl="item.picUrl"
      v-for="item in recommList"
      :key="item.id"
      :Song="item"
    />
  </PlaylistModel>
</template>

<script>
import { ref, onMounted } from 'vue'
import { personAlizedAPI } from '@/Api/playList.js'
import PlaylistModel from './playlistModel.vue'
const useRecommList = () => {
  const recommList = ref([])
  const getRecommList = async () => {
    const res = await personAlizedAPI(30)
    console.log('专属歌单', res)
    recommList.value = res.result
  }

  onMounted(() => {
    getRecommList()
  })
  return { recommList }
}
export default {
  name: 'Recommended',
  components: {
    PlaylistModel
  },
  setup () {
    const { recommList } = useRecommList()
    return { recommList }
  }

}
</script>
<style lang="less" scoped>
.item {
  margin-bottom: 10px;
}
</style>
