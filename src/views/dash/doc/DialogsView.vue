<template>
    <CPage title="Dialogs" without-header>
        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CDialog',
                texts: [
                    'Dialog component.'
                ]
            }
        ]">

            <template #previews></template>

        </CDocSection>
    </CPage>
</template>

<script setup lang="ts">
import CDocSection from '@/components/dashboard/CDocSection.vue';
import CPage from '@/components/ui/layout/CPage.vue';


</script>

<style scoped></style>