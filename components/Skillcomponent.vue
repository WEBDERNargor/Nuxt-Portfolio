<template>
    <div class="text-center mb-6">
        <h3 id="skill" class="text-[1.6rem] sm:text-[1.6rem] md:text-[1.7rem] lg:text-[2rem] font-bold">Skills</h3>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-4">
        <div v-for="(row, key) in skills" >





            <div
                class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">

                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" v-html="row.html"></h5>

                <h4>{{ row.name }}</h4>

            </div>



        </div>

    </div>
</template>

<script setup lang="ts">
interface Skill {
  name: string;
  html: string;
}
const config=useRuntimeConfig();
const  { data:skills, pending, error, refresh } = await useFetch<Skill[]>(`${config.public.base_api}/skills.json`);
</script>

<style scoped></style>