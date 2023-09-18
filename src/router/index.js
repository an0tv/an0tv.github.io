const Home = { template: '<div>Home</div>' }
import cube from '../components/main_page.vue'
import { createRouter, createWebHistory } from "vue-router"
const routes = [
  {path: '/', component:Home},
  { path: '/test', component: Home },
  { path: '/cube', component: cube },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from)=> {
  console.log(from.path)
  console.log(to.path)
 })
 

export default router 
