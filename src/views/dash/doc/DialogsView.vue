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

            <template #previews>
                <div class="flex flex-wrap gap-2.5">
                    <CDialog v-model="dialogA" icon="rocket-fill" title="Dialog A">
                        This is a dialog with icon and title
                    </CDialog>

                    <CDialog v-model="dialogB" persistent hide-close-button>
                        This is a persistent dialog, with custom header, without close button and with a custom close
                        button on footer, or you can <a href="#" class="text-sky-600"
                            @click.prevent="dialogB = false">click here to close</a>.

                        <template #header>
                            <div class="flex items-center font-medium uppercase">
                                Custom <span class="font-semibold inline-block text-sky-300 ml-2">header</span>
                            </div>
                        </template>
                        <template #footer>
                            <div class="flex items-center justify-between">
                                <CButton color="info" label="Button" />
                                <CButton @click="dialogB = false" color="danger" label="Close" />
                            </div>
                        </template>
                    </CDialog>

                    <CButton @click="dialogA = true" label="Show dialog A" />
                    <CButton @click="dialogB = true" label="Show dialog B" />
                </div>
            </template>

            <template #codes>
                <textarea>
                    <!-- Component/Html -->
                    <CDialog v-model="dialogA" icon="rocket-fill" title="Dialog A">
                        This is a dialog with icon and title
                    </CDialog>

                    <CDialog v-model="dialogB" persistent hide-close-button>
                        This is a persistent dialog, with custom header, without close button and with a custom close
                        button on footer, or you can <a href="#" class="text-sky-600"
                            @click.prevent="dialogB = false">click here to close</a>.

                        <template #header>
                            <div class="flex items-center font-medium uppercase">
                                Custom <span class="font-semibold inline-block text-sky-300 ml-2">header</span>
                            </div>
                        </template>
                        <template #footer>
                            <div class="flex items-center justify-between">
                                <CButton color="info" label="Button" />
                                <CButton @click="dialogB = false" color="danger" label="Close" />
                            </div>
                        </template>
                    </CDialog>

                    <CButton @click="dialogA = true" label="Show dialog A" />
                    <CButton @click="dialogB = true" label="Show dialog B" />

                    <!-- Script -->
                     <script>
                        const dialogA = ref<boolean>(false);
                        const dialogB = ref<boolean>(false);
                    </script></textarea>
            </template>

        </CDocSection>
    </CPage>
</template>

<script setup lang="ts">

import CDocSection from '@/components/dashboard/CDocSection.vue';
import CButton from '@/components/ui/CButton.vue';
import CDialog from '@/components/ui/CDialog.vue';
import CPage from '@/components/ui/layout/CPage.vue';
import { ref } from 'vue';

const dialogA = ref<boolean>(false);
const dialogB = ref<boolean>(false);

</script>

<style scoped></style>