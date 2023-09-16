<script setup>
import { ref } from 'vue';
import desktop from './components/main_page.vue';
import mobile from './components/secondary_page.vue';
const isMobileDevice = /Mobi/i.test(window.navigator.userAgent)
console.log(isMobileDevice);
</script>
<template>
  <div v-if="isMobileDevice">
    <mobile/>
  </div>
  <div v-else>
    <desktop/>
  </div>
</template>

