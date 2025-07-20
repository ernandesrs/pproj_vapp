<template>
    <CPage title="Tooltips" without-header>

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CTooltip',
                texts: [],
                componentDoc: {}
            }
        ]">

            <template #previews>
                <div class="grid grid-cols-12 gap-5">
                    <CCard class="col-span-12" title="Tooltip in text">
                        <p>
                            Lorem ipsum dolor sit amet <CTooltip text="Tooltip text lorem ipsum" width="w-[125px]"
                                class="text-rose-500 dark:text-rose-700">this
                                is a Tooltip</CTooltip> elit. Veniam, asperiores pariatur quos
                            iste voluptates expedita. Deleniti sit unde iure cum corrupti tenetur neque suscipit.
                            Laborum aliquam facilis quod delectus velit <span class="inline">
                                <CTooltip text="Lorem ipsum dolor sit" width="w-[225px]"><a
                                        class="text-violet-500 dark:text-violet-700" href="">this is other Tooltip</a>
                                </CTooltip>
                            </span> ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </CCard>
                    <div class="col-span-12 flex flex-wrap justify-center items-center gap-6">
                        <CTooltip text="Lorem tooltip consectetur adipisicing elit" width="w-[150px]">
                            <CButton label="Tooltip in a button" />
                        </CTooltip>
                        <CTooltip text="Lorem tooltip consectetur adipisicing elit" width="w-[150px] sm:w-[250px]"
                            location="top-left">
                            <CButton label="Tooltip in a button" />
                        </CTooltip>
                        <CTooltip width="w-[150px] sm:w-[250px]" location="top-center">
                            <CButton label="Custom tooltip content" />

                            <template #tooltip>
                                <div class="flex flex-col items-center text-center py-2.5">
                                    <CIcon name="rocket-fill" class="text-2xl md:text-3xl mb-2.5" />
                                    <p>Lorem tooltip consectetur <span class="font-semibold">adipisicing elit</span>!
                                    </p>
                                </div>
                            </template>
                        </CTooltip>
                    </div>
                </div>
            </template>

            <template #codes>
                <textarea>
                </textarea>
            </template>

        </CDocSection>

    </CPage>
</template>

<script setup lang="ts">

import CDocSection from '@/components/dashboard/CDocSection.vue';
import CBadge from '@/components/ui/CBadge.vue';
import CButton from '@/components/ui/CButton.vue';
import CCard from '@/components/ui/CCard.vue';
import CIcon from '@/components/ui/CIcon.vue';
import CTooltip from '@/components/ui/CTooltip.vue';
import CPage from '@/components/ui/layout/CPage.vue';

</script>

<style scoped></style>