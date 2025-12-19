<template>
  <div class="snow__wrapper">
    <div 
      v-for="flake in flakes" 
      :key="flake.id"
      class="snowflake"
      :style="{
        left: flake.left + 'vw',
        animationDuration: flake.duration + 's',
        animationDelay: flake.delay + 's',
        width: flake.size + 'px',
        height: flake.size + 'px',
        opacity: flake.op
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const flakes = ref([]);

onMounted(() => 
{
  for (let i = 0; i < 50; i++) 
  {
    flakes.value.push({
      id: i,
      left: Math.random() * 100,
      duration: Math.random() * 3 + 4,
      delay: Math.random() * 5,    
      size: Math.random() * 17 + 2,
      op: Math.random() * 1 + 0.1,
    });
  }
});
</script>

<style scoped lang="scss">
  @use 'snowfall.scss'
</style>
