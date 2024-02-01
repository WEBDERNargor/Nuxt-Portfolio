<template>
    <div class="text-center mb-6">
        <h3 id="contract" class="text-[1.6rem] sm:text-[1.6rem] md:text-[1.7rem] lg:text-[2rem] font-bold">Contract</h3>
    </div>

    <div class="flex flex-row flex-wrap justify-center gap-4">
        
        <div v-for="(row, key) in socials">


          

            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
               
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" v-html="row.html"></h5>

                <h4>{{ row.name }}</h4>
            <br>
            <font v-if="row.name=='Email'" class="text-xs">{{row.content}}</font>
            <a v-else class=" text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg  px-2 py-2 text-xs me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" :href="row.content" target="_new">
            เข้าชม
            </a>
            </div>
     


        </div>

    </div>
</template>

<script setup lang="ts">
interface Socails {
  name: string;
  url: string;
  html:string;
  content:string
}
const config=useRuntimeConfig();
const  { data:socials, pending, error, refresh } = await useFetch<Socails[]>(`${config.public.base_api}/socails.json`);
</script>

<style scoped></style>