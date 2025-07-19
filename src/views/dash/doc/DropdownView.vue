<template>
    <CPage title="Dropdowns" without-header>

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CDropdown',
                texts: [],
                componentDoc: {}
            }
        ]">

            <template #previews>

                <CDropdown width="w-[200px] sm:w-[225px] lg:w-[325px]">
                    <template #activator>
                        <CButton icon="person-circle" label="Profile" />
                    </template>

                    <CCard>
                        <div class="flex items-center gap-2.5">
                            <CSkeleton width="w-16" height="h-16" variant="circle" />
                            <div class="flex-1 flex flex-col gap-y-4">
                                <CSkeleton width="w-full" height="h-6" variant="rect" />
                                <CSkeleton width="w-10/12" height="h-2" variant="rect" />
                            </div>
                        </div>
                    </CCard>
                </CDropdown>

                <CDropdown width="w-[425px]" location="center">
                    <template #activator>
                        <CButton icon="rocket-fill" label="Lorem dropdown" />
                    </template>

                    <CCard>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nobis esse quidem. Vero
                            aspernatur culpa
                            dolor, nostrum quia consectetur tenetur repellendus veniam doloremque, repudiandae autem
                            tempora animi alias
                            sequi fugit?
                        </p>
                    </CCard>
                </CDropdown>

            </template>

            <template #codes>
                <textarea></textarea>
            </template>

        </CDocSection>

    </CPage>
</template>

<script setup lang="ts">

import CDocSection from '@/components/dashboard/CDocSection.vue';
import CButton from '@/components/ui/CButton.vue';
import CCard from '@/components/ui/CCard.vue';
import CDropdown from '@/components/ui/CDropdown.vue';
import CSkeleton from '@/components/ui/CSkeleton.vue';
import CPage from '@/components/ui/layout/CPage.vue';

</script>

<style scoped></style>