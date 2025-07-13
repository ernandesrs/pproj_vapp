<template>
    <TransitionGroup enter-from-class="opacity-0" enter-active-class="duration-100 ease-in-out"
        leave-to-class="opacity-0" leave-active-class="duration-200 ease-out" tag="div"
        class="flex flex-wrap absolute top-0 left-0 w-full" :class="(props.lineGap ?? 'gap-2.5')" style="z-index: 999;">
        <div v-show="props.show" v-for="line, index in Array(props.lines ?? 1).fill(null)"
            :key="'skeleton_text_line_' + index" class="w-full relative" :class="props.lineHeight ?? 'h-2'">

            <CSkeleton show custom-tailwind-size-class="w-full h-full" />

        </div>
    </TransitionGroup>
</template>

<script setup lang="ts">

import type { SkeletonTextProps } from '@/types/components/ui/skeleton_type';
import CSkeleton from './CSkeleton.vue';

const props = withDefaults(defineProps<SkeletonTextProps>(), {});

</script>

<style scoped></style>