/*
 * @description:路由跳转;
 * @fileName: index.js
 * @author: HanxiaoHui
 * @date: 2023-02-11 18:26:38
 * @version: V1.0.0
*/
import { createRouter, createWebHashHistory } from 'vue-router'
// 首页
const Home = () => import('@/views/Home/index.vue')
// 我的
const My = () => import('@/views/My/index.vue')
// 搜索页面
const Search = () => import('@/views/Search/index.vue')
// 搜索结果
const SearchResult = () => import('@/views/Search-result/index.vue')
// 播放列表详情
const PlayListDetail = () => import('@/views/PlayListDetail/index.vue')
// 歌单广场
const PlayListSquare = () => import('@/views/PlaylistSquare/index.vue')
// 登录页面
const Login = () => import('@/views/Login/index.vue')
const routes = [
  { path: '/', component: Home },
  { path: '/my', component: My },
  { path: '/search', component: Search },
  { path: '/search/result/:kw', component: SearchResult },
  { path: '/playListDetail/:id', component: PlayListDetail },
  { path: '/playListSquare', component: PlayListSquare },
  { path: '/login', component: Login }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
