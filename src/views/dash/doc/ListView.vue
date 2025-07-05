<template>
    <CPage title="Icons" without-header>

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CList',
                texts: [
                    'Componente para listagem de itens.'
                ],
                componentDoc: {
                    props: [
                        {
                            name: 'items',
                            type: 'ListItem[]',
                            required: false,
                            desc: 'List items data.',
                            allowedValues: 'Array of ListItem'
                        }
                    ],
                    slots: [
                        {
                            name: 'default',
                            desc: 'You can set the list items via the <b>items</b> property, but if you prefer, you can inject the list items here using the <b>CListItem</b> component.'
                        }
                    ]
                }
            }
        ]">

            <template #previews>
                <div class="grid grid-cols-12 gap-6 w-full">

                    <CList class="col-span-12 sm:col-span-6 lg:col-span-4" :items="[
                        {
                            label: 'List item #1',
                        },
                        {
                            label: 'List item #2',
                        },
                        {
                            label: 'List item #3'
                        }
                    ]" />

                    <CList class="col-span-12 sm:col-span-6 lg:col-span-4" :items="[
                        {
                            label: 'List item #1',
                            description: 'List item with icon and description',
                            icon: 'rocket-takeoff'
                        },
                        {
                            label: 'List item #2',
                            description: 'List item with icon and description',
                            icon: 'rocket-takeoff'
                        },
                        {
                            label: 'List item #3',
                            description: 'List item with icon and description',
                            icon: 'rocket-takeoff'
                        }
                    ]" />

                    <CList class="col-span-12 sm:col-span-6 lg:col-span-4" :items="[
                        {
                            label: 'List item #1',
                            description: 'List item with description and icons',
                            icon: 'rocket-takeoff',
                            appendIcon: 'arrow-right'
                        },
                        {
                            label: 'List item #2',
                            description: 'List item with description and icons',
                            icon: 'rocket-takeoff',
                            appendIcon: 'arrow-right'
                        },
                        {
                            label: 'List item #3',
                            description: 'List item with description and icons',
                            icon: 'rocket-takeoff',
                            appendIcon: 'arrow-right'
                        }
                    ]" />

                    <CList class="col-span-12 sm:col-span-6 lg:col-span-4" :items="[
                        {
                            label: 'List item #1',
                            description: 'List item as a Vue Router link',
                            asLink: {
                                to: '#'
                            },
                            icon: 'rocket-takeoff'
                        },
                        {
                            label: 'List item #2',
                            description: 'List item as a Vue Router link',
                            asLink: {
                                to: '#'
                            },
                            icon: 'rocket-takeoff'
                        },
                        {
                            label: 'List item #3',
                            description: 'List item as a Vue Router link',
                            asLink: {
                                to: '#'
                            },
                            icon: 'rocket-takeoff'
                        }
                    ]" />

                    <CList class="col-span-12 sm:col-span-6 lg:col-span-4" :items="[
                        {
                            label: 'List item #1',
                            description: 'List item as a external link',
                            asLink: {
                                href: 'https://github.com/ernandesrs',
                                target: '_blank'
                            },
                            icon: 'rocket-takeoff'
                        },
                        {
                            label: 'List item #2',
                            description: 'List item as a external link',
                            asLink: {
                                href: 'https://github.com/ernandesrs',
                                target: '_blank'
                            },
                            icon: 'rocket-takeoff'
                        },
                        {
                            label: 'List item #3',
                            description: 'List item as a external link',
                            asLink: {
                                href: 'https://github.com/ernandesrs',
                                target: '_blank'
                            },
                            icon: 'rocket-takeoff'
                        }
                    ]" />

                </div>
            </template>

            <template #codes>
                <textarea>
                <CList class="col-span-12 sm:col-span-6 lg:col-span-4" :items="[
                        {
                            label: 'List item #1',
                        },
                        {
                            label: 'List item #2',
                        },
                        {
                            label: 'List item #3'
                        }
                    ]" />

                <CList class="col-span-12 sm:col-span-6 lg:col-span-4" :items="[
                        {
                            label: 'List item #1',
                            description: 'List item with icon and description',
                            icon: 'rocket-takeoff'
                        },
                        {
                            label: 'List item #2',
                            description: 'List item with icon and description',
                            icon: 'rocket-takeoff'
                        },
                        {
                            label: 'List item #3',
                            description: 'List item with icon and description',
                            icon: 'rocket-takeoff'
                        }
                    ]" />

                <CList class="col-span-12 sm:col-span-6 lg:col-span-4" :items="[
                        {
                            label: 'List item #1',
                            description: 'List item with description and icons',
                            icon: 'rocket-takeoff',
                            appendIcon: 'arrow-right'
                        },
                        {
                            label: 'List item #2',
                            description: 'List item with description and icons',
                            icon: 'rocket-takeoff',
                            appendIcon: 'arrow-right'
                        },
                        {
                            label: 'List item #3',
                            description: 'List item with description and icons',
                            icon: 'rocket-takeoff',
                            appendIcon: 'arrow-right'
                        }
                    ]" />

                <CList class="col-span-12 sm:col-span-6 lg:col-span-4" :items="[
                        {
                            label: 'List item #1',
                            description: 'List item as a Vue Router link',
                            asLink: {
                                to: '#'
                            },
                            icon: 'rocket-takeoff'
                        },
                        {
                            label: 'List item #2',
                            description: 'List item as a Vue Router link',
                            asLink: {
                                to: '#'
                            },
                            icon: 'rocket-takeoff'
                        },
                        {
                            label: 'List item #3',
                            description: 'List item as a Vue Router link',
                            asLink: {
                                to: '#'
                            },
                            icon: 'rocket-takeoff'
                        }
                    ]" />

                <CList class="col-span-12 sm:col-span-6 lg:col-span-4" :items="[
                        {
                            label: 'List item #1',
                            description: 'List item as a external link',
                            asLink: {
                                href: 'https://github.com/ernandesrs',
                                target: '_blank'
                            },
                            icon: 'rocket-takeoff'
                        },
                        {
                            label: 'List item #2',
                            description: 'List item as a external link',
                            asLink: {
                                href: 'https://github.com/ernandesrs',
                                target: '_blank'
                            },
                            icon: 'rocket-takeoff'
                        },
                        {
                            label: 'List item #3',
                            description: 'List item as a external link',
                            asLink: {
                                href: 'https://github.com/ernandesrs',
                                target: '_blank'
                            },
                            icon: 'rocket-takeoff'
                        }
                    ]" />
                </textarea>
            </template>

        </CDocSection>

    </CPage>
</template>

<script setup lang="ts">

import CDocSection from '@/components/dashboard/CDocSection.vue';
import CPage from '@/components/ui/layout/CPage.vue';
import CList from '@/components/ui/CList.vue';

</script>

<style scoped></style>