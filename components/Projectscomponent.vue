<template>
    <div class="text-center mb-6">
        <h3 id="project" class="text-[1.6rem] sm:text-[1.6rem] md:text-[1.7rem] lg:text-[2rem] font-bold">Projects</h3>
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
                        <h5
                            class="text-[16px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] font-bold mb-2  tracking-tight text-gray-900 dark:text-white truncate ...">
                            {{ row.name }}</h5>
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
</template>

<script setup lang="ts">
interface projects {
  name: string;
  url: string;
  image: string;
}
const config=useRuntimeConfig();
const  { data:projects, pending, error, refresh } = await useFetch<projects[]>(`${config.public.base_api}/projects.json`);
</script>

<style scoped></style>