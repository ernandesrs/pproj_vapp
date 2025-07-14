<template>
    <CPage title="Skeletons" without-header>
        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CSkeleton and CSkeletonText',
                texts: [
                    'The two components, to be used to show the user that content is loading.',
                ]
            }
        ]" />

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CSkeleton',
                texts: [
                    'By default it occupies 100% of the container, for this, the container needs to have a pre-defined size, but its size can be customized via the <i>prop <b>width</b></i> and <i><b>height</b></i>, which must be a valid Tailwind CSS class.',
                    'See more details below.'
                ],
                componentDoc: {
                    props: [
                        {
                            name: 'variant',
                            type: 'string',
                            required: false,
                            desc: 'Skeleton variant.',
                            allowedValues: 'text, circle, rect',
                            defaultValue: 'rect'
                        },
                        {
                            name: 'width',
                            type: 'string',
                            required: false,
                            desc: 'Custom width size. Requires a valid Tailwind CSS class.',
                            allowedValues: 'w-*',
                            defaultValue: 'w-full'
                        },
                        {
                            name: 'height',
                            type: 'string',
                            required: false,
                            desc: 'Custom height size. Requires a valid Tailwind CSS class.',
                            allowedValues: 'h-*',
                            defaultValue: 'h-full'
                        }
                    ]
                }
            }
        ]">
            <template #previews>
                <div class="flex-1 grid grid-cols-12 gap-8">

                    <div class="col-span-12 md:col-span-4 xl:col-span-5">
                        <div class="font-medium mb-2.5 text-neutral-400 dark:text-neutral-500">
                            Filled container
                        </div>

                        <CSkeleton />

                    </div>

                    <div class="col-span-6 md:col-span-4 xl:col-span-2">
                        <div class="font-medium mb-2.5 text-neutral-400 dark:text-neutral-500">
                            Custom size
                        </div>

                        <CSkeleton height="h-16" />

                    </div>

                    <div class="col-span-6 md:col-span-4 xl:col-span-2">
                        <div class="font-medium mb-2.5 text-neutral-400 dark:text-neutral-500">
                            Circle
                        </div>

                        <CSkeleton width="w-16" height="h-16" variant="circle" />

                    </div>

                    <div class="col-span-6 md:col-span-4 xl:col-span-3">
                        <div class="font-medium mb-2.5 text-neutral-400 dark:text-neutral-500">
                            Text
                        </div>

                        <div class="relative flex flex-wrap gap-y-2.5">
                            <CSkeleton width="w-full" variant="text" />
                            <CSkeleton width="w-full" variant="text" />
                            <CSkeleton width="w-11/12" variant="text" />
                            <CSkeleton width="w-10/12" variant="text" />
                        </div>

                    </div>

                </div>
            </template>

            <template #codes>
                <textarea>
                        <!-- Filled container -->
                        <CSkeleton />

                        <!-- Custom size -->
                        <CSkeleton height="h-16" />

                        <!-- Circle -->
                        <CSkeleton width="w-16" height="h-16" variant="circle" />
                    
                        <!-- Text -->
                        <CSkeleton width="w-full" variant="text" />
                    
                        <!-- Group text -->
                        <CSkeleton width="w-full" variant="text" />
                        <CSkeleton width="w-full" variant="text" />
                        <CSkeleton width="w-11/12" variant="text" />
                        <CSkeleton width="w-10/12" variant="text" /></textarea>
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
                            name: 'lines',
                            type: 'number, string[]',
                            required: false,
                            desc: 'Number of rows or an array of strings, where each string is a valid Tailwind CSS class indicating the width of each row.',
                            allowedValues: 'Number or array of strings, where each string is a w-*.',
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

                    <div class="col-span-6 lg:col-span-6 xl:col-span-4">
                        <div class="font-medium mb-2.5 text-neutral-400 dark:text-neutral-500">
                            Text default
                        </div>

                        <CSkeletonText :lines="4" />

                    </div>

                    <div class="col-span-6 lg:col-span-6 xl:col-span-4">
                        <div class="font-medium mb-2.5 text-neutral-400 dark:text-neutral-500">
                            Text with custom widths
                        </div>

                        <CSkeletonText :lines="['w-full', 'w-11/12', 'w-11/12', 'w-10/12']" />

                    </div>

                    <div class="col-span-12 xl:col-span-4">
                        <div class="font-medium mb-2.5 text-neutral-400 dark:text-neutral-500">
                            Text custom height and gap
                        </div>

                        <CSkeletonText :lines="3" line-height="h-4" line-gap="gap-5" />

                    </div>

                </div>
            </template>
            <template #codes>
                <textarea>
                        <!-- Text default -->
                        <CSkeletonText :lines="4" />

                        <!-- Text with custom widths -->
                        <CSkeletonText :lines="['w-full', 'w-11/12', 'w-11/12', 'w-10/12']" />
                    
                        <!-- Text custom height and gap -->
                         <CSkeletonText :lines="3" line-height="h-4" line-gap="gap-5" />
                    </textarea>
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