import request from '@/utils/request.js'

// 获取歌曲url
export const songUrlAPI = (id) => {
  return request('/song/url', 'get', { id })
}

// 测试歌曲是否可用
export const checkMusicAPI = (id) => {
  return request('/check/music', 'get', { id })
}
