<template>
    <CListItem v-bind="props" transparent class="rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-900 duration-200" :class="{
        'bg-violet-700 dark:bg-violet-900 hover:bg-violet-800 dark:hover:bg-violet-950 text-white': isActive
    }" />
</template>

<script setup lang="ts">

import type { SidebarLinkProps } from '@/types/components/dashboard/sidebar_type';
import CListItem from '../ui/CListItem.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const props = withDefaults(defineProps<SidebarLinkProps>(), {
    activeIn: () => []
});

const route = useRoute();

const isActive = computed(() => {
    return props.activeIn.includes(route.name as string);
});

</script>

<style scoped></style>