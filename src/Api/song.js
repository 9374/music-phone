import request from '@/utils/request.js'

// 获取最新推荐音乐
export const newSongAPI = (limit) => {
  return request('/personalized/newsong', 'get', { limit })
}
// 获取歌曲详情
/**
 *
 * @param {*} ids 歌曲id 支持传入多个用 , 隔开
 * @returns
 */
export const songDetailAPI = (ids) => {
  return request('/song/detail', 'get', { ids })
}
