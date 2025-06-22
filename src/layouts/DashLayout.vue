<template>
    <main>
        DASHBOARD LAYOUT
        <RouterView />
    </main>
</template>

<script setup lang="ts">

import { useAppSettings } from '@/composables/useAppSettings';
import { ref, watch } from 'vue';
import { RouterView } from 'vue-router';

const { isDarkTheme, darkModeToggle } = useAppSettings();

const dark = ref<boolean>(isDarkTheme());

watch(() => dark.value, () => {
    darkModeToggle();
});

</script>

<style scoped></style>
