<template>
    <Transition enter-from-class="opacity-0" enter-active-class="duration-100 ease-in-out" leave-to-class="opacity-0"
        leave-active-class="duration-200 ease-out">
        <div v-if="props.show" class="absolute z-50 top-0 left-0 bg-neutral-50 dark:bg-neutral-800"
            :class="(props.customTailwindSizeClass ?? 'w-full h-full') + ' ' + (props.circle ? 'rounded-full' : 'rounded-lg')"
            style="z-index: 999;">
            <div class=" bg-gradient-to-r from-neutral-200 dark:from-neutral-900 via-neutral-100 dark:via-neutral-800
            to-neutral-100 dark:to-neutral-800 animate-pulse"
                :class="(props.customTailwindSizeClass ?? 'w-full h-full') + ' ' + (props.circle ? 'rounded-full' : 'rounded-lg')">
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">

import type { SkeletonProps } from '@/types/components/ui/skeleton_type';

const props = withDefaults(defineProps<SkeletonProps>(), {});

</script>

<style scoped></style>