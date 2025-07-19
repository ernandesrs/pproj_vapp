<template>
    <CPage title="Dialogs" without-header>
        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CDialog',
                texts: [
                    'Dialog component.'
                ],
                componentDoc: {
                    slots: [
                        {
                            name: 'default',
                            desc: 'Default slot.',
                        },
                        {
                            name: 'header',
                            desc: 'Custom header content.',
                        },
                        {
                            name: 'footer',
                            desc: 'Custom footer content',
                        }
                    ],
                    props: [
                        {
                            name: 'modelValue',
                            type: 'boolean',
                            required: true,
                            desc: 'Define dialog visibility. When true, it shows, when false, it hides.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'persistent',
                            type: 'boolean',
                            required: false,
                            desc: 'When true, disables closing through click on the backdrop.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'icon',
                            type: 'string',
                            required: false,
                            desc: 'Dialog icon.',
                            allowedValues: 'Requires a valid Bootstrap Icon class name.',
                            defaultValue: '---'
                        },
                        {
                            name: 'title',
                            type: 'string',
                            required: false,
                            desc: 'Dialog title.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'hideCloseButton',
                            type: 'boolean',
                            required: false,
                            desc: 'Hides the close button in the dialog header.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'size',
                            type: 'string',
                            required: false,
                            desc: 'Dialog sizes.',
                            allowedValues: 'sm, normal, lg, full',
                            defaultValue: 'normal'
                        },
                        {
                            name: 'location',
                            type: 'string',
                            required: false,
                            desc: 'Dialog location.',
                            allowedValues: 'top, center, bottom',
                            defaultValue: 'top'
                        }
                    ]
                }
            }
        ]">

            <template #previews>
                <div class="flex flex-wrap gap-2.5">
                    <CDialog v-model="dialogA" icon="rocket-fill" title="Dialog A">
                        This is a dialog with icon and title
                    </CDialog>

                    <CDialog v-model="dialogB" location="center" persistent hide-close-button>
                        This is a centered and persistent dialog, with custom header, without close button and with a custom close
                        button on footer, or you can <a href="#" class="text-sky-600"
                            @click.prevent="dialogB = false">click here to
                            close</a>.

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

                    <CDialog v-model="dialogC" persistent icon="file-earmark-text-fill" title="Dialog with long content"
                        size="lg">
                        <template #footer>
                            <div class="flex items-center justify-between">
                                <CButton @click="dialogC = false" icon="x-lg" label="Close" color="danger" />
                                <div class="flex items-center gap-x-2.5">
                                    <CToggle label="Accept the terms and conditions." />
                                    <CButton icon="check-lg" label="Some action here" />
                                </div>
                            </div>
                        </template>

                        <article>
                            <p class="mb-5">
                                This is a dialogue with very long content... Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                                Veniam, modi magnam! Laudantium, omnis numquam! Quo temporibus, nesciunt soluta sequi
                                repellendus suscipit
                                fuga corporis iste quis, culpa fugiat! Voluptas rem autem at ut facilis. Commodi nam
                                aspernatur quia
                                voluptas! Cumque necessitatibus corporis dolore, deserunt reiciendis exercitationem
                                blanditiis tempora
                                eligendi, dolores repellendus nam illum at expedita provident odio perferendis animi
                                minus fuga quis facere?
                                A distinctio aspernatur rerum, totam quaerat quidem sed minima nemo? Eaque sit fuga rem
                                placeat. Dolorem
                                incidunt, unde deserunt minima dolor nobis quis ut repellendus praesentium commodi
                                expedita iure quaerat sit
                                ex aperiam doloribus? Qui corporis ea, ipsa modi tempora iusto in. Iste similique
                                voluptatum voluptas,
                                officia dolorem temporibus ipsum quas quis voluptatem accusantium, necessitatibus
                                tempore alias id veritatis
                                rerum. Dolor, at vitae! Vitae, non autem.
                            </p>
                            <p class="mb-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, modi magnam!
                                Laudantium, omnis numquam! Quo
                                temporibus, nesciunt soluta sequi repellendus suscipit fuga corporis iste quis, culpa
                                fugiat! Voluptas rem
                                autem at ut facilis. Commodi nam aspernatur quia voluptas! Cumque necessitatibus
                                corporis dolore, deserunt
                                reiciendis exercitationem blanditiis tempora eligendi, dolores repellendus nam illum at
                                expedita provident
                                odio perferendis animi minus fuga quis facere? A distinctio aspernatur rerum, totam
                                quaerat quidem sed
                                minima nemo? Eaque sit fuga rem placeat. Dolorem incidunt, unde deserunt minima dolor
                                nobis quis ut
                                repellendus praesentium commodi expedita iure quaerat sit ex aperiam doloribus? Qui
                                corporis ea, ipsa modi
                                tempora iusto in. Iste similique voluptatum voluptas, officia dolorem temporibus ipsum
                                quas quis voluptatem
                                accusantium, necessitatibus tempore alias id veritatis rerum. Dolor, at vitae! Vitae,
                                non autem.
                            </p>
                            <p class="mb-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, modi magnam!
                                Laudantium, omnis numquam! Quo
                                temporibus, nesciunt soluta sequi repellendus suscipit fuga corporis iste quis, culpa
                                fugiat! Voluptas rem
                                autem at ut facilis. Commodi nam aspernatur quia voluptas! Cumque necessitatibus
                                corporis dolore, deserunt
                                reiciendis exercitationem blanditiis tempora eligendi, dolores repellendus nam illum at
                                expedita provident
                                odio perferendis animi minus fuga quis facere? A distinctio aspernatur rerum, totam
                                quaerat quidem sed
                                minima nemo? Eaque sit fuga rem placeat. Dolorem incidunt, unde deserunt minima dolor
                                nobis quis ut
                                repellendus praesentium commodi expedita iure quaerat sit ex aperiam doloribus? Qui
                                corporis ea, ipsa modi
                                tempora iusto in. Iste similique voluptatum voluptas, officia dolorem temporibus ipsum
                                quas quis voluptatem
                                accusantium, necessitatibus tempore alias id veritatis rerum. Dolor, at vitae! Vitae,
                                non autem.
                            </p>
                        </article>
                    </CDialog>

                    <CButton @click="dialogA = true" label="Show dialog A" />
                    <CButton @click="dialogB = true" label="Show dialog B" />
                    <CButton @click="dialogC = true" label="Show dialog C" />
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

<CDialog v-model="dialogC" icon="file-earmark-text-fill" title="Dialog with long content" size="lg">
    <template #footer>
                            <div class="flex items-center justify-between">
                                <CToggle label="Accept the terms and conditions." />
                                <CButton icon="check-lg" label="Some action here" />
                            </div>
                        </template>

    <article>
        <p class="mb-5">
            This is a dialogue with very long content... Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veniam, modi magnam! Laudantium, omnis numquam! Quo temporibus, nesciunt soluta sequi repellendus suscipit
            fuga corporis iste quis, culpa fugiat! Voluptas rem autem at ut facilis. Commodi nam aspernatur quia
            voluptas! Cumque necessitatibus corporis dolore, deserunt reiciendis exercitationem blanditiis tempora
            eligendi, dolores repellendus nam illum at expedita provident odio perferendis animi minus fuga quis facere?
            A distinctio aspernatur rerum, totam quaerat quidem sed minima nemo? Eaque sit fuga rem placeat. Dolorem
            incidunt, unde deserunt minima dolor nobis quis ut repellendus praesentium commodi expedita iure quaerat sit
            ex aperiam doloribus? Qui corporis ea, ipsa modi tempora iusto in. Iste similique voluptatum voluptas,
            officia dolorem temporibus ipsum quas quis voluptatem accusantium, necessitatibus tempore alias id veritatis
            rerum. Dolor, at vitae! Vitae, non autem.
        </p>
        <p class="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, modi magnam! Laudantium, omnis numquam! Quo
            temporibus, nesciunt soluta sequi repellendus suscipit fuga corporis iste quis, culpa fugiat! Voluptas rem
            autem at ut facilis. Commodi nam aspernatur quia voluptas! Cumque necessitatibus corporis dolore, deserunt
            reiciendis exercitationem blanditiis tempora eligendi, dolores repellendus nam illum at expedita provident
            odio perferendis animi minus fuga quis facere? A distinctio aspernatur rerum, totam quaerat quidem sed
            minima nemo? Eaque sit fuga rem placeat. Dolorem incidunt, unde deserunt minima dolor nobis quis ut
            repellendus praesentium commodi expedita iure quaerat sit ex aperiam doloribus? Qui corporis ea, ipsa modi
            tempora iusto in. Iste similique voluptatum voluptas, officia dolorem temporibus ipsum quas quis voluptatem
            accusantium, necessitatibus tempore alias id veritatis rerum. Dolor, at vitae! Vitae, non autem.
        </p>
        <p class="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, modi magnam! Laudantium, omnis numquam! Quo
            temporibus, nesciunt soluta sequi repellendus suscipit fuga corporis iste quis, culpa fugiat! Voluptas rem
            autem at ut facilis. Commodi nam aspernatur quia voluptas! Cumque necessitatibus corporis dolore, deserunt
            reiciendis exercitationem blanditiis tempora eligendi, dolores repellendus nam illum at expedita provident
            odio perferendis animi minus fuga quis facere? A distinctio aspernatur rerum, totam quaerat quidem sed
            minima nemo? Eaque sit fuga rem placeat. Dolorem incidunt, unde deserunt minima dolor nobis quis ut
            repellendus praesentium commodi expedita iure quaerat sit ex aperiam doloribus? Qui corporis ea, ipsa modi
            tempora iusto in. Iste similique voluptatum voluptas, officia dolorem temporibus ipsum quas quis voluptatem
            accusantium, necessitatibus tempore alias id veritatis rerum. Dolor, at vitae! Vitae, non autem.
        </p>
    </article>
</CDialog>

<CButton @click="dialogA = true" label="Show dialog A" />
<CButton @click="dialogB = true" label="Show dialog B" />
<CButton @click="dialogC = true" label="Show dialog C" />

<!-- Script -->
<script>
                        const dialogA = ref<boolean>(false);
                        const dialogB = ref<boolean>(false);
                        const dialogC = ref<boolean>(false);
                    </script></textarea>
            </template>

        </CDocSection>

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CDialogConfirmation',
                texts: [
                    'Dialog confirmation component.'
                ],
                componentDoc: {
                    slots: [
                        {
                            name: 'default',
                            desc: 'Default slot.'
                        }
                    ],
                    props: [
                        {
                            name: 'modelValue',
                            type: 'boolean',
                            required: true,
                            desc: 'Define dialog visibility. When true, it shows, when false, it hides.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'title',
                            type: 'string',
                            required: false,
                            desc: 'Dialog confirmation title.',
                            allowedValues: '---',
                            defaultValue: 'Confirmation title.'
                        },
                        {
                            name: 'text',
                            type: 'string',
                            required: false,
                            desc: 'Dialog confirmation message/text.',
                            allowedValues: '---',
                            defaultValue: 'Confirmation message/text.'
                        },
                        {
                            name: 'size',
                            type: 'string',
                            required: false,
                            desc: 'Dialog confirmation size.',
                            allowedValues: 'sm, normal, lg, full',
                            defaultValue: 'normal'
                        },
                        {
                            name: 'onConfirm',
                            type: 'onConfirm',
                            required: true,
                            desc: 'An object containing a callback to handle confirmation and optionally a label for the confirmation button.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'onCancel',
                            type: 'onCancel',
                            required: false,
                            desc: 'A non-mandatory object containing a callback to handle cancellation and optionally a label for the cancel button.',
                            allowedValues: '---',
                            defaultValue: '---'
                        }
                    ]
                }
            }
        ]">

            <template #previews>
                <div class="flex flex-wrap gap-2.5">
                    <CDialogConfirmation v-model="dialogD" :on-cancel="onCancel" :on-confirm="onConfirm" />

                    <CButton @click="dialogD = true" label="Show dialog confirmation" />
                </div>
            </template>

            <template #codes>
                <textarea>
<!-- Component/Html -->
<CDialogConfirmation v-model="dialogD" :on-cancel="onCancel" :on-confirm="onConfirm" />
<CButton @click="dialogD = true" label="Show dialog confirmation" />

<!-- Script -->
<script>
    const dialogD = ref<boolean>(false);

    const onConfirm = {
        buttonLabel: 'Confirm',
        callback: (): Promise<void | any> => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log('Confirmed');
                    resolve({})
                }, 5000);
            });
        }
    };

    const onCancel = {
        buttonLabel: 'Cancel',
        callback: (): Promise<void | any> => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log('Canceled');
                    resolve({})
                }, 500);
            });
        }
    };
</script></textarea>
            </template>

        </CDocSection>
    </CPage>
</template>

<script setup lang="ts">

import CDocSection from '@/components/dashboard/CDocSection.vue';
import CButton from '@/components/ui/CButton.vue';
import CDialog from '@/components/ui/CDialog.vue';
import CDialogConfirmation from '@/components/ui/CDialogConfirmation.vue';
import CToggle from '@/components/ui/CToggle.vue';
import CPage from '@/components/ui/layout/CPage.vue';
import { ref } from 'vue';

const dialogA = ref<boolean>(false);
const dialogB = ref<boolean>(false);
const dialogC = ref<boolean>(false);

const onConfirm = {
    buttonLabel: 'Confirm',
    callback: (): Promise<void | any> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Confirmed');
                resolve({})
            }, 5000);
        });
    }
};

const onCancel = {
    buttonLabel: 'Cancel',
    callback: (): Promise<void | any> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Canceled');
                resolve({})
            }, 500);
        });
    }
};
const dialogD = ref<boolean>(false);

</script>

<style scoped></style>