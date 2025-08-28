import projects from '../components/projects2.vue' 
import home from '../components/home.vue'
import courses from '../components/courses.vue'
import projectTelemetry from '../components/project-telemetry.vue'
import projectSteeringWheel from '../components/project-steering-wheel.vue'
import projectComingSoon from '../components/project-coming-soon.vue'
import { createRouter, createWebHashHistory } from "vue-router"
const routes = [
  { path: '/', component: home },
  { path: '/courses', component: courses },
  { path: '/projects', component: projects },
  { path: '/projects/gaucho-racing-telemetry', component: projectTelemetry },
  { path: '/projects/gaucho-racing-steering-wheel', component: projectSteeringWheel },
  { path: '/projects/coming-soon', component: projectComingSoon },
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
