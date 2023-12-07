<script setup>
import mobile from './components/secondary_page.vue';
const isMobileDevice = /Mobi/i.test(window.navigator.userAgent)
function reloadPage(){
  window.location.href = window.location.href;
}
</script>
<template>
  <div  class="sidebar">
    <RouterLink class="top" to="/"> Home </RouterLink>
    <RouterLink class="top" to="/courses" > Courses </RouterLink>
    <RouterLink class="top" to="/projects"> Projects </RouterLink>
  </div>
  <RouterView/>
</template>

