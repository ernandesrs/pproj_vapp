<template>
    <div class="overflow-x-auto custom-scrollbar">
        <table class="min-w-full divide-y-2 divide-neutral-200 dark:divide-neutral-800">
            <caption v-if="getCaption !== null" v-html="getCaption"
                class="py-2.5 cursor-default text-neutral-500 dark:text-neutral-600" :class="{
                    'caption-top': props.captionTop,
                    'caption-bottom': props.captionBottom,
                }" />

            <thead v-if="props.header" class="ltr:text-left rtl:text-right">
                <tr class="*:font-medium *:text-neutral-800 dark:*:text-neutral-200">
                    <CTableColumn v-for="header in props.header" th>
                        <template v-if="props.loading">
                            <div class="h-9">
                                <div class="relative w-full h-full flex items-center">
                                    <CSkeleton show custom-tailwind-size-class="w-full h-[12px] !top-auto" />
                                </div>
                            </div>
                        </template>
                        <span v-else v-html="header.label" />
                    </CTableColumn>
                </tr>
            </thead>

            <tbody class="divide-y divide-neutral-200 dark:divide-neutral-800">

                <!-- loading -->
                <template v-if="props.loading">
                    <CTableRow v-for="tr in Array(props.linesWhenLoading ?? 3)">
                        <CTableColumn v-for="td in Array(props.header ? props.header.length : 1).fill(null)"
                            class="h-10">
                            <div class="relative w-full h-full flex items-center">
                                <CSkeleton show custom-tailwind-size-class="w-full h-2 !top-auto" />
                            </div>
                        </CTableColumn>
                    </CTableRow>
                </template>
                <template v-else>
                    <slot />
                </template>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">

import type { TableProps } from '@/types/components/ui/table_type';
import CTableColumn from './CTableColumn.vue';
import { computed } from 'vue';
import CTableRow from './CTableRow.vue';
import CSkeleton from '../CSkeleton.vue';

const props = withDefaults(defineProps<TableProps>(), {});

const getCaption = computed((): string | null => {
    return props.captionTop ?? props.captionBottom ?? null;
});

</script>

<style scoped></style>