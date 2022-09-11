import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import AboutView from '../views/About.vue'
const routes = [
  {
    path : '/home',
    name : 'home',
    component : HomeView
  },
  {
    path: '/about',
    name : 'about',
    component : AboutView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
