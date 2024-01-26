<template>
  <div class="container mx-auto p-4 ">







    <section class="bg-white dark:bg-gray-900 h-[9rem] sm:h-[10rem] md:h-[10rem] lg:h-full xl:h-full 2xl:h-full border-[3px] border-dashed border-[#B3B3B3]   rounded-lg">
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

    <section class="mt-[3rem] mb-6 bg-white dark:bg-gray-900 ">
     
        <div class="text-center mb-6">
          <h3 class="text-[1.6rem] sm:text-[1.6rem] md:text-[1.7rem] lg:text-[2rem] font-bold">Skills</h3>
        </div>
 
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-4">
        <div v-for="(row, key) in skills">





          <div
            class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">

            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" v-html="row.html"></h5>

            <h4>{{ row.name }}</h4>

          </div>



        </div>

      </div>
    </section>
    <hr>


    <section class="mt-[3rem] mb-6 bg-white dark:bg-gray-900">
      <div class="text-center mb-6">
        <h3 class="text-[1.6rem] sm:text-[1.6rem] md:text-[1.7rem] lg:text-[2rem] font-bold">Projects</h3>
      </div>
      <div class="flex flex-row flex-wrap justify-center gap-4">
        <div v-for="(row, key) in projects" class="basis-1/4 ">

          <div
            class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col ">
            <a :href="row.url" target="_new" class="flex justify-center">
              <img class="rounded-t-lg h-[200px]" :src="row.image" />
            </a>
            <div class="p-5 text-center">
              <a :href="row.url" target="_new">
                <h5 class="text-[16px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] font-bold mb-2  tracking-tight text-gray-900 dark:text-white">{{ row.name }}</h5>
              </a>

              <a :href="row.url" target="_new"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                เข้าชม
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
const skills = ref([
  { id: 1, name: 'GIT', html: `<i class="fa-brands fa-github"></i>` },
  { id: 2, name: 'Javascript', html: `<i class="fa-brands fa-js"></i>` },
  { id: 3, name: 'PHP', html: `<i class="fa-brands fa-php"></i>` },
  { id: 4, name: 'Go', html: `<i class="fa-brands fa-golang"></i>` },
  { id: 5, name: 'Java', html: `<i class="fa-brands fa-java"></i>` },
  { id: 6, name: 'C++', html: `<i class="fa-solid fa-c"></i>` },
  { id: 7, name: 'C#', html: `<i class="fa-solid fa-c"></i>` },
  { id: 8, name: 'Html', html: `<i class="fa-brands fa-html5"></i>` },
  { id: 9, name: 'css', html: `<i class="fa-brands fa-css3"></i>` },
  { id: 10, name: 'Scss', html: `<i class="fa-brands fa-sass"></i>` },
  { id: 11, name: 'React', html: `<i class="fa-brands fa-react"></i>` },
  { id: 12, name: 'React Native', html: `<i class="fa-brands fa-react"></i>` },
  { id: 13, name: 'Vue', html: `<i class="fa-brands fa-vuejs"></i>` },
  { id: 14, name: 'Nuxt', html: `<i class="fa-brands fa-vuejs"></i>` },
  { id: 15, name: 'Unreal Engine5', html: `<i class="fa-solid fa-gamepad"></i>` },
  { id: 16, name: 'Unity', html: `<i class="fa-solid fa-gamepad"></i>` },
  { id: 17, name: 'Design a model with Blender', html: `<i class="fa-solid fa-tablet"></i>` },
  { id: 18, name: 'Digital Paint', html: `<i class="fa-solid fa-tablet"></i>` },
  { id: 19, name: 'Card', html: `<i class="fa-solid fa-tablet"></i>` },
]);
const projects = ref([
  { id: 1, name: 'The script store has an automatic payment system PHP.', url: 'https://www.nargor.dev/', image: '/images/scripts_shop.png' },
  { id: 2, name: 'Complete online store with payment system and google login PHP.', url: 'https://shop.nargor.dev/', image: '/images/shop_payment.png' },
  { id: 3, name: 'Shop Api', url: 'https://shop.nargor.dev/api/', image: '/images/shopapi.png' },
]);
</script>

<style lang="scss" scoped></style>