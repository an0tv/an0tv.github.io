//import cube from '../components/main_page.vue'
import projects from '../components/projects.vue' 
import home from '../components/home.vue'
import personal from '../components/personal.vue'
import { createRouter, createWebHistory } from "vue-router"
const routes = [
  { path: '/', component: home },
  { path: '/personal', component: personal },
  //{ path: '/cube', component: cube },
  { path: '/projects', component: projects },
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
