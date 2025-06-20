<template>
    <div class="w-full min-h-screen p-4 flex gap-5 flex-col justify-center items-center bg-neutral-100 text-neutral-800 dark:bg-neutral-950 dark:text-white">

        <CToggle v-model="dark" icon-on-checked="moon-stars-fill" icon-on-unchecked="sun-fill"
            class="absolute top-4 right-6" />

        <header class="flex flex-col items-center">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="75" height="75" />
            <div class="text-center mt-4">
                <RouterLink :to="{ name: 'home' }" class="text-3xl font-semibold block mb-2">
                    VAPP
                </RouterLink>
                <div class="text-neutral-700 dark:text-neutral-400">
                    An simple Vue Application
                </div>
            </div>
        </header>
        <div class="w-full">
            <main>
                <RouterView />
            </main>
        </div>
        <footer class="text-sm text-neutral-500">
            Developed by <a class="text-violet-900 hover:text-violet-800 duration-200"
                href="https://github.com/ernandsrs" target="_blank" title="Profile on Github">Ernands RS</a>
        </footer>
    </div>
</template>

<script setup lang="ts">

import CToggle from '@/components/ui/CToggle.vue';
import { useAppSettings } from '@/composables/useAppSettings';
import { ref, watch } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const { isDarkTheme, darkModeToggle } = useAppSettings();

const dark = ref<boolean>(isDarkTheme());

watch(() => dark.value, (n) => {
    darkModeToggle();
});


</script>

<style scoped></style>
