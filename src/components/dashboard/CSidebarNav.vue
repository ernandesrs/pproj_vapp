<template>
    <nav class="flex flex-col gap-0.5">
        <template v-if="props.items.length > 0">
            <template v-for="link, index in props.items" :key="'sidebar_nav_link_' + (index + 1)">
                <CSidebarLink v-if="!link.subitems" v-bind="link" />
                <CSidebarSubnav v-else :label="link.label" :icon="link.icon" :items="link.subitems" />
            </template>
        </template>

        <slot />
    </nav>
</template>

<script setup lang="ts">

import type { SidebarNavProps } from '@/types/components/dashboard/sidebar_type';
import CSidebarLink from './CSidebarLink.vue';
import CSidebarSubnav from './CSidebarSubnav.vue';

const props = withDefaults(defineProps<SidebarNavProps>(), {
    items: () => []
});

</script>

<style scoped></style>