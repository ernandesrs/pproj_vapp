<template>
    <CPage title="Tooltips" without-header>

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CTooltip',
                texts: [],
                componentDoc: {}
            }
        ]">

            <template #previews>
            </template>

            <template #codes>
                <textarea>
                </textarea>
            </template>

        </CDocSection>

    </CPage>
</template>

<script setup lang="ts">

import CDocSection from '@/components/dashboard/CDocSection.vue';
import CPage from '@/components/ui/layout/CPage.vue';

</script>

<style scoped></style>