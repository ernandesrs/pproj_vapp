<template>
    <div class="bg-neutral-900 rounded-lg p-5 w-full max-w-[475px] mx-auto">

        <div class="flex justify-center gap-2.5">
            <RouterLink class="bg-violet-950 hover:bg-violet-900 duration-200 px-6 py-2.5 rounded-lg" v-for="(link, index) in links" :key="index"
                :to="link.to">
                {{ link.label }}
            </RouterLink>
        </div>

    </div>
</template>

<script setup lang="ts">

const links = [
    {
        icon: 'home',
        label: 'Home',
        to: { name: 'home' }
    },
    {
        icon: 'login',
        label: 'Login',
        to: { name: 'home' }
    }
];

</script>

<style scoped></style>