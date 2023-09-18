<script setup>
import desktop from './components/main_page.vue';
import mobile from './components/secondary_page.vue';
import dispose from './components/main_page.vue';
const isMobileDevice = /Mobi/i.test(window.navigator.userAgent)
function reloadPage(){
  window.location.href = window.location.href;
}
</script>
<template>
  <div v-if="isMobileDevice">
    <mobile/>
  </div>
  <div v-else>
    <div>
    <RouterLink to="/test" >Test </RouterLink>
    <RouterLink to="/cube">cube</RouterLink>
    </div>
  </div>
  <RouterView/>
</template>

