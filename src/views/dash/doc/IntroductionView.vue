<template>
    <CPage title="Introduction" without-header>

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'Introduction',
                texts: [
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi adipisci, accusamus cupiditate qui aut doloremque odio sapiente est quasi. Ratione, adipisci eligendi sit delectus aliquam eos quam. Neque, vel aspernatur?'
                ],
                componentDoc: {
                    props: [
                        {
                            name: 'Prop name 1',
                            type: 'string',
                            desc: 'Lorem dolor sit description one.',
                            allowedValues: 'default, value',
                            defaultValue: 'value'
                        },
                        {
                            name: 'Prop name 2',
                            type: 'string',
                            desc: 'Lorem dolor sit description two.',
                            allowedValues: 'default, value',
                            defaultValue: 'value'
                        }
                    ],
                    slots: [
                        {
                            name: 'Default',
                            desc: 'Lorem slot description'
                        }
                    ],
                    events: [
                        {
                            name: 'validated',
                            signature: '(validated: any) => void',
                            desc: 'Emited when lorem dolor sit'
                        }
                    ]
                }
            }
        ]">

            <template #previews>
                <CButton icon="app" label="Button text" />
            </template>

            <template #codes>
                <textarea><CButton icon="app" label="Button text" /></textarea>
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