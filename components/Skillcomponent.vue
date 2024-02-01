<template>
    <div class="text-center mb-6">
        <h3 id="skill" class="text-[1.6rem] sm:text-[1.6rem] md:text-[1.7rem] lg:text-[2rem] font-bold">Skills</h3>
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
</template>

<script setup lang="ts">
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
</script>

<style scoped></style>