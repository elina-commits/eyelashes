<template>
    <mainHeader />
    <main>
      <slot></slot>
    </main>
    <mainFooter />
</template>

<script setup>
  import mainHeader from "@/components/mainHeader/mainHeader.vue" 
  import mainFooter from "@/components/mainFooter/mainFooter.vue"
  import scrollBtn from "@/components/scrollBtn/scrollBtn.vue"
</script>
