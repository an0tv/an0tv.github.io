<script setup>
import mobile from './components/secondary_page.vue';
const isMobileDevice = /Mobi/i.test(window.navigator.userAgent)
function reloadPage(){
  window.location.href = window.location.href;
}
</script>
<template>
 <!--
 <div v-if="isMobileDevice">
    <mobile/>
  </div>
-->
  <div  class="sidebar">
    <RouterLink class="top" to="/"> Home </RouterLink>
    <RouterLink class="top" to="/personal" > Personal </RouterLink>
    <RouterLink class="top" to="/projects"> Projects </RouterLink>
  </div>
  <RouterView/>
</template>

