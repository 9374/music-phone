import axios from 'axios'
import store from '@/store/index.js'
import { createApp } from 'vue'
import { Toast } from 'vant'
const app = createApp()
app.use(Toast)
// import store from '@/store'// 导入vuex的store实例
// 导入路由实例
// import router from '@/router'
const instance = axios.create({
  // baseURL: 'http://mana.sn9374.com:3000'
  // baseURL: 'http://mana.eomb.cn:3000'
  baseURL: 'http://localhost:3000'
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
    if (response.status && response.status > -1) {
      // 返回页面需要的数据
      return response.data
    } else if (response.code === 301) {
      Toast(response.msg)
    } else if (response.code === 250) {
      Toast(response.message)
    } else {
      return Promise.reject(response)
    }
  },
  (error) => {
    const { status } = error.response
    const { message, code } = error.response.data
    Toast(message + code)
    if (status === 400) {

    } else if (status === 501) {
    }
    return Promise.reject(error.response)
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
