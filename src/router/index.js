import { createRouter, createWebHashHistory } from 'vue-router'
const Home = () => import('@/views/Home/index.vue')
const My = () => import('@/views/My/index.vue')
const Search = () => import('@/views/Search/index.vue')
const SearchResult = () => import('@/views/Search-result/index.vue')
const PlayListDetail = () => import('@/views/PlayListDetail/index.vue')
const routes = [
  { path: '/', component: Home },
  { path: '/my', component: My },
  { path: '/search', component: Search },
  { path: '/search/result/:kw', component: SearchResult },
  { path: '/playListDetail/:id', component: PlayListDetail }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
