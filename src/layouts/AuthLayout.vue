<template>
    <div
        class="w-full min-h-screen p-4 flex gap-5 flex-col justify-center items-center bg-neutral-100 text-neutral-800 dark:bg-neutral-950 dark:text-white">

        <CToggle v-model="darkMode" icon-on-checked="moon-stars-fill" icon-on-unchecked="sun-fill" label="Dark mode"
            class="absolute top-4 right-6" />

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

                <div class="p-5 flex justify-center">
                    <RouterLink class="text-violet-600 dark:text-violet-500" v-if="route.name == 'auth.register'" :to="{ name: 'auth.login' }"
                        title="Access my account">
                        I have account.
                    </RouterLink>
                    <RouterLink class="text-violet-600 dark:text-violet-500" v-if="route.name == 'auth.login'" :to="{ name: 'auth.register' }"
                        title="Register a account">
                        Create an account.
                    </RouterLink>
                </div>
            </main>
        </div>
        <footer class="text-sm text-neutral-400 dark:text-neutral-500">
            Developed by <a
                class="text-violet-500 hover:text-violet-600 dark:text-violet-900 dark:hover:text-violet-800 duration-200"
                href="https://github.com/ernandsrs" target="_blank" title="Profile on Github">Ernands RS</a>
        </footer>
    </div>
</template>

<script setup lang="ts">

import CToggle from '@/components/ui/CToggle.vue';
import { useApp } from '@/composables/useApp';
import { RouterLink, RouterView, useRoute } from 'vue-router';

const { darkMode } = useApp();
const route = useRoute();

</script>

<style scoped></style>
