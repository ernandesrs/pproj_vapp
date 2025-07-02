<template>
    <span class="inline-flex gap-x-2 items-center justify-center rounded-lg px-2.5 py-[1px] cursor-default border"
        :class="getStyle">
        <div @click="prependClicked" v-if="props.icon || $slots.prepend">
            <CIcon v-if="props.icon" :name="props.icon" />
            <slot name="prepend" />
        </div>

        <p class="text-xs whitespace-nowrap" v-html="props.label"></p>

        <div @click="appendClicked" v-if="props.appendIcon || $slots.append">
            <CIcon v-if="props.appendIcon" :name="props.appendIcon" />
            <slot name="append" />
        </div>
    </span>
</template>

<script setup lang="ts">

const colors = {
    filled: {
        default: 'bg-neutral-300 dark:bg-neutral-600 border-transparent',
        success: 'bg-emerald-500 dark:bg-emerald-600 text-white border-transparent',
        info: 'bg-sky-500 dark:bg-sky-600 text-white border-transparent',
        warning: 'bg-orange-400 dark:bg-orange-500 text-white border-transparent',
        danger: 'bg-red-500 dark:bg-red-600 text-white border-transparent',
    },
    outlined: {
        default: 'border-neutral-400 dark:border-neutral-400 text-neutral-500 dark:text-neutral-400',
        success: 'border-emerald-500 dark:border-emerald-600 text-emerald-500 dark:text-emerald-600',
        info: 'border-sky-500 dark:border-sky-600 text-sky-500 dark:text-sky-600',
        warning: 'border-orange-400 dark:border-orange-500 text-orange-400 dark:text-orange-500',
        danger: 'border-red-500 dark:border-red-600 text-red-500 dark:text-red-600',
    },
};

import type { BadgeProps } from '@/types/components/ui/badge_type';
import CIcon from './CIcon.vue';
import { computed } from 'vue';

const emit = defineEmits(['click:prepend', 'click:append']);

const props = withDefaults(defineProps<BadgeProps>(), {
    variant: 'filled',
    color: 'success'
});

const prependClicked = (): void => {
    emit('click:prepend');
};

const appendClicked = (): void => {
    emit('click:append');
};

const getStyle = computed(() => {
    return colors[props.variant][props.color];
});

</script>

<style scoped></style>