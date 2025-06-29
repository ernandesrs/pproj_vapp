<template>
    <button
        class="relative duration-200 px-6 py-2.5 border border-transparent rounded-lg disabled:opacity-75 disabled:cursor-not-allowed"
        :class="getStyle" :type="props.type">

        <!-- button loading content -->
        <div v-if="props.loading"
            class="w-full h-full flex justify-center items-center absolute z-10 top-0 left-0 rounded-lg">
            <div class="w-6 h-6 rounded-full border-[3px] border-neutral-50/50 border-r-transparent animate-spin"></div>
        </div>

        <!-- button content -->
        <div class="relative z-0 w-full h-full flex items-center" :class="{
            'opacity-0': props.loading
        }">
            <CIcon v-if="props.icon" :name="props.icon" :prepend="props.icon && props.label ? true : false" />
            <span class="inline-block" v-if="props.label" v-text="props.label"></span>
            <CIcon v-if="props.appendIcon" :name="props.appendIcon" append />
        </div>

    </button>
</template>

<script setup lang="ts">

const colors = {
    filled: {
        primary: 'text-neutral-50 bg-violet-800 hover:bg-violet-700',
        secondary: 'text-neutral-50 bg-purple-800 hover:bg-purple-700',
        success: 'text-neutral-50 bg-emerald-500 hover:bg-emerald-600',
        info: 'text-neutral-50 bg-sky-600 hover:bg-sky-500',
        warning: 'text-neutral-50 bg-yellow-600 hover:bg-yellow-500',
        danger: 'text-neutral-50 bg-rose-700 hover:bg-rose-600',
        light: 'text-neutral-50 bg-neutral-500 hover:bg-neutral-400',
        dark: 'text-neutral-50 bg-neutral-950 hover:bg-neutral-800',
    },
    text: {
        primary: 'text-violet-800 hover:text-violet-700',
        secondary: 'text-purple-800 hover:text-purple-700',
        success: 'text-emerald-600 hover:text-emerald-500',
        info: 'text-sky-600 hover:text-sky-500',
        warning: 'text-yellow-600 hover:text-yellow-500',
        danger: 'text-rose-700 hover:text-rose-600',
        light: 'text-neutral-500 hover:text-neutral-400',
        dark: 'text-neutral-950 dark:text-neutral-500 hover:text-neutral-800',
    }
};

import type { ButtonProps } from '@/types/components/ui/button_type';
import CIcon from './CIcon.vue';
import { computed } from 'vue';

const props = withDefaults(defineProps<ButtonProps>(), {
    type: 'button',
    color: 'primary',
    variant: 'filled'
});

const getStyle = computed((): string => {
    const color = colors[props.variant][props.color];
    return color + (props.loading ? ' animate-pulse cursor-progress pointer-events-none' : ' cursor-pointer');
});

</script>

<style scoped></style>