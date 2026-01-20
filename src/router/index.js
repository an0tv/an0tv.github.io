import projects from "../components/projects2.vue";
import home from "../components/home.vue";
import courses from "../components/courses.vue";
import projectTelemetry from "../components/project-telemetry.vue";
import projectSteeringWheel from "../components/project-steering-wheel.vue";
import projectComingSoon from "../components/project-coming-soon.vue";
import projectPenthouse from "../components/project-penthouse.vue";
import projectVcpu from "../components/project-vcpu.vue";
import projectSAM from "../components/project-sam.vue";
import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  { path: "/", component: home },
  { path: "/courses", component: courses },
  { path: "/projects", component: projects },
  { path: "/projects/telemetry", component: projectTelemetry },
  { path: "/projects/steering-wheel", component: projectSteeringWheel },
  { path: "/projects/coming-soon", component: projectComingSoon },
  { path: "/projects/penthouse", component: projectPenthouse },
  { path: "/projects/vcpu", component: projectVcpu },
  { path: "/projects/sam", component: projectSAM },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from) => {
  console.log(from.path);
  console.log(to.path);
});

export default router;
