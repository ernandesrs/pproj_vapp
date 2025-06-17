<template>
    <button class="relative duration-200 px-6 py-2.5 border border-transparent rounded-lg disabled:opacity-75 disabled:cursor-not-allowed"
        :class="getStyle">

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
    primary: 'bg-violet-800 hover:bg-violet-700',
    secondary: 'bg-purple-800 hover:bg-purple-700',
    info: 'bg-sky-600 hover:bg-sky-500',
    warning: 'bg-yellow-600 hover:bg-yellow-500',
    danger: 'bg-rose-700 hover:bg-rose-600',
    light: 'bg-neutral-500 hover:bg-neutral-400',
    dark: 'bg-neutral-950 hover:bg-neutral-800',
};

import type { ButtonProps } from '@/types/components/ui/button_type';
import CIcon from './CIcon.vue';
import { computed } from 'vue';

const props = withDefaults(defineProps<ButtonProps>(), {
    color: 'primary'
});

const getStyle = computed((): string => {
    const color = colors[props.color];
    return color + (props.loading ? ' animate-pulse cursor-progress' : ' cursor-pointer');
});

</script>

<style scoped></style>