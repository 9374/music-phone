import request from '@/utils/request.js'

// 获取推荐歌单api(需要登录)
export const recomAPI = () => {
  return request('/recommend/resource', 'get')
}
// 推荐歌单 不用登录
export const personAlizedAPI = (limit) => {
  return request('/personalized', 'get', { limit: limit })
}
// 获取最新推荐音乐
export const newSongAPI = (limit) => {
  return request('/personalized/newsong', 'get', { limit })
}

// 获取歌单详情
/**
 *
 * @param {*} id 歌单 id
 * @param {*} s 歌单最近的 s 个收藏者,默认为8
 */
export const playDetailAPI = (id, s) => {
  return request('/playlist/detail', 'get', { id, s })
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
