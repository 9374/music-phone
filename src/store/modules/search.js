export default {
  namespaced: true,
  state: () => ({
    searchHistoryList: ['我喜欢你', '明天过后', '生日快乐', '123木头人']
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
      if (index) {
        state.searchHistoryList.splice(index, 1)
      }
      state.searchHistoryList.unshift(payload)
    },
    // 清除搜索历史
    closeSearchHistory (state, payload) {
      state.searchHistoryList = []
    }
  }
}
