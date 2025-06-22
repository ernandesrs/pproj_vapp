<template>
    <div class="">

        DASHBOARD HOME VIEW

    </div>
</template>

<script setup lang="ts">

import { useAppSettings } from '@/composables/useAppSettings';
import { onMounted } from 'vue';

const { setAppTitle } = useAppSettings();

onMounted(() => {
    setAppTitle('Dashboard | Overview');
});

</script>

<style scoped></style>