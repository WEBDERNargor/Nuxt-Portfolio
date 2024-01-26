<template>
  <Navbar></Navbar>
    <slot></slot>
  
  <Footer></Footer>

</template>

<script setup>
import { initFlowbite } from 'flowbite'
const config = useRuntimeConfig();

onMounted(() => {
    initFlowbite();
})
</script>

<style lang="scss" scoped>

</style>