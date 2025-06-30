<template>
    <CPage title="Introduction" without-header>

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'Buttons',
                texts: [
                ],
                componentDoc: {
                    props: [
                        {
                            name: 'type',
                            type: 'string',
                            desc: 'Button type.',
                            allowedValues: 'button, submit',
                            defaultValue: 'button'
                        },
                        {
                            name: 'label',
                            type: 'string',
                            desc: 'Button label/text.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'color',
                            type: 'string',
                            desc: 'Button color.',
                            allowedValues: 'primary, secondary, success, info, warning, danger, light, dark',
                            defaultValue: 'primary'
                        },
                        {
                            name: 'variant',
                            type: 'string',
                            desc: 'Button variant.',
                            allowedValues: 'filled, text',
                            defaultValue: 'filled'
                        },
                        {
                            name: 'icon',
                            type: 'string',
                            desc: 'Button prepend icon. Requires a valid Bootstrap Icon name. See Bootstrap icons documentation for names.',
                            allowedValues: '---',
                            defaultValue: 'app'
                        },
                        {
                            name: 'appendIcon',
                            type: 'string',
                            desc: 'Button append icon. Requires a valid Bootstrap Icon name. See Bootstrap icons documentation for names.',
                            allowedValues: '---',
                            defaultValue: 'app'
                        },
                        {
                            name: 'loading',
                            type: 'boolean',
                            desc: 'Set button in loading mode.',
                            allowedValues: '---',
                            defaultValue: 'false'
                        },
                        {
                            name: 'circle',
                            type: 'boolean',
                            desc: 'Full rounded button.',
                            allowedValues: '---',
                            defaultValue: 'false'
                        },
                    ]
                }
            }
        ]">

            <template #previews>
                <CButton icon="app" />
                <CButton icon="app" circle />
                <CButton label="Button" />
                <CButton label="Loading" loading />
                <CButton icon="arrow-left" label="Prepend icon" />
                <CButton append-icon="arrow-right" label="Append icon" />
                <CButton icon="arrow-left" append-icon="arrow-right" label="Two icon" />

                <CButton label="Primary filled" color="primary" variant="filled" />
                <CButton label="Primary text" color="primary" variant="text" />

                <CButton label="Secondary filled" color="secondary" variant="filled" />
                <CButton label="Secondary text" color="secondary" variant="text" />

                <CButton label="Info filled" color="info" variant="filled" />
                <CButton label="Info text" color="info" variant="text" />

                <CButton label="Success filled" color="success" variant="filled" />
                <CButton label="Success text" color="success" variant="text" />

                <CButton label="Warning filled" color="warning" variant="filled" />
                <CButton label="Warning text" color="warning" variant="text" />

                <CButton label="Danger filled" color="danger" variant="filled" />
                <CButton label="Danger text" color="danger" variant="text" />

                <CButton label="Dark filled" color="dark" variant="filled" />
                <CButton label="Dark text" color="dark" variant="text" />

                <CButton label="Light filled" color="light" variant="filled" />
                <CButton label="Light text" color="light" variant="text" />
            </template>

            <template #codes>
                <textarea>
                <CButton icon="app" />
                <CButton icon="app" circle />
                <CButton label="Button" />
                <CButton label="Loading" loading />
                <CButton icon="arrow-left" label="Prepend icon" />
                <CButton append-icon="arrow-right" label="Append icon" />
                <CButton icon="arrow-left" append-icon="arrow-right" label="Two icon" />

                <CButton label="Primary filled" color="primary" variant="filled" />
                <CButton label="Primary text" color="primary" variant="text" />

                <CButton label="Secondary filled" color="secondary" variant="filled" />
                <CButton label="Secondary text" color="secondary" variant="text" />

                <CButton label="Info filled" color="info" variant="filled" />
                <CButton label="Info text" color="info" variant="text" />

                <CButton label="Warning filled" color="warning" variant="filled" />
                <CButton label="Warning text" color="warning" variant="text" />

                <CButton label="Danger filled" color="danger" variant="filled" />
                <CButton label="Danger text" color="danger" variant="text" />

                <CButton label="Dark filled" color="dark" variant="filled" />
                <CButton label="Dark text" color="dark" variant="text" />

                <CButton label="Light filled" color="light" variant="filled" />
                <CButton label="Light text" color="light" variant="text" /></textarea>
            </template>

        </CDocSection>

    </CPage>
</template>

<script setup lang="ts">

import CDocSection from '@/components/dashboard/CDocSection.vue';
import CPage from '@/components/dashboard/CPage.vue';
import CButton from '@/components/ui/CButton.vue';

</script>

<style scoped></style>