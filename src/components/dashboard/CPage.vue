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

import { computed } from 'vue';
import { useAppSettings } from '@/composables/useAppSettings';
import { onMounted } from 'vue';
import type { PageProps } from '@/types/components/dashboard/page_type';

const { setAppTitle } = useAppSettings();

const props = withDefaults(defineProps<PageProps>(), {
});

const showPageHeader = computed(() => {
    return !props.withoutHeader && props.title.length > 0;
});

onMounted(() => {
    setAppTitle(props.title);
});

</script>

<style scoped></style>