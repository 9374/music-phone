import { createRouter, createWebHashHistory } from 'vue-router'
const Home = () => import('@/views/Home/index.vue')
const My = () => import('@/views/My/index.vue')
const Search = () => import('@/views/Search/index.vue')
const SearchResult = () => import('@/views/Search/search-result.vue')
const routes = [
  { path: '/', component: Home },
  { path: '/my', component: My },
  { path: '/search', component: Search },
  { path: '/search/result/:kw', component: SearchResult }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
