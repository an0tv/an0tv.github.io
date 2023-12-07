//import cube from '../components/main_page.vue'
import projects from '../components/projects2.vue' 
import home from '../components/home.vue'
import courses from '../components/courses.vue'
import { createRouter, createWebHashHistory } from "vue-router"
const routes = [
  { path: '/', component: home },
  { path: '/courses', component: courses },
  //{ path: '/cube', component: cube },
  { path: '/projects', component: projects },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from)=> {
  console.log(from.path)
  console.log(to.path)
 })
 

export default router 
