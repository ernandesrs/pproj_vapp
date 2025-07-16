<template>
    <CPage title="Pagination" without-header>

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CPagination',
                texts: [
                    'Pagination component.'
                ],
                componentDoc: {
                    events: [
                        {
                            name: 'changePage',
                            handlerSignature: '(page: number) => void',
                            desc: 'When a pagination link is clicked.'
                        }
                    ],
                    props: [
                        {
                            name: 'totalItems',
                            type: 'number',
                            required: true,
                            desc: 'Total items.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'itemsPerPage',
                            type: 'number',
                            required: true,
                            desc: 'Items per page.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'currentPage',
                            type: 'number',
                            required: true,
                            desc: 'Current page.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'itemsOnEachSide',
                            type: 'number',
                            required: false,
                            desc: 'Limit items on each side.',
                            allowedValues: '---',
                            defaultValue: '4'
                        }
                    ]
                }
            }
        ]">

            <template #previews>
                <div class="flex flex-col">
                    <div class="grid grid-cols-12 gap-6 mb-5">
                        <CInput class="col-span-6" v-model="totalItems" type="number" label="Total" id="total_items" />
                        <CInput class="col-span-6" v-model="itemsPerPage" type="number" label="Items per page"
                            id="items_per_page" />
                    </div>
                    <div
                        class="flex flex-col items-center justify-center border border-neutral-300 dark:border-neutral-700 p-4 mb-4">
                        <span class="font-medium block mb-2.5">Current page</span>
                        <span class="font-medium text-2xl block" v-text="currentPage"></span>
                    </div>
                    <CPagination @change-page="changePage" :total-items="totalItems" :items-per-page="itemsPerPage"
                        :current-page="currentPage" />
                </div>
            </template>

            <template #codes>
                <textarea>
                    <!-- Component -->
                    <CPagination @change-page="changePage" :total-items="100" :items-per-page="10"
                    :current-page="1" />

                    <!-- Script -->
                     <script>
                        const changePage = (page: number) => {
                            console.log('Go to: ', page);
                        };
                     </script></textarea>
            </template>

        </CDocSection>

    </CPage>
</template>

<script setup lang="ts">

import CDocSection from '@/components/dashboard/CDocSection.vue';
import CPagination from '@/components/ui/CPagination.vue';
import CInput from '@/components/ui/form/CInput.vue';
import CPage from '@/components/ui/layout/CPage.vue';
import { ref } from 'vue';

const currentPage = ref<number>(1);
const totalItems = ref<number>(100);
const itemsPerPage = ref<number>(10);

const changePage = (page: number) => {
    currentPage.value = page;
};

</script>

<style scoped></style>