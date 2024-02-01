<template>
  <div class="container mx-auto p-4 ">







    <section
      class="bg-white dark:bg-gray-900 h-[9rem] sm:h-[10rem] md:h-[10rem] lg:h-full xl:h-full 2xl:h-full border-[3px] border-dashed border-[#B3B3B3]   rounded-lg">
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">




        <div class="flex justify-center items-center">
          <div class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl  ">
            <h1>Hello I'm <b>Ditsarut Sukkong</b></h1>
            <h1>Fullstack <b class="text-transparent font-outline-2">Developer</b></h1>
            <h1>Based in <b>Thailand</b></h1>
          </div>

        </div>
        <div class="invisible sm:invisible md:invisible
lg:visible xl:visible 2xl:visible">

          <img class="h-auto max-w-full " src="/images/header.png" alt="Header home">

        </div>
      </div>
    </section>
  

    <section  class="mt-[3rem] mb-6 bg-white dark:bg-gray-900">
      <Skillcomponent></Skillcomponent>
    </section>
    <hr>
    <section  class="mt-[3rem] mb-6 bg-white dark:bg-gray-900 ">
      <Projectscomponent></Projectscomponent>
  
    </section>
    <hr>
    <section  class="mt-[3rem] mb-6 bg-white dark:bg-gray-900">
      <Aboutcomponent></Aboutcomponent>
    </section>
    <hr>
       <section  class="mt-[3rem] mb-6 bg-white dark:bg-gray-900 ">
        <Contractcomponent></Contractcomponent>
       </section>
  </div>
</template>

<script setup>


</script>

<style lang="scss" scoped></style>