<template>
    <button v-if="isVisible" @click="scrollToTop" class="scrollBtn">↑</button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
const handleScroll = () => 
{
  isVisible.value = window.scrollY > 150; 
}

onMounted(() => 
{
  window.addEventListener('scroll', handleScroll);
})
onUnmounted(() => 
{
  window.removeEventListener('scroll', handleScroll);
})
</script>

<style scoped lang="scss">
 @use "scrollBtn.scss"
</style>
