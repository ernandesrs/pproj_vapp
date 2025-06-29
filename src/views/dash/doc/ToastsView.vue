<template>
    <CPage title="Toast" without-header>

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CToast',
                texts: [
                    ''
                ]
            }
        ]">

            <template #previews>
                <CButton @click="testToast" label="Test toast" />
            </template>

        </CDocSection>

    </CPage>
</template>

<script setup lang="ts">

import CDocSection from '@/components/dashboard/CDocSection.vue';
import CPage from '@/components/dashboard/CPage.vue';
import CButton from '@/components/ui/CButton.vue';

const testToast = () => {

};

</script>

<style scoped></style>