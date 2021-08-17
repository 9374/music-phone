import axios from 'axios'
// import store from '@/store'// 导入vuex的store实例
// 导入路由实例
// import router from '@/router'
const instance = axios.create({
  baseURL: 'http://mana.sn9374.com:3000'
})
// 请求拦截器=>统一带token
instance.interceptors.request.use(config => {
  // 获取token

  return config
}, e => Promise.reject(e))

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 返回页面需要的数据
    return response.data
  },
  (error) => {
    // 处理401,=>出现401直接跳回登录

    return Promise.reject(error)
  }
)

const request = (url, method, submitParams) => {
  return instance({
    url,
    method,
    [method === 'get' ? 'params' : 'data']: submitParams
  })
}
export default request
