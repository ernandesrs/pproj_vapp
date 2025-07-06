<template>
    <div class="flex flex-col gap-0.5">
        <CSidebarLink @click.prevent="show = !show" v-bind="{
            label: props.label,
            icon: props.icon,
            to: ''
        }" class="hover:!pl-6" />
        <Transition enter-from-class="opacity-0 -translate-y-1/12"
            enter-active-class="duration-200 ease-in-out pointer-events-none"
            leave-to-class="opacity-0 -translate-y-1/12" leave-active-class="duration-200 ease-out pointer-events-none">
            <CSidebarNav v-show="isShow" subnav :items="items" class="ml-6" />
        </Transition>
    </div>
</template>

<script setup lang="ts">

import type { SidebarSubnavProps } from '@/types/components/dashboard/sidebar_type';
import CSidebarLink from './CSidebarLink.vue';
import CSidebarNav from './CSidebarNav.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const props = withDefaults(defineProps<SidebarSubnavProps>(), {
    items: () => []
});

const route = useRoute();

const show = ref<boolean>(false);

const getActiveInRoutes = computed((): Array<string> => {
    return props.items.map((v) => v.activeIn ?? []).flat();
});

const isShow = computed((): boolean => {
    return show.value || getActiveInRoutes.value.includes(route.name as string);
});

</script>

<style scoped></style>