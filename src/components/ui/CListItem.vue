<template>
    <li>
        <Component :is="props.asLink ? isRouterLink ? 'RouterLink' : 'a' : 'div'" v-bind="getAttributes"
            class="flex items-center h-[56px] px-3 duration-200 rounded-lg" :class="{
                'bg-neutral-50 hover:bg-neutral-200 dark:bg-zinc-950 dark:hover:bg-neutral-800': !props.transparent,
                'cursor-default': !props.asLink,
                'cursor-pointer': props.asLink,
            }">

            <CIcon v-if="props.icon" :name="props.icon" />
            <div class="flex flex-col w-full max-w-[170px] justify-center px-3">
                <div class="text-base font-medium overflow-ellipsis truncate">{{ props.label }}</div>
                <div v-if="props.description" class="overflow-ellipsis truncate text-sm">{{ props.description }}</div>
            </div>
            <CIcon v-if="props.appendIcon" :name="props.appendIcon" />

        </Component>
    </li>
</template>

<script setup lang="ts">

import type { ListItemProps } from '@/types/components/ui/list_type';
import CIcon from './CIcon.vue';
import { computed } from 'vue';

const props = withDefaults(defineProps<ListItemProps>(), {
});

const isRouterLink = computed(() => {
    return props.asLink?.to ? true : false;
});

const getAttributes = computed(() => {
    const isAsLink: boolean = props.asLink ? true : false;

    const baseLinkAttr = {
        title: props.asLink?.title ?? props.label,
        target: props.asLink?.target ?? '_self',
    };

    return isAsLink ? {
        ...baseLinkAttr,
        ...(isRouterLink.value ? {
            to: props.asLink?.to
        } : {
            href: props.asLink?.href
        })
    } : {};
});

</script>

<style scoped></style>