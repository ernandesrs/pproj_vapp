<template>
    <CPage title="Icons" without-header>

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CIcon',
                texts: [
                    '<b>CIcon</b> é um componente para exibição de ícones da biblioteca <b>Bootstrap Icons</b>, por isso, ao utilizar este componente é preciso informar um nome de classe do Bootstrap Icons válido.',
                    'Acesse <i>(https://icons.getbootstrap.com)</i> para a lista de ícones.'
                ],
                componentDoc: {
                    props: [
                        {
                            name: 'name',
                            type: 'string',
                            required: true,
                            desc: 'Icon class name. Requires a valid <b>Bootstrap Icons</b> class name. Access <i>(https://icons.getbootstrap.com)</i>.',
                            defaultValue: 'app'
                        },
                        {
                            name: 'prepend',
                            type: 'boolean',
                            required: false,
                            desc: 'If true, applies a margin to the right.'
                        },
                        {
                            name: 'append',
                            type: 'boolean',
                            required: false,
                            desc: 'If true, applies a margin to the left.'
                        }
                    ]
                }
            }
        ]">

            <template #previews>
                <div class="grid grid-cols-12 gap-6 w-full">
                    <div
                        class="col-span-6 flex flex-col items-center border border-neutral-300 dark:border-neutral-700 rounded-lg p-5">
                        <div class="font-semibold mb-5">Default</div>
                        <div class="flex justify-center gap-6 flex-wrapp">
                            <CIcon name="rocket-takeoff-fill" />
                            <CIcon name="rocket-takeoff" />
                        </div>
                    </div>

                    <div
                        class="col-span-6 flex flex-col items-center border border-neutral-300 dark:border-neutral-700 rounded-lg p-5">
                        <div class="font-semibold mb-5">Custom</div>
                        <div class="flex justify-center gap-6 flex-wrapp text-neutral-50">
                            <div
                                class="size-10 flex justify-center items-center bg-radial-[at_25%_5%] from-purple-600 to-violet-700 rounded-full">
                                <CIcon name="rocket-takeoff-fill" />
                            </div>

                            <div
                                class="size-10 flex justify-center items-center bg-radial-[at_25%_5%] from-rose-600 to-purple-700 rounded-full shadow-lg dark:shadow-purple-600/25">
                                <CIcon name="rocket-takeoff" />
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #codes>
                <textarea>
                    <!-- Default -->
                    <CIcon name="rocket-takeoff-fill" />
                    <CIcon name="rocket-takeoff" />

                    <!-- Custom -->
                    <div class="size-10 flex justify-center items-center bg-radial-[at_25%_5%] from-purple-600 to-violet-700 rounded-full">
                        <CIcon name="rocket-takeoff-fill" />
                    </div>

                    <div class="size-10 flex justify-center items-center bg-radial-[at_25%_5%] from-rose-600 to-purple-700 rounded-full shadow-lg dark:shadow-purple-600/25">
                        <CIcon name="rocket-takeoff" />
                    </div>
                </textarea>
            </template>

        </CDocSection>

    </CPage>
</template>

<script setup lang="ts">

import CDocSection from '@/components/dashboard/CDocSection.vue';
import CPage from '@/components/dashboard/CPage.vue';
import CIcon from '@/components/ui/CIcon.vue';

</script>

<style scoped></style>