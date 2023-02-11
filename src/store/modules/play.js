/*
 * @description:播放相关储存;
 * @fileName: play.js
 * @author: HanxiaoHui
 * @date: 2023-02-11 18:25:35
 * @version: V1.0.0
*/
export default {
  namespaced: true,
  state: () => ({
    playstate: {
      // 当前播放歌曲id
      currentplayId: 0,
      // 当前播放歌曲详情
      currentPlayInfo: {},
      // 当前播放进度时间
      currentPlayTime: 0,
      // 更改后的播放时间
      currentPlayNowTime: 0,
      // 歌曲总时长
      totalTime: 0,
      // 是否在播放
      isPlaying: false,
      // 是否单曲循环
      isLoop: false,
      // 是否显示播放详情
      playDetail: false,
      // 当前播放歌曲在歌单中的序列
      currentIndex: 0 // 当前播放歌曲详细信息对象
    },
    // 当前播放列表
    playList: [],
    // 旧播放列表
    oldPlayList: []
  }),
  mutations: {
    // 改变正在播放的id
    changeCurrentPlayId (state, info) {
      console.log(info)
      state.playstate.currentplayId = info.id
      state.playstate.isPlaying = true
      state.playstate.currentPlayInfo = info
    },
    // 改变是否播放详情
    changePlayDetail (state, boolean) {
      // console.log('执行事件')
      state.playstate.playDetail = boolean
    },
    // 更新播放列表
    changePlayList (state, list) {
      state.playstate.oldPlayList = JSON.parse(
        JSON.stringify(state.playstate.playList || [])
      )
      state.playstate.playList = list
    },
    changePlaying (state, boolean) {
      state.playstate.isPlaying = boolean
    }
  }
}
