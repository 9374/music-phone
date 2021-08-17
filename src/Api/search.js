import request from '@/utils/request.js'

// 获取热搜列表
export const searchHotAPI = () => {
  return request('/search/hot/detail', 'get')
}
// 搜索匹配感兴趣的
export const searchMultimatchAPI = (keywords) => {
  return request('/search/multimatch', 'get', { keywords })
}
// 搜索结果
export const searchAPI = (keywords, limit, type) => {
  return request('/search', 'get', { keywords, limit, type })
}
