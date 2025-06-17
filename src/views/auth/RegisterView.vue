<template>
    <div class="bg-white shadow dark:bg-neutral-900 rounded-lg p-5 w-full max-w-[475px] mx-auto">
        <div class="text-xl font-medium text-center mb-5">
            REGISTER
        </div>

        <div>
            <input type="text">
        </div>
    </div>
</template>


<script setup lang="ts">

import { useAppSettings } from '@/composables/useAppSettings';
import { onMounted } from 'vue';

const { setAppTitle } = useAppSettings();

onMounted(() => {

    setAppTitle('Create an account');

});

</script>

<style scoped></style>