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
                    events: [
                        {
                            name: 'minimize',
                            handlerSignature: '(minimized: boolean) => void',
                            desc: 'Function to handle with minimize toggle.'
                        }
                    ],
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
                        },
                        {
                            name: 'minimizable',
                            type: 'boolean',
                            required: false,
                            desc: 'Card content can be hidden.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'minimized',
                            type: 'boolean',
                            required: false,
                            desc: 'Start with card content hidden.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'loading',
                            type: 'boolean',
                            required: false,
                            desc: 'When true, puts the card in loading mode.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'globalLoading',
                            type: 'boolean',
                            required: false,
                            desc: 'The card is automatically in loading mode according to the global state.',
                            allowedValues: '---',
                            defaultValue: '---'
                        }
                    ]
                }
            }
        ]">

            <template #previews>
                <div class="flex-1 grid grid-cols-12 gap-5">

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

                    <CCard class="col-span-12" title="Minimizable card content" minimizable>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, quae numquam? Repellat,
                            voluptate soluta
                            reiciendis porro veniam ad earum veritatis commodi inventore explicabo, totam eveniet
                            voluptas dicta nulla velit
                            doloremque.</p>
                    </CCard>

                    <CCard class="col-span-12" title="Loading card content" minimizable loading>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, quae numquam? Repellat,
                            voluptate soluta
                            reiciendis porro veniam ad earum veritatis commodi inventore explicabo, totam eveniet
                            voluptas dicta nulla velit
                            doloremque.</p>
                    </CCard>

                    <CCard class="col-span-12" title="Minimizable card content" minimizable minimized>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, quae numquam? Repellat,
                            voluptate soluta
                            reiciendis porro veniam ad earum veritatis commodi inventore explicabo, totam eveniet
                            voluptas dicta nulla velit
                            doloremque.</p>
                    </CCard>

                </div>
            </template>

        </CDocSection>
    </CPage>
</template>

<script setup lang="ts">

import CDocSection from '@/components/dashboard/CDocSection.vue';
import CPage from '@/components/ui/layout/CPage.vue';
import CCard from '@/components/ui/CCard.vue';
import CIcon from '@/components/ui/CIcon.vue';

</script>

<style scoped></style>