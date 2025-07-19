<template>
    <CPage title="Dropdowns" without-header>

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CDropdown',
                texts: [
                    'Dropdownn component.'
                ],
                componentDoc: {
                    slots: [
                        {
                            name: 'default',
                            desc: 'Default slot.'
                        },
                        {
                            name: 'activator',
                            desc: 'Slot to a custom dropdown activator.'
                        }
                    ],
                    props: [
                        {
                            name: 'activatorLabel',
                            type: 'string',
                            required: false,
                            desc: 'A label to default activator button.',
                            allowedValues: '---',
                            defaultValue: 'Dropdown'
                        },
                        {
                            name: 'width',
                            type: 'string',
                            required: false,
                            desc: 'Dropdown content width. Requires a valid Tailwind CSS class.',
                            allowedValues: 'w-*, *:w-*, max-w-*,*:max-w-*',
                            defaultValue: 'w-full'
                        },
                        {
                            name: 'location',
                            type: 'string',
                            required: false,
                            desc: 'Dropdown content location.',
                            allowedValues: 'left, center, right, top-left, top-center, top-right',
                            defaultValue: 'left'
                        }
                    ]
                }
            }
        ]">

            <template #previews>

                <CDropdown width="w-[200px] sm:w-[225px] lg:w-[325px]">
                    <template #activator>
                        <CButton icon="person-circle" label="Profile" />
                    </template>

                    <CCard>
                        <div class="flex items-center gap-2.5">
                            <CSkeleton width="w-16" height="h-16" variant="circle" />
                            <div class="flex-1 flex flex-col gap-y-4">
                                <CSkeleton width="w-full" height="h-6" variant="rect" />
                                <CSkeleton width="w-10/12" height="h-2" variant="rect" />
                            </div>
                        </div>
                    </CCard>
                </CDropdown>

                <CDropdown width="w-[425px]" location="top-right">
                    <template #activator>
                        <CButton icon="rocket-fill" label="Top right dropdown" />
                    </template>

                    <CCard>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nobis esse quidem. Vero
                            aspernatur culpa
                            dolor, nostrum quia consectetur tenetur repellendus veniam doloremque, repudiandae autem
                            tempora animi alias
                            sequi fugit?
                        </p>
                    </CCard>
                </CDropdown>

            </template>

            <template #codes>
                <textarea>
                <CDropdown width="w-[200px] sm:w-[225px] lg:w-[325px]">
                    <template #activator>
                        <CButton icon="person-circle" label="Profile" />
                    </template>

                    <CCard>
                        <div class="flex items-center gap-2.5">
                            <CSkeleton width="w-16" height="h-16" variant="circle" />
                            <div class="flex-1 flex flex-col gap-y-4">
                                <CSkeleton width="w-full" height="h-6" variant="rect" />
                                <CSkeleton width="w-10/12" height="h-2" variant="rect" />
                            </div>
                        </div>
                    </CCard>
                </CDropdown>

                <CDropdown width="w-[425px]" location="top-right">
                    <template #activator>
                        <CButton icon="rocket-fill" label="Top right dropdown" />
                    </template>

                    <CCard>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nobis esse quidem. Vero
                            aspernatur culpa
                            dolor, nostrum quia consectetur tenetur repellendus veniam doloremque, repudiandae autem
                            tempora animi alias
                            sequi fugit?
                        </p>
                    </CCard>
                </CDropdown></textarea>
            </template>

        </CDocSection>

    </CPage>
</template>

<script setup lang="ts">

import CDocSection from '@/components/dashboard/CDocSection.vue';
import CButton from '@/components/ui/CButton.vue';
import CCard from '@/components/ui/CCard.vue';
import CDropdown from '@/components/ui/CDropdown.vue';
import CSkeleton from '@/components/ui/CSkeleton.vue';
import CPage from '@/components/ui/layout/CPage.vue';

</script>

<style scoped></style>