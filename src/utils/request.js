import axios from 'axios'
import store from '@/store/index.js'
// import store from '@/store'// 导入vuex的store实例
// 导入路由实例
// import router from '@/router'
const instance = axios.create({
  // baseURL: 'http://mana.sn9374.com:3000'
  baseURL: 'http://mana.eomb.cn:3000'
})
// 请求拦截器=>统一带token
instance.interceptors.request.use(config => {
  console.log(config.method)
  if (config.method === 'post') {
    // console.log('post')
    config.data = {
      ...config.data,
      _t: Date.parse(new Date()) / 1000
    }
    if (store.state.user.cookie) {
      config.data.cookie = store.state.user.cookie
    }
  } else if (config.method === 'get') {
    // console.log('get')
    config.params = {
      ...config.params,
      _t: Date.parse(new Date()) / 1000
    }
    if (store.state.user.cookie) {
      config.params.cookie = store.state.user.cookie
    }
  }
  return config
})

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
    // 区分get(params)还是post(data)
    [method === 'get' ? 'params' : 'data']: submitParams
  })
}
export default request
