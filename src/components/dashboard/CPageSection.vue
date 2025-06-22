<template>
    <div class="relative" :class="{
        'grid grid-cols-12 gap-6': props.withGrid,
        'p-5 sm:p-10': !props.uncontained
    }">
        <slot />
    </div>
</template>

<script setup lang="ts">

import type { PageSectionProps } from '@/types/components/dashboard/page_type';

const props = withDefaults(defineProps<PageSectionProps>(), {
    withGrid: false,
    uncontained: false
});

</script>

<style scoped></style>