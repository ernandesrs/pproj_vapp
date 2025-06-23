<template>
    <ul class="flex flex-col gap-1 rounded-lg">
        <slot />
    </ul>
</template>

<script setup lang="ts">

import type { ListProps } from '@/types/components/ui/list_type';

const props = withDefaults(defineProps<ListProps>(), {});

</script>

<style scoped></style>