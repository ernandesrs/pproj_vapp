<template>
    <ul class="flex flex-col gap-1 rounded-lg">
        <CListItem v-if="props.items.length > 0" v-for="item in props.items" v-bind="item" />
        <template v-else>
            <slot />
        </template>
    </ul>
</template>

<script setup lang="ts">

import type { ListProps } from '@/types/components/ui/list_type';
import CListItem from './CListItem.vue';

const props = withDefaults(defineProps<ListProps>(), {
    items: () => []
});

</script>

<style scoped></style>