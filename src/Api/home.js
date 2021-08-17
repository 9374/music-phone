import request from '@/utils/request.js'

// 获取首页菜单导航
export const dragonBallAPI = () => {
  return request('/homepage/dragon/ball', 'get')
}
// 获取app首页数据
export const HomePageApi = () => {
  return request('/homepage/block/page', 'get')
}
