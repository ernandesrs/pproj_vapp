<template>
    <RouterLink v-bind="{
        to: props.to ?? '#',
        title: props.title ?? props.label
    }" class="flex items-center gap-2.5 px-6 py-3 font-semibold border-r-4 hover:pl-8 hover:border-violet-700 dark:hover:border-violet-800 duration-200"
        :class="{
            'border-transparent': !isActive,
            'pl-8 border-violet-600 dark:border-violet-700': isActive,
        }">

        <CIcon v-if="props.icon" :name="props.icon" />
        <span class="inline-block" v-text="props.label"></span>

    </RouterLink>
</template>

<script setup lang="ts">

import type { SidebarLinkProps } from '@/types/components/dashboard/sidebar_type';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import CIcon from '../ui/CIcon.vue';

const props = withDefaults(defineProps<SidebarLinkProps>(), {
    icon: 'dot',
    activeIn: () => []
});

const route = useRoute();

const isActive = computed(() => {
    return props.activeIn.includes(route.name as string);
});

</script>

<style scoped></style>