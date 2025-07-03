<template>
    <CPage title="Tables" without-header>
        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CTable',
                texts: [
                    'A component table.'
                ],
                componentDoc: {
                    slots: [
                        {
                            'name': 'default',
                            'desc': 'Default slot.'
                        }
                    ],
                    props: [
                        {
                            name: 'header',
                            type: '{ label: string }[]',
                            required: false,
                            desc: '',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'captionTop',
                            type: 'string',
                            required: false,
                            desc: 'Table caption on top.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'captionBottom',
                            type: 'string',
                            required: false,
                            desc: 'Table caption on bottom.',
                            allowedValues: '---',
                            defaultValue: '---'
                        }
                    ]
                }
            }
        ]"></CDocSection>

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CTableRow',
                texts: [
                    'Table row component.'
                ],
                componentDoc: {
                    slots: [
                        {
                            name: 'default',
                            desc: 'Default slot.'
                        }
                    ]
                }
            }
        ]"></CDocSection>

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CTableColumn',
                texts: [
                    'Table column component'
                ],
                componentDoc: {
                    slots: [
                        {
                            name: 'default',
                            desc: 'Default slot. You can enter the content in this slot, or alternatively, inform via property <b>value</b>'
                        }
                    ],
                    props: [
                        {
                            name: 'th',
                            type: 'boolean',
                            required: false,
                            desc: '',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'value',
                            type: 'string, number, null',
                            required: false,
                            desc: 'You can either use the content in this property, or alternatively use the default component slot.',
                            allowedValues: '---',
                            defaultValue: '---'
                        }
                    ]
                }
            }
        ]"></CDocSection>

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CTableGroup',
                texts: [
                    'Table group. Use this component to create groups of rows in the table.'
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
                            name: 'label',
                            type: 'string',
                            required: true,
                            desc: 'Group label.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'colspan',
                            type: 'number',
                            required: true,
                            desc: 'Number of columns to merge.',
                            allowedValues: '---',
                            defaultValue: '---'
                        }
                    ]
                }
            }
        ]"></CDocSection>

        <CDocSection :data="[
            {
                tag: 'h2',
                title: 'Examples'
            }
        ]">

            <template #previews>
                <div class="flex-1 grid grid-cols-12 gap-6">

                    <CTable class="col-span-12" :header="[
                        {
                            label: 'Name'
                        },
                        {
                            label: 'DoB'
                        },
                        {
                            label: 'Role'
                        },
                        {
                            label: 'Salary'
                        }
                    ]">

                        <CTableRow v-for="item in tableItemsA">
                            <CTableColumn :value="item.name" />
                            <CTableColumn :value="item.birthdate" />
                            <CTableColumn :value="item.title" />
                            <CTableColumn :value="item.earnings" />
                        </CTableRow>

                    </CTable>

                    <CTable class="col-span-12" :header="[
                        {
                            label: 'Name'
                        },
                        {
                            label: 'DoB'
                        },
                        {
                            label: 'Role'
                        },
                        {
                            label: 'Salary'
                        }
                    ]">

                        <CTableGroup label="Subitems #1" :colspan="4">
                            <CTableRow v-for="item in tableItemsA">
                                <CTableColumn :value="item.name" />
                                <CTableColumn :value="item.birthdate" />
                                <CTableColumn :value="item.title" />
                                <CTableColumn :value="item.earnings" />
                            </CTableRow>
                        </CTableGroup>

                        <CTableGroup label="Subitems #2" :colspan="4">
                            <CTableRow v-for="item in tableItemsB">
                                <CTableColumn :value="item.name" />
                                <CTableColumn :value="item.birthdate" />
                                <CTableColumn :value="item.title" />
                                <CTableColumn :value="item.earnings" />
                            </CTableRow>
                        </CTableGroup>

                    </CTable>

                </div>
            </template>

        </CDocSection>

    </CPage>
</template>

<script setup lang="ts">

import CDocSection from '@/components/dashboard/CDocSection.vue';
import CPage from '@/components/dashboard/CPage.vue';
import CCard from '@/components/ui/CCard.vue';
import CTable from '@/components/ui/table/CTable.vue';
import CTableColumn from '@/components/ui/table/CTableColumn.vue';
import CTableGroup from '@/components/ui/table/CTableGroup.vue';
import CTableRow from '@/components/ui/table/CTableRow.vue';

const tableItemsA = [
    {
        "name": "Nandor the Relentless",
        "birthdate": "04/06/1262",
        "title": "Vampire Warrior",
        "earnings": "$0"
    },
    {
        "name": "Lasly Shown",
        "birthdate": "19/10/1678",
        "title": "Vampire Gentleman",
        "earnings": "$0"
    },
    {
        "name": "Laszlo Cravensworth",
        "birthdate": "19/10/1678",
        "title": "Vampire Gentleman",
        "earnings": "$0"
    },
    {
        "name": "John Worth Cravens",
        "birthdate": "19/10/1678",
        "title": "Vampire Gentleman",
        "earnings": "$0"
    }
];

const tableItemsB = [
    {
        "name": "Nadja",
        "birthdate": "15/03/1593",
        "title": "Vampire Seductress",
        "earnings": "$0"
    },
    {
        "name": "Colin Robinson",
        "birthdate": "01/09/1971",
        "title": "Energy Vampire",
        "earnings": "$53,000"
    },
    {
        "name": "Guillermo de la Cruz",
        "birthdate": "18/11/1991",
        "title": "Familiar/Vampire Hunter",
        "earnings": "$0"
    },
    {
        "name": "Robin Son Colin",
        "birthdate": "01/09/1971",
        "title": "Energy Vampire",
        "earnings": "$53,000"
    },
];

</script>

<style scoped></style>