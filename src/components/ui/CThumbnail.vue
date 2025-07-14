<template>
    <div class="relative overflow-hidden shadow-md flex items-center justify-center bg-neutral-200 dark:bg-neutral-600 border-4 border-neutral-50 dark:border-neutral-700 p-2"
        :class="getStyle">
        <img v-if="props.image && !props.loading" class="absolute z-10 w-full h-full" :src="props.image"
            :alt="props.text">

        <div v-if="props.text && !props.loading && !props.image"
            class="relative z-10 w-full h-full flex justify-center items-center font-semibold text-zinc-400 dark:text-zinc-300"
            v-text="props.text[0]"></div>


        <CSkeleton v-if="props.loading" class="absolute top-0 left-0" />
    </div>
</template>

<script setup lang="ts">

const getSize = (size: string, squareOrCircle: boolean): string => {
    const s = {
        'sm': squareOrCircle ? 'w-10 h-10' : 'w-16 h-10',
        'md': squareOrCircle ? 'w-14 h-14' : 'w-20 h-14',
        'normal': squareOrCircle ? 'w-20 h-20' : 'w-28 h-20',
        'lg': squareOrCircle ? 'w-28 h-28' : 'w-40 h-28',
        'xl': squareOrCircle ? 'w-36 h-36' : 'w-52 h-36',
        'custom': ''
    }[size];

    return s as string;
};

import type { ThumbnailProps } from '@/types/components/ui/thumbnail_type';
import { computed } from 'vue';
import CSkeleton from './CSkeleton.vue';

const props = withDefaults(defineProps<ThumbnailProps>(), {
    size: "normal"
});

const getStyle = computed((): string => {
    return getSize(props.size, props.square ? true : props.circle ? true : false) + (props.circle ? ' rounded-full ' : ' rounded-lg ');
});

</script>

<style scoped></style>