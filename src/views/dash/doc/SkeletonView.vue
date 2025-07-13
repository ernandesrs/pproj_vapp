<template>
    <CPage title="Skeletons" without-header>
        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CSkeleton and CSkeletonText',
                texts: [
                    'The two components, to be used to show the user that content is loading.',
                    'The components has a <i><b>position: absolute</b></i> and a <i><b>z-index: 999</b></i>, so it needs to be placed inside a container with <i><b>position: relative</b></i>, and all content inside this container will be overlapped by the <i><b>skeleton</b></i>.',
                ]
            }
        ]" />

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CSkeleton',
                texts: [
                    'By default, it occupies 100% of the container, but its size can be customized via the <i>prop <b>customTailwindSizeClass</b></i>, which must be a valid Tailwind CSS class.',
                    'See more details below.'
                ],
                componentDoc: {
                    props: [
                        {
                            name: 'show',
                            type: 'boolean',
                            required: false,
                            desc: 'When true, the skeleton is displayed.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'circle',
                            type: 'boolean',
                            required: false,
                            desc: 'When true, the skeleton is a circle.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'customTailwindSizeClass',
                            type: 'string',
                            required: false,
                            desc: 'Custom size. Requires a valid Tailwind CSS class.',
                            allowedValues: '---',
                            defaultValue: 'w-full h-full'
                        }
                    ]
                }
            }
        ]">
            <template #previews>
                <div class="flex-1 grid grid-cols-12 gap-8">

                    <div class="col-span-12 md:col-span-4 xl:col-span-8">
                        <div class="font-medium mb-2.5 text-neutral-400 dark:text-neutral-500">
                            Filled container
                        </div>

                        <div class="w-full h-16 relative">
                            <CSkeleton show />
                        </div>

                    </div>

                    <div class="col-span-6 md:col-span-4 xl:col-span-2">
                        <div class="font-medium mb-2.5 text-neutral-400 dark:text-neutral-500">
                            Custom size
                        </div>

                        <div class="relative">
                            <CSkeleton show custom-tailwind-size-class="w-28 h-16" />
                        </div>

                    </div>

                    <div class="col-span-6 md:col-span-4 xl:col-span-2">
                        <div class="font-medium mb-2.5 text-neutral-400 dark:text-neutral-500">
                            Circle
                        </div>

                        <div class="relative">
                            <CSkeleton show custom-tailwind-size-class="size-16" circle />
                        </div>

                    </div>

                </div>
            </template>

            <template #codes>
                <textarea>
                        <!-- Filled container -->
                        <div class="w-full h-16 relative">
                            <CSkeleton show />
                        </div>

                        <!-- Custom size -->
                        <div class="relative">
                            <CSkeleton show custom-tailwind-size-class="w-28 h-16" />
                        </div>

                        <!-- Circle -->
                        <div class="relative">
                            <CSkeleton show custom-tailwind-size-class="size-16" circle />
                        </div></textarea>
            </template>
        </CDocSection>

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CSkeletonText',
                texts: [
                    'Skeleton component for texts/paragraphs.',
                    'You can customize the quantity, height and space between lines, see the properties below.'
                ],
                componentDoc: {
                    props: [
                        {
                            name: 'show',
                            type: 'boolean',
                            required: false,
                            desc: 'When true, the skeleton is displayed.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'lines',
                            type: 'number',
                            required: false,
                            desc: 'Number of lines.',
                            allowedValues: '---',
                            defaultValue: '1'
                        },
                        {
                            name: 'lineHeight',
                            type: 'string',
                            required: false,
                            desc: 'Height of each row. Requires a valid Tailwind CSS class.',
                            allowedValues: 'h-*',
                            defaultValue: 'h-2'
                        },
                        {
                            name: 'lineGap',
                            type: 'string',
                            required: false,
                            desc: 'Spacing between each line. Requires a valid Tailwind CSS class.',
                            allowedValues: 'gap-*, gap-y-*',
                            defaultValue: 'gap-2.5'
                        }
                    ]
                }
            }
        ]">
            <template #previews>
                <div class="flex-1 grid grid-cols-12 gap-8">

                    <div class="col-span-6 md:col-span-4 xl:col-span-6">
                        <div class="font-medium mb-2.5 text-neutral-400 dark:text-neutral-500">
                            Text default
                        </div>

                        <div class="relative">
                            <CSkeletonText show :lines="5" />
                        </div>

                    </div>

                    <div class="col-span-6 md:col-span-4 xl:col-span-6">
                        <div class="font-medium mb-2.5 text-neutral-400 dark:text-neutral-500">
                            Text custom height and gap
                        </div>

                        <div class="relative h-[90px]">
                            <CSkeletonText show :lines="3" line-height="h-4" line-gap="gap-4" />
                        </div>

                    </div>

                </div>
            </template>
            <template #codes>
                <textarea>
                        <!-- Text default -->
                        <div class="relative">
                            <CSkeletonText show :lines="5" />
                        </div>

                        <!-- Text custom height and gap -->
                        <div class="relative">
                            <CSkeletonText show :lines="3" line-height="h-4" line-gap="gap-4" />
                        </div></textarea>
            </template>
        </CDocSection>
    </CPage>
</template>

<script setup lang="ts">

import CDocSection from '@/components/dashboard/CDocSection.vue';
import CSkeleton from '@/components/ui/CSkeleton.vue';
import CSkeletonText from '@/components/ui/CSkeletonText.vue';
import CPage from '@/components/ui/layout/CPage.vue';

</script>

<style scoped></style>