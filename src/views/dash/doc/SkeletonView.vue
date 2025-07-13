<template>
    <CPage title="Skeletons" without-header>
        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CSkeleton'
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

                        <div class="relative">
                            <CSkeletonText show :lines="3" line-height="h-4" line-gap="gap-4" />
                        </div>

                    </div>

                </div>
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