<script setup>
import { ref } from 'vue';
import desktop from './components/main_page.vue';
import mobile from './components/secondary_page.vue';
function isMobile() {
  return window.navigator.userAgentData.mobile;
}
</script>
<template>
  <div v-if="isMobile()">
    <mobile/>
  </div>
  <div v-else>
    <desktop/>
  </div>
</template>

