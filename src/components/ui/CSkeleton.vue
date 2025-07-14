<template>
    <div class="bg-gradient-to-r from-neutral-400 via-neutral-50 to-neutral-400 dark:from-neutral-900 dark:via-neutral-700 dark:to-neutral-900 overflow-hidden"
        :class="variantClasses">
        <div :class="[
            'w-full h-full animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-100 dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-700'
        ]"></div>
    </div>
</template>

<script setup lang="ts">

import type { SkeletonProps } from '@/types/components/ui/skeleton_type';
import { computed } from 'vue';

const props = withDefaults(defineProps<SkeletonProps>(), {
    variant: 'rect',
    width: 'w-full',
    height: undefined,
    customClass: '',
});

const variantClasses = computed(() => {
    switch (props.variant) {
        case 'circle':
            return `rounded-full ${props.width} ${props.height}`;
        case 'text':
            return `rounded ${props.width} ${props.variant == 'text' ? props.height ?? 'h-[11px]' : props.height}`;
        case 'rect':
        default:
            return `rounded ${props.width} ${props.height ?? 'h-full'}`;
    }
});

</script>

<style scoped></style>