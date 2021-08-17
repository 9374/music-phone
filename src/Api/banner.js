import request from '@/utils/request.js'

export const BannerListAPI = (data) => {
  return request('/banner', 'get', data)
}
