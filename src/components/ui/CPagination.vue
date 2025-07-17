<template>
    <nav class="flex flex-wrap gap-1.5">
        <a v-for="link, index in getLinks" :key="'pagination_link_' + index"
            class="hover:shadow-md dark:shadow-neutral-700 duration-300 rounded-lg py-1.5 px-4 cursor-pointer" :class="{
                'text-white dark:text-neutral-50 bg-violet-500 dark:bg-violet-800 hover:bg-violet-700 dark:hover:bg-violet-900': props.currentPage !== link.page,
                'text-violet-600 shadow-md dark:shadow-neutral-700 bg-violet-100 dark:bg-violet-200 pointer-events-none': props.currentPage === link.page,
            }" href="#" v-text="link.label" @click="onClick(link.page)"></a>
    </nav>
</template>

<script setup lang="ts">

import type { PaginationItem, PaginationProps } from '@/types/components/ui/pagination_type';
import { computed, onMounted, ref, watch } from 'vue';

const emit = defineEmits(['changePage']);

const props = withDefaults(defineProps<PaginationProps>(), {
    itemsOnEachSide: 3
});

const items = ref<Array<PaginationItem>>([]);

const totalItems = computed((): number => {
    return Math.ceil(props.totalItems / props.itemsPerPage);
});

const getLinks = computed((): Array<PaginationItem> => {
    const itemsLimitExceeded: boolean = props.itemsOnEachSide * 2 < totalItems.value;
    let links = items.value;

    if (itemsLimitExceeded) {
        // 
    }

    return links;
});

const getItems = (): void => {
    items.value = Array(totalItems.value).fill(null).map((item: any, index: number): PaginationItem => {
        return {
            label: `${index + 1}`,
            page: index + 1
        };
    });
};

const onClick = (page: number | null) => {
    if (page !== null) {
        emit('changePage', page);
    }
};

watch(() => props.totalItems, getItems, { immediate: true });

watch(() => props.itemsPerPage, getItems, { immediate: true });

onMounted(() => {
    getItems();
});

</script>

<style scoped></style>