<template>
    <CPage title="Texts" without-header>

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CLabeledValue',
                texts: [],
                componentDoc: {
                    slots: [
                        {
                            name: 'prepend',
                            desc: 'Prepend label slot.'
                        }
                    ],
                    props: [
                        {
                            name: 'label',
                            type: 'string',
                            required: true,
                            desc: 'Value label.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'value',
                            type: 'string',
                            required: true,
                            desc: 'Labeled value.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'loading',
                            type: 'boolean',
                            required: false,
                            desc: 'Loading mode.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'inline',
                            type: 'boolean',
                            required: false,
                            desc: 'Inline: label on left, value on right.',
                            allowedValues: '---',
                            defaultValue: '---'
                        }
                    ]
                }
            }
        ]">

            <template #previews>

                <div class="grid grid-cols-12 gap-6">

                    <CLabeledValue class="col-span-12" label="E-mail:" value="lorememail@mail.com" inline />
                    <CLabeledValue class="col-span-4" label="E-mail:" value="lorememail@mail.com" />
                    <CLabeledValue class="col-span-4" label="Loading:" value="lorememail@mail.com" loading />

                </div>

            </template>

            <template #codes>
                <textarea>
                <div class="grid grid-cols-12 gap-6">

                    <CLabeledValue class="col-span-12" label="E-mail:" value="lorememail@mail.com" inline />
                    <CLabeledValue class="col-span-4" label="E-mail:" value="lorememail@mail.com" />
                    <CLabeledValue class="col-span-4" label="Loading:" value="lorememail@mail.com" loading />

                </div></textarea>
            </template>

        </CDocSection>

    </CPage>
</template>

<script setup lang="ts">

import CDocSection from '@/components/dashboard/CDocSection.vue';
import CLabeledValue from '@/components/ui/CLabeledValue.vue';
import CPage from '@/components/ui/layout/CPage.vue';

</script>

<style scoped></style>