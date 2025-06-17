<template>
    <div class="w-full h-screen p-4 flex gap-5 flex-col justify-center items-center bg-neutral-950 text-white">
        <header class="flex flex-col items-center">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="75" height="75" />
            <div class="text-center mt-4">
                <RouterLink :to="{ name: 'home' }" class="text-3xl font-semibold block mb-2">
                    VAPP
                </RouterLink>
            </div>
        </header>
        <div class="w-full">
            <main>
                <RouterView />
            </main>
        </div>
        <footer class="text-sm text-neutral-600 font-medium">
            Developed by <a class="text-violet-900 hover:text-violet-800 duration-200"
                href="https://github.com/ernandsrs" target="_blank" title="Profile on Github">Ernands RS</a>
        </footer>
    </div>
</template>

<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped></style>
