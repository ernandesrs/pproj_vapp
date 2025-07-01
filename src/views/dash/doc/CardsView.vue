<template>
    <CPage title="Cards" without-header>
        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CCard',
                texts: [
                    'Card component.'
                ],
                componentDoc: {
                    slots: [
                        {
                            name: 'default',
                            desc: 'Default slot.'
                        },
                        {
                            name: 'header',
                            desc: 'Slot to a custom header component.'
                        },
                        {
                            name: 'footer',
                            desc: 'Slot to a custom footer component.'
                        }
                    ],
                    props: [
                        {
                            name: 'titleTag',
                            type: 'string',
                            required: false,
                            desc: 'Title tag.',
                            allowedValues: '---',
                            defaultValue: 'h5'
                        },
                        {
                            name: 'title',
                            type: 'string',
                            required: false,
                            desc: 'Card title.',
                            allowedValues: '---',
                            defaultValue: '---'
                        }
                    ]
                }
            }
        ]">

            <template #previews>
                <div class="grid grid-cols-12 gap-5">

                    <CCard class="col-span-12 sm:col-span-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laborum cum veniam ad,
                        consequuntur laborum cum veniam ad, consequuntur.
                    </CCard>

                    <CCard title="Lorem title" class="col-span-12 sm:col-span-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laborum cum veniam ad,
                        consequuntur laborum cum veniam ad, consequuntur.
                    </CCard>

                    <CCard class="col-span-12 sm:col-span-6">
                        <template #header>
                            <div class="flex items-center">
                                <CIcon name="rocket-fill" />
                                <div class="font-semibold ml-2.5">
                                    Custom header
                                </div>
                            </div>
                        </template>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laborum cum veniam ad,
                        consequuntur laborum cum veniam ad, consequuntur.
                    </CCard>

                    <CCard class="col-span-12 sm:col-span-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laborum cum veniam ad,
                        consequuntur laborum cum veniam ad, consequuntur.

                        <template #footer>
                            <div class="flex items-center">
                                <CIcon name="rocket-fill" />
                                <div class="font-semibold ml-2.5">
                                    Footer
                                </div>
                            </div>
                        </template>
                    </CCard>

                </div>
            </template>

        </CDocSection>
    </CPage>
</template>

<script setup lang="ts">

import CDocSection from '@/components/dashboard/CDocSection.vue';
import CPage from '@/components/dashboard/CPage.vue';
import CCard from '@/components/ui/CCard.vue';
import CIcon from '@/components/ui/CIcon.vue';

</script>

<style scoped></style>