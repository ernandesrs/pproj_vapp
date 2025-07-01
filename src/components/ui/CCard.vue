<template>
    <div class="bg-white border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 rounded-lg">
        <div v-if="withHeader" class="bg-white dark:bg-neutral-900 flex items-center gap-2.5 py-5 px-6 border-b border-neutral-200 dark:border-neutral-800 relative z-10 rounded-tl-lg rounded-tr-lg">

            <div class="flex-1">
                <Component v-if="props.title" :is="props.titleTag" v-html="props.title"
                    class="text-base font-semibold" />
                <template v-else-if="$slots.header">
                    <slot name="header" />
                </template>
            </div>

        </div>

        <div class="p-6 relative z-0">
            <slot />
        </div>

        <div v-if="withFooter" class="flex items-center gap-2.5 py-5 px-6 border-t border-neutral-200 dark:border-neutral-800">

            <div class="flex-1">
                <slot name="footer" />
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">

import type { CardProps } from '@/types/components/ui/card_type';
import { computed, useSlots } from 'vue';

const slots = useSlots();

const props = withDefaults(defineProps<CardProps>(), {
    titleTag: 'h5'
});

const withHeader = computed((): boolean => {
    return props.title || slots.header ? true : false;
});

const withFooter = computed((): boolean => {
    return slots.footer ? true : false;
});

</script>

<style scoped></style>