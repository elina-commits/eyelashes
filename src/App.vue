<template>
  <Snowfall />
  <scrollBtn />
  <router-view />
</template>

<script setup>
  import Snowfall from './components/snowfall/snowfall.vue';
  import scrollBtn from "@/components/scrollBtn/scrollBtn.vue"
</script>