<template>
    <div class="relative flex flex-col" :class="props.lineGap ?? 'gap-y-2.5'">

        <CSkeleton v-for="line, index in getSkeletons" :key="'skeleton_text_line_' + index" variant="text"
            :width="line.width" :height="props.lineHeight" />

    </div>
</template>

<script setup lang="ts">

import type { SkeletonTextProps } from '@/types/components/ui/skeleton_type';
import CSkeleton from './CSkeleton.vue';
import { computed } from 'vue';

const props = withDefaults(defineProps<SkeletonTextProps>(), {});

const getSkeletons = computed((): Array<{
    width: string
}> => {
    const length = !props.lines ? 1 : (typeof props.lines == 'number' ? props.lines : props.lines.length);
    const propLinesIsArray = typeof props.lines == 'object';

    return Array(length).fill(null).map((value: any, index: number) => {
        return {
            width: !propLinesIsArray ? 'w-full' : (props.lines[index] ?? 'w-full')
        };
    });
});

</script>

<style scoped></style>