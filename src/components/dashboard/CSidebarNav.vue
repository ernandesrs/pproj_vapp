<template>
    <nav class="flex flex-col gap-0.5">
        <template v-if="props.items.length > 0">
            <CSidebarLink v-for="link, index in props.items" :key="'sidebar_nav_link_' + (index + 1)" v-bind="link" />
        </template>

        <slot />
    </nav>
</template>

<script setup lang="ts">

import type { SidebarNavProps } from '@/types/components/dashboard/sidebar_type';
import CSidebarLink from './CSidebarLink.vue';

const props = withDefaults(defineProps<SidebarNavProps>(), {
    items: () => []
});

</script>

<style scoped></style>