<template>
    <CPage title="Form" without-header>

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CForm',
                texts: [
                    '<b>CForm</b> é um componente de formulário que é capaz de lidar com a validação dos dados inseridos pelo usuário, injeção de mensagens de erros de forma automática diretamente nos campos invalidados e também lida com a submissão do formulário.'
                ]
            },
            {
                tag: 'h2',
                title: 'Validation',
                texts: [
                    'É possível validar os dados, ainda no lado do cliente antes de envia-los ao servidor, a partir da criação e envio ao componente, de um esquema de validação utilizando a biblioteca <b>Yup</b><i>(https://github.com/jquense/yup)</i>. O esquema de validação pode ser enviado ao componente via propriedade <b><i>validationSchema</i></b>.'
                ]
            },
            {
                tag: 'h2',
                title: 'Error messages',
                texts: [
                    'Quando a validação é feita no lado do cliente, por meio da biblioteca Yup, os erros são injetados de forma automática após a invalidação dos dados, no entanto, é também possível injetar erros ocorridos no lado do servidor.',
                    'A injeção de erros ocorridos no lado do servidor é feita de forma muito simples: basta enviar ao componente de formulário via propriedade <b><i>externalErrors</i></b>, um objeto JSON contendo o campo e a mensagem. Veja a tabela de propriedades mais abaixo para mais detalhes.'
                ]
            },
            {
                tag: 'h2',
                title: 'Form submission',
                texts: [
                    'Este componente é capaz de lidar com a submissão de forma muito simples: envie uma função via propriedade <b><i>onSubmit</i></b>, esta função será deve ser capaz de receber os dados validados e lidar com eles.',
                    ' Veja a tabela de propriedades abaixo para mais detalhes.'
                ]
            },
        ]">
        </CDocSection>

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'Previews, Slots, Props and Events',
                texts: [
                ],
                componentDoc: {
                    slots: [
                        {
                            name: 'default',
                            desc: 'All your form fields here. The slot container is a grid layout with 12 columns.'
                        }
                    ],
                    props: [
                        {
                            name: 'data',
                            type: 'any',
                            required: true,
                            desc: 'Os dados a serem validados em um objeto.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'validationSchema',
                            type: 'AnySchema',
                            required: false,
                            desc: 'O esquema de validação. Requer um objeto Yup(https://github.com/jquense/yup) válido.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'externalErrors',
                            type: 'Record<string, string>',
                            required: false,
                            desc: 'Um objeto contendo erros de validação externos.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'submitText',
                            type: 'string',
                            required: false,
                            desc: 'Texto do botão de submeter fomrulário.',
                            allowedValues: '---',
                            defaultValue: 'Submit'
                        },
                        {
                            name: 'onSubmit',
                            type: 'function',
                            required: true,
                            desc: 'Uma função que recebe via parâmetro os dados validados.',
                            allowedValues: '---',
                            defaultValue: '---'
                        }
                    ],
                    events: [
                        {
                            name: 'invalidated',
                            handlerSignature: '(validationErrors: Record< string, string >) => void',
                            desc: 'Uma função opcional, para lidar com a invalidação dos dados do formulário.'
                        }
                    ]
                }
            }
        ]">
            <template #previews>
                <div class="w-full flex justify-center">
                    <CToggle @checked="serverError = true" @unchecked="serverError = false"
                        label="Simulate with server error" />
                </div>

                <CForm :on-submit="onSubmit" :data="loginForm" :validation-schema="loginFormValidation"
                    :external-errors="externalErrors" submit-text="Login">
                    <CInput class="col-span-12" v-model="loginForm.email" type="email" label="E-mail" id="email" />
                    <CInput class="col-span-12" v-model="loginForm.password" type="password" label="Password"
                        id="password" />
                </CForm>
            </template>

            <template #codes>
                <textarea>
                <!-- html -->
                <CForm :on-submit="onSubmit" :data="loginForm" :validation-schema="loginFormValidation"
                    :external-errors="externalErrors" submit-text="Login">
                    <CInput class="col-span-12" v-model="loginForm.email" type="email" label="E-mail" id="email" />
                    <CInput class="col-span-12" v-model="loginForm.password" type="password" label="Password"
                        id="password" />
                </CForm>

                <!-- script -->
                <script>
                    import CForm from '@/components/ui/form/CForm.vue';
                    import CInput from '@/components/ui/form/CInput.vue';
                    import { yupValidator } from '@/utils/validator';
                    import { ref } from 'vue';

                    const serverError = ref<boolean>(false);
                    
                    const externalErrors = ref<Record<string, string>>({});
                    const loginFormValidation = yupValidator.object({
                        email: yupValidator.string().required().email(),
                        password: yupValidator.string().required()
                    });

                    const loginForm = ref<{
                        email: string,
                        password: string
                    }>({
                        email: '',
                        password: ''
                    });

                    const onSubmit = async (validated: any): Promise<void | unknown> => {
                        return new Promise((resolve, reject) => {
                            setTimeout(() => {
                                if (serverError.value) {
                                    reject({
                                        validation_errors: {
                                            email: 'Server error: email notfound'
                                        }
                                    });
                                } else {
                                    console.log(validated);
                                    resolve({});
                                }
                            }, 1000);
                        }).catch((e) => {
                            // Simulating server errors
                            externalErrors.value = e.validation_errors;
                        });
                    };
                </script>
</textarea>
            </template>
        </CDocSection>

    </CPage>
</template>

<script setup lang="ts">

import CDocSection from '@/components/dashboard/CDocSection.vue';
import CPage from '@/components/ui/layout/CPage.vue';
import CToggle from '@/components/ui/CToggle.vue';
import CForm from '@/components/ui/form/CForm.vue';
import CInput from '@/components/ui/form/CInput.vue';
import { yupValidator } from '@/utils/validator';
import { ref } from 'vue';

const serverError = ref<boolean>(false);

const externalErrors = ref<Record<string, string>>({});

const loginFormValidation = yupValidator.object({
    email: yupValidator.string().required().email(),
    password: yupValidator.string().required()
});

const loginForm = ref<{
    email: string,
    password: string
}>({
    email: '',
    password: ''
});

const onSubmit = async (validated: any): Promise<void | unknown> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (serverError.value) {
                reject({
                    validation_errors: {
                        email: 'Server error: email notfound'
                    }
                });
            } else {
                console.log(validated);
                resolve({});
            }
        }, 1000);
    }).catch((e) => {
        // Simulating server errors
        externalErrors.value = e.validation_errors;
    });
};

</script>

<style scoped></style>