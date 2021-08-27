import request from '@/utils/request.js'

// 获取登录状态
export const loginStateAPI = () => {
  return request('/login/refresh', 'get')
}
/**
 * 通过手机登录接口
 * @param {*} params  params:{phone,password,countrycode,md5_password}
 * @returns
 */
// 通过手机登录
export const loginInPhone = (data) => {
  return request('/login/cellphone', 'post', data)
}

/**
 * 通过邮箱登录接口
 * @param {*} params  params:{email,password,md5_password}
 * @returns
 */
export const loginInEmail = (data) => {
  return request('/login', 'post', data)
}
// 刷新登录状态
export const loginRefresh = () => {
  return request('/login/refresh', 'get')
}
// 获取用户详情
export const userDetail = function (uid) {
  return request('/user/detail', 'get', uid)
}

// 获取用户歌单
export const userPlaylistAPI = function (uid) {
  return request('/user/playlist', 'get', { uid })
}
// 签到
export const userSigninAPI = function () {
  return request('/daily_signin', 'get')
}
// 退出登录
export const userLoginOut = function () {
  return request('/logout', 'get')
}

// 获取用户喜欢的歌曲
export const getLikeListAPI = function (uid) {
  return request('/likelist', 'get', uid)
}

// 喜欢音乐
export const likeSongApi = function (id, like) {
  return request('/like', 'get', { id, like })
}
