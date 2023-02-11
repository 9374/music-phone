/*
 * @description:搜索相关;
 * @fileName: search.js
 * @author: HanxiaoHui
 * @date: 2023-02-11 18:25:55
 * @version: V1.0.0
*/
export default {
  namespaced: true,
  state: () => ({
    searchHistoryList: [],
    searchDefault: '搜索歌曲 歌单 歌手'
  }),
  mutations: {
    // 添加内容到搜索历史
    /**
     * 如果搜索历史中包含 删除 重新添加到数组中
     */
    addSearchHistory (state, payload) {
      const index = state.searchHistoryList.findIndex(item => {
        return item === payload
      })
      if (index > -1) {
        state.searchHistoryList.splice(index, 1)
      }
      state.searchHistoryList.unshift(payload)
    },
    // 清除搜索历史
    closeSearchHistory (state, payload) {
      state.searchHistoryList = []
    },
    updateSearchDefault (state, payload) {
      state.searchDefault = payload
    }
  }
}
