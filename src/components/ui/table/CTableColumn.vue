<template>
    <Component :is="props.th ? 'th' : 'td'" class="px-3 py-2 whitespace-nowrap" :class="{
        'uppercase': props.th
    }">
        <span v-if="props.value !== undefined" v-text="props.value"></span>
        <template v-else>
            <slot />
        </template>
    </Component>
</template>

<script setup lang="ts">

import type { TableColumnProps } from '@/types/components/ui/table_type';

const props = withDefaults(defineProps<TableColumnProps>(), {});

</script>

<style scoped></style>