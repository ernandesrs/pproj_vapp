<template>
    <CPage title="Tables" without-header>

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CTable'
            }
        ]" />

        <CDocSection :data="[
            {
                tag: 'h2',
                title: 'CTableRow'
            }
        ]" />

        <CDocSection :data="[
            {
                tag: 'h2',
                title: 'CTableColumn'
            }
        ]">

            <template #previews></template>

        </CDocSection>

    </CPage>
</template>

<script setup lang="ts">

import CDocSection from '@/components/dashboard/CDocSection.vue';
import CPage from '@/components/dashboard/CPage.vue';

</script>

<style scoped></style>