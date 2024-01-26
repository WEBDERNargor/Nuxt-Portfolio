<template>
  <Navbar></Navbar>
  <div class="mt-[70px]">
    <slot></slot>
  </div>
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