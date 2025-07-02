<template>
    <CPage title="Thumbnails" without-header>

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CThumbnail',
                texts: [
                    'Thumbnail component.'
                ],
                componentDoc: {
                }
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
import CPage from '@/components/dashboard/CPage.vue';

</script>

<style scoped></style>