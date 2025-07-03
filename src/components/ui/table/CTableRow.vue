<template>
    <tr class="*:first:font-medium *:first:text-neutral-800 *:text-neutral-700 dark:*:first:text-neutral-100 dark:*:text-neutral-200">
        <slot />
    </tr>
</template>

<script setup lang="ts">

import type { TableRowProps } from '@/types/components/ui/table_type';

const props = withDefaults(defineProps<TableRowProps>(), {});

</script>

<style scoped></style>