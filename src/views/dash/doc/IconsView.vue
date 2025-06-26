<template>
    <CPage title="Icons" without-header>

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CIcon',
                texts: [
                ],
                componentDoc: {
                    props: [
                        {
                            name: 'name',
                            type: 'string',
                            required: true,
                            desc: 'Icon class name. Requires a valid <b>Bootstrap Icons</b> class name. Access <i>(https://icons.getbootstrap.com)</i>.',
                            defaultValue: 'app'
                        },
                        {
                            name: 'prepend',
                            type: 'boolean',
                            required: false,
                            desc: 'If true, applies a margin to the right.'
                        },
                        {
                            name: 'append',
                            type: 'boolean',
                            required: false,
                            desc: 'If true, applies a margin to the left.'
                        }
                    ]
                }
            }
        ]">

        </CDocSection>

    </CPage>
</template>

<script setup lang="ts">

import CDocSection from '@/components/dashboard/CDocSection.vue';
import CPage from '@/components/dashboard/CPage.vue';

</script>

<style scoped></style>