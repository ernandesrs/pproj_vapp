<template>
    <div
        class="flex w-full h-screen bg-radial-[at_0%_35%] from-35% to-100% from-neutral-100 to-neutral-200 dark:from-neutral-950 dark:to-black text-neutral-700 dark:text-neutral-100 relative overflow-hidden">

        <Transition enter-from-class="opacity-0" enter-to-class="opacity-100"
            enter-active-class="duration-200 ease-in-out" leave-from-class="opacity-100" leave-to-class="opacity-0"
            leave-active-class="duration-100 ease-out">
            <div @click="showSidebar = false" v-if="inMobile && showSidebar"
                class="w-full h-screen fixed z-40 top-0 left-0 bg-neutral-300/75 dark:bg-neutral-800/90"></div>
        </Transition>

        <Transition enter-from-class="opacity-0 -translate-x-full" enter-to-class="opacity-100 translate-x-0"
            enter-active-class="duration-300 ease-in-out" leave-from-class="opacity-100 translate-x-0"
            leave-to-class="opacity-0 -translate-x-full" leave-active-class="duration-200 ease-out">
            <aside v-show="showSidebar"
                class="fixed lg:relative z-50 flex flex-col w-full h-screen lg:h-auto max-w-[275px] max-h-screen border-r bg-neutral-50 lg:bg-transparent dark:bg-neutral-950 lg:dark:bg-transparent border-neutral-200 dark:border-neutral-900 overflow-auto custom-scrollbar">

                <!--  -->
                <div class="flex-1 flex flex-col">

                    <CSidebarNav :items="[
                        {
                            label: 'Dashboard',
                            icon: 'pie-chart',
                            to: {
                                name: 'dash.home'
                            },
                            activeIn: ['dash.home']
                        },
                        {
                            label: 'Users',
                            icon: 'people',
                            to: {
                                name: 'dash.users'
                            },
                            activeIn: ['dash.users', 'dash.users.info']
                        }
                    ]" />

                    <CSidebarNav :items="[{
                        label: 'Document',
                        icon: 'file-earmark-text-fill',
                        to: {
                            name: 'dash.profile'
                        },
                        subitems: [
                            {
                                label: 'Introduction',
                                to: {
                                    name: 'dash.docs.introduction'
                                },
                                activeIn: ['dash.docs.introduction']
                            },
                            {
                                label: 'Page',
                                to: {
                                    name: 'dash.docs.pages'
                                },
                                activeIn: ['dash.docs.pages']
                            },
                            {
                                label: 'Buttons',
                                to: {
                                    name: 'dash.docs.buttons'
                                },
                                activeIn: ['dash.docs.buttons']
                            },
                            {
                                label: 'Form',
                                to: {
                                    name: 'dash.docs.form'
                                },
                                activeIn: ['dash.docs.form']
                            },
                            {
                                label: 'Form fields',
                                to: {
                                    name: 'dash.docs.formFields'
                                },
                                activeIn: ['dash.docs.formFields']
                            },
                            {
                                label: 'Icons',
                                to: {
                                    name: 'dash.docs.icons'
                                },
                                activeIn: ['dash.docs.icons']
                            },
                            {
                                label: 'Lists',
                                to: {
                                    name: 'dash.docs.list'
                                },
                                activeIn: ['dash.docs.list']
                            },
                            {
                                label: 'Toasts',
                                to: {
                                    name: 'dash.docs.toast'
                                },
                                activeIn: ['dash.docs.toast']
                            },
                            {
                                label: 'Badges',
                                to: {
                                    name: 'dash.docs.badges'
                                },
                                activeIn: ['dash.docs.badges']
                            },
                            {
                                label: 'Cards',
                                to: {
                                    name: 'dash.docs.cards'
                                },
                                activeIn: ['dash.docs.cards']
                            },
                            {
                                label: 'Thumbnails',
                                to: {
                                    name: 'dash.docs.thumbnails'
                                },
                                activeIn: ['dash.docs.thumbnails']
                            },
                            {
                                label: 'Tables',
                                to: {
                                    name: 'dash.docs.tables'
                                },
                                activeIn: ['dash.docs.tables']
                            },
                            {
                                label: 'Skeletons',
                                to: {
                                    name: 'dash.docs.skeletons'
                                },
                                activeIn: ['dash.docs.skeletons']
                            },
                            {
                                label: 'Paginations',
                                to: {
                                    name: 'dash.docs.paginations'
                                },
                                activeIn: ['dash.docs.paginations']
                            },
                            {
                                label: 'Dialogs',
                                to: {
                                    name: 'dash.docs.dialogs'
                                },
                                activeIn: ['dash.docs.dialogs']
                            },
                            {
                                label: 'Dropdowns',
                                to: {
                                    name: 'dash.docs.dropdowns'
                                },
                                activeIn: ['dash.docs.dropdowns']
                            },
                            {
                                label: 'Tooltips',
                                to: {
                                    name: 'dash.docs.tooltips'
                                },
                                activeIn: ['dash.docs.tooltips']
                            },
                            {
                                label: 'Texts',
                                to: {
                                    name: 'dash.docs.texts'
                                },
                                activeIn: ['dash.docs.texts']
                            },
                            {
                                label: 'Charts',
                                to: {
                                    name: 'dash.docs.charts'
                                },
                                activeIn: ['dash.docs.charts']
                            }
                        ]
                    }]" />

                    <CSidebarNav class="mt-auto" :items="[
                        {
                            label: 'Profile',
                            icon: 'person',
                            to: {
                                name: 'dash.profile'
                            },
                            activeIn: ['dash.profile']
                        }
                    ]" />

                </div>

                <div class="flex justify-center p-2.5 border-t border-neutral-200 dark:border-neutral-900">
                    <CToggle v-model="darkMode" label="Dark theme" icon-on-checked="moon-stars-fill"
                        icon-on-unchecked="sun-fill" />
                </div>

            </aside>
        </Transition>

        <!-- loading -->
        <CLoaderBar :loading="inLoadingMode" />

        <CToast />

        <div class="flex-1 relative z-30">

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
            <div class="flex flex-col overflow-y-auto custom-scrollbar" style="height: calc(100vh - 60px);">

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

import CSidebarNav from '@/components/ui/layout/CSidebarNav.vue';
import CToast from '@/components/ui/layout/CToast.vue';
import CIcon from '@/components/ui/CIcon.vue';
import CToggle from '@/components/ui/CToggle.vue';
import { useApp } from '@/composables/useApp';
import { RouterView } from 'vue-router';
import CLoaderBar from '@/components/ui/layout/CLoaderBar.vue';

const { showSidebar, inMobile, darkMode, inLoadingMode } = useApp();

</script>

<style scoped></style>
