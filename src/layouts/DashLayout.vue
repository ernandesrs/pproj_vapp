<template>
    <div
        class="flex w-full h-screen bg-radial-[at_0%_35%] from-35% to-100% from-white to-neutral-50 dark:from-neutral-950 dark:to-black text-neutral-700 dark:text-neutral-100 relative overflow-hidden">

        <Transition enter-from-class="opacity-0 -translate-x-full" enter-to-class="opacity-100 translate-x-0"
            enter-active-class="duration-300 ease-in-out" leave-from-class="opacity-100 translate-x-0"
            leave-to-class="opacity-0 -translate-x-full" leave-active-class="duration-200 ease-out">
            <aside v-show="showSidebar"
                class="fixed lg:relative z-50 flex flex-col w-full h-screen lg:h-auto max-w-[275px] max-h-screen border-r bg-neutral-50 lg:bg-transparent dark:bg-neutral-950 lg:dark:bg-transparent border-neutral-200 dark:border-neutral-900 overflow-auto scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700 scrollbar-track-zinc-100 dark:scrollbar-track-zinc-800">

                <!--  -->
                <div class="flex-1">
                    <slot name="sidebar" />
                </div>

                <div class="flex justify-center p-2.5 border-t border-neutral-200 dark:border-neutral-900">
                    <CToggle v-model="darkMode" label="Dark theme" icon-on-checked="moon-stars-fill"
                        icon-on-unchecked="sun-fill" />
                </div>

            </aside>
        </Transition>

        <div class="flex-1">

            <!-- header -->
            <header class="flex items-center gap-x-2.5 px-6 h-[60px]">
                <div>
                    <!-- prepend header content -->

                    <h1 class="text-base sm:text-lg md:text-2xl font-semibold">
                        Hey! Wellcome back.
                    </h1>
                </div>
                <div class="flex-1">
                    <!-- middle header content -->
                </div>
                <div class="flex items-center gap-2.5">
                    <!-- append header content -->

                    <button @click="showSidebar = !showSidebar" type="button"
                        class="size-9 flex items-center justify-center rounded-full text-2xl cursor-pointer">
                        <CIcon name="list" />
                    </button>
                </div>
            </header>

            <!-- main and footer -->
            <div class="flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700 scrollbar-track-zinc-100 dark:scrollbar-track-zinc-800"
                style="height: calc(100vh - 60px);">

                <!-- main -->
                <main class="flex-1">
                    <RouterView />
                </main>

                <!-- footer -->
                <footer class="flex justify-center px-5 sm:px-10 py-2.5">
                    <small class="text-center text-sm text-neutral-400 dark:text-neutral-600">
                        <a class="text-violet-700 hover:text-violet-800 duration-200" target="_blank"
                            href="https://github.com/ernandsrs/pproj_vapp">VApp</a> 2025 |
                        Developed by <a class="text-violet-700 hover:text-violet-800 duration-200"
                            href="https://github.com/ernandsrs" target="_blank" title="Profile on Github">Ernands RS</a>
                    </small>
                </footer>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

import CIcon from '@/components/ui/CIcon.vue';
import CToggle from '@/components/ui/CToggle.vue';
import { useAppSettings } from '@/composables/useAppSettings';
import { RouterView } from 'vue-router';

const { showSidebar, darkMode } = useAppSettings();

</script>

<style scoped></style>
