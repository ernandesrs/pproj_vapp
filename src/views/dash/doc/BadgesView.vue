<template>
    <CPage title="Badges" without-header>

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CBadge',
                texts: [],
                componentDoc: {
                    props: [
                        {
                            name: 'color',
                            type: 'BadgeColor',
                            required: false,
                            desc: '',
                            allowedValues: 'default, success, info, warning, danger',
                            defaultValue: 'default'
                        },
                        {
                            name: 'label',
                            type: 'string',
                            required: true,
                            desc: '',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'icon',
                            type: 'string',
                            required: false,
                            desc: 'A valid Bootstrap Icon class name.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'appendIcon',
                            type: 'string',
                            required: false,
                            desc: 'Append icon. A valid Bootstrap Icon class name.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'variant',
                            type: 'BadgeVariant',
                            required: false,
                            desc: '',
                            allowedValues: 'filled, outlined',
                            defaultValue: 'filled'
                        }
                    ],
                    slots: [
                        {
                            name: 'prepend',
                            desc: 'A prepend element.',
                        },
                        {
                            name: 'append',
                            desc: 'A append element',
                        }
                    ],
                    events: [
                        {
                            name: 'click:prepend',
                            handlerSignature: '() => void',
                            desc: 'Dispatched when prepend element is clicked.'
                        },
                        {
                            name: 'click:append',
                            handlerSignature: '() => void',
                            desc: 'Dispatched when append element is clicked.'
                        }
                    ]
                }
            }
        ]">

            <template #previews>
                <CBadge label="Badge texts" />
                <CBadge label="Badge texts" icon="check2-circle" />
                <CBadge label="Badge texts" append-icon="check2-circle" />
                <CBadge label="Badge texts" icon="check2-circle" append-icon="check2-circle"
                    @click:prepend="console.log('prepend clicked')" @click:append="console.log('append clicked')" />

                <CBadge label="Default" color="default" icon="check2-all" />
                <CBadge label="Success" color="success" icon="check2-all" />
                <CBadge label="Info" color="info" icon="check2-all" />
                <CBadge label="Warning" color="warning" icon="check2-all" />
                <CBadge label="Danger" color="danger" icon="check2-all" />

                <CBadge label="Default" color="default" variant="outlined" icon="check2-all" />
                <CBadge label="Success" color="success" variant="outlined" icon="check2-all" />
                <CBadge label="Info" color="info" variant="outlined" icon="check2-all" />
                <CBadge label="Warning" color="warning" variant="outlined" icon="check2-all" />
                <CBadge label="Danger" color="danger" variant="outlined" icon="check2-all" />
            </template>

            <template #codes>
                <textarea>
                <CBadge label="Badge texts" />
                <CBadge label="Badge texts" icon="check2-circle" />
                <CBadge label="Badge texts" append-icon="check2-circle" />
                <CBadge label="Badge texts" icon="check2-circle" append-icon="check2-circle"
                    @click:prepend="console.log('prepend clicked')" @click:append="console.log('append clicked')" />

                <CBadge label="Default" color="default" icon="check2-all" />
                <CBadge label="Success" color="success" icon="check2-all" />
                <CBadge label="Info" color="info" icon="check2-all" />
                <CBadge label="Warning" color="warning" icon="check2-all" />
                <CBadge label="Danger" color="danger" icon="check2-all" />

                <CBadge label="Default" color="default" variant="outlined" icon="check2-all" />
                <CBadge label="Success" color="success" variant="outlined" icon="check2-all" />
                <CBadge label="Info" color="info" variant="outlined" icon="check2-all" />
                <CBadge label="Warning" color="warning" variant="outlined" icon="check2-all" />
                <CBadge label="Danger" color="danger" variant="outlined" icon="check2-all" />
                </textarea>
            </template>

        </CDocSection>

    </CPage>
</template>

<script setup lang="ts">

import CDocSection from '@/components/dashboard/CDocSection.vue';
import CPage from '@/components/ui/layout/CPage.vue';
import CBadge from '@/components/ui/CBadge.vue';

</script>

<style scoped></style>