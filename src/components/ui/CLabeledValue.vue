<template>
    <div class="inline-flex gap-1" :class="{
        'flex-col items-start': !inline,
        'items-center': inline
    }">
        <span class="inline-block text-nowrap font-medium text-neutral-600 dark:text-neutral-400">
            <slot name="prepend" />
            {{ props.label }}
        </span>
        <span v-if="!props.loading"
            class="w-full inline-block text-nowrap truncate text-neutral-700 dark:text-neutral-200">{{ props.value
            }}</span>
        <CSkeleton v-else height="h-[20px]" class="mt-1" />
    </div>
</template>

<script setup lang="ts">

import type { LabeledValueProps } from '@/types/components/ui/labeled_value_type';
import CSkeleton from './CSkeleton.vue';

const props = withDefaults(defineProps<LabeledValueProps>(), {});

</script>

<style scoped></style>