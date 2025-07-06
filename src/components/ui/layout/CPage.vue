<template>
    <div class="w-full h-full">
        <div v-if="showPageHeader" class="p-5 sm:p-10 !pb-0">
            <h1 v-if="props.title" v-text="props.title" class="font-medium text-xl sm:text-2xl lg:text-3xl"></h1>
        </div>
        <div class="relative">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">

import { computed, watch } from 'vue';
import { useApp } from '@/composables/useApp';
import { onMounted } from 'vue';
import type { PageProps } from '@/types/components/dashboard/page_type';
import { useAppStore } from '@/stores/app';

const { setAppTitle } = useApp();

const appStore = useAppStore();

const props = withDefaults(defineProps<PageProps>(), {
    loading: false
});

const showPageHeader = computed(() => {
    return !props.withoutHeader && props.title.length > 0;
});

watch(() => props.loading, (n: boolean) => {
    appStore.loading = n;
}, { immediate: true });

onMounted(() => {
    setAppTitle(props.title);
});

</script>

<style scoped></style>