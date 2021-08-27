import request from '@/utils/request.js'

// 推荐歌单 不用登录
export const personAlizedAPI = (limit) => {
  return request('/personalized', 'get', { limit: limit })
}
// 获取推荐歌单api(需要登录)
export const recomAPI = () => {
  return request('/recommend/resource', 'get')
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
// 歌单分类
// 说明: 调用此接口, 可获取歌单分类, 包含 category 信息
// 接口地址: /playlist/catlist
// 调用例子: /playlist/catlist
export const playListCatlistAPI = () => {
  return request('/playlist/catlist', 'get')
}
// 热门歌单分类
// 说明: 调用此接口, 可获取歌单分类, 包含 category 信息

export const playlistHotAPI = () => {
  return request('/playlist/hot', 'get')
}

// 获取精品歌单
// 说明: 调用此接口, 可获取精品歌单
// 可选参数: cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部", 可从精品歌单标签列表接口获取(/playlist/highquality / tags)
// limit: 取出歌单数量, 默认为 20
// before: 分页参数, 取上一页最后一个歌单的 updateTime 获取下一页数据
// 接口地址: /top/playlist / highquality
export const playlistTopHighqualityAPI = ({ cat = '全部', limit = 20, before }) => {
  return request('/top/playlist/highquality', 'get', { cat, limit, before })
}

// 歌单(网友精选碟)
// 说明: 调用此接口, 可获取网友精选碟歌单
// 可选参数: order: 可选值为 'new' 和 'hot', 分别对应最新和最热, 默认为 'hot'
// cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部", 可从歌单分类接口获取(/playlist/catlist)
// limit: 取出歌单数量, 默认为 50
// offset: 偏移数量, 用于分页, 如 : (评论页数 - 1) * 50, 其中 50 为 limit 的值
// 接口地址: /top/playlist
// 调用例子: /top/playlist ? limit = 10 & order=new
export const playlistTopAPI = () => {
  return request('/top/playlist', 'get')
}
