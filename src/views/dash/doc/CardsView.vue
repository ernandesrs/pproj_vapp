<template>
    <CPage title="Cards" without-header>
        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CCard'
            }
        ]"></CDocSection>
    </CPage>
</template>

<script setup lang="ts">

import CDocSection from '@/components/dashboard/CDocSection.vue';
import CPage from '@/components/dashboard/CPage.vue';

</script>

<style scoped></style>