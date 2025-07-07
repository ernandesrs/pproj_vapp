<template>
    <CPage title="Pages" without-header>
        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CPage',
                texts: [
                    'Page component.'
                ],
                componentDoc: {
                    slots: [
                        {
                            name: 'default',
                            desc: 'Default slot.'
                        }
                    ],
                    props: [
                        {
                            name: 'title',
                            type: 'string',
                            required: true,
                            desc: 'The page title.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'withoutHeader',
                            type: 'boolean',
                            required: false,
                            desc: 'Without page header(title, breadcrumbs, etc.).',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'loading',
                            type: 'boolean',
                            required: false,
                            desc: 'When true, a loading bar is displayed at the top.',
                            allowedValues: '---',
                            defaultValue: '---'
                        }
                    ]
                }
            }
        ]" />

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CPageSection',
                texts: [
                    'Page section component.'
                ],
                componentDoc: {
                    slots: [
                        {
                            name: 'default',
                            desc: 'Default slot.'
                        }
                    ],
                    props: [
                        {
                            name: 'withGrid',
                            type: 'boolean',
                            required: false,
                            desc: 'The page will be a 12 column grid.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'uncontained',
                            type: 'boolean',
                            required: false,
                            desc: 'When true, the page section will have no padding.',
                            allowedValues: '---',
                            defaultValue: '---'
                        }
                    ]
                }
            }
        ]" />
    </CPage>
</template>

<script setup lang="ts">

import CDocSection from '@/components/dashboard/CDocSection.vue';
import CPage from '@/components/ui/layout/CPage.vue';

</script>

<style scoped></style>