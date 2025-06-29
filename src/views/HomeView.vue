<template>
    <div class="bg-white shadow dark:bg-neutral-900 rounded-lg p-5 w-full max-w-[475px] mx-auto">

        <div class="flex flex-wrap justify-center gap-2.5">
            <RouterLink v-for="(link, index) in links" :key="index" :to="link.to">
                <CButton :icon="link.icon" :label="link.label" color="primary" variant="filled" />
            </RouterLink>
        </div>

    </div>
</template>

<script setup lang="ts">

import CButton from '@/components/ui/CButton.vue';
import { useApp } from '@/composables/useApp';
import { onMounted } from 'vue';

const { setAppTitle } = useApp();

const links = [
    {
        icon: 'house-door',
        label: 'Home',
        to: { name: 'home' }
    },
    {
        icon: 'box-arrow-in-right',
        label: 'Login',
        to: { name: 'auth.login' }
    },
    {
        icon: 'person-plus',
        label: 'Register',
        to: { name: 'auth.register' }
    },
    {
        icon: 'pie-chart',
        label: 'Dashboard',
        to: { name: 'dash.home' }
    }
];

onMounted(() => {

    setAppTitle('Home');

});

</script>

<style scoped></style>