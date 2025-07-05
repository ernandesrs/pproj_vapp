<template>
    <CPage title="Form fields" without-header>

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'Form fields: CInput, CSelect, CUpload, CToggle',
                texts: [
                    'São todos componentes para campos de formulário. Ambos possuem diversas propriedades, slots e eventos, dos quais algums são comuns entre eles, e algumas são exclusivas em cada tipo de componente.',
                    'Veja nas tabelas abaixo, uma lista de propridades, slots e eventos que todos os campos de formulário possuem.'
                ],
                componentDoc: {
                    props: [
                        {
                            name: 'label',
                            type: 'string',
                            required: true,
                            desc: 'Form field label.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'id',
                            type: 'string',
                            required: true,
                            desc: 'Unique ID for the field. The id must be the same name used in v-model.',
                            allowedValues: '',
                            defaultValue: ''
                        },
                        {
                            name: 'error',
                            type: 'string',
                            required: false,
                            desc: 'Field validation error',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'validationRule',
                            type: 'Schema &lt; any &gt;',
                            required: false,
                            desc: 'Validation rules. Requires a Yup object.(https://github.com/jquense/yup)',
                            allowedValues: '---',
                            defaultValue: '---'
                        }
                    ],
                    events: [
                        {
                            name: 'validated',
                            handlerSignature: '(validatedValue: boolean) => void',
                            desc: 'Dispatched when validated. <b><i>Emitted only when the form field is validated in the component itself.</i></b>'
                        },
                        {
                            name: 'invalidated',
                            handlerSignature: '(errorMessage: string) => void',
                            desc: 'Dispatched when invalidated. <b><i>Emitted only when the form field is validated in the component itself.</i></b>'
                        }
                    ]
                }
            },
            {
                tag: 'h2',
                title: 'Field validation',
                texts: [
                    'Todos os componentes de formulário são capazes de efetuar validação própria, bastando passar via propriedade <b>validationRule</b>, um objeto <b>Yup</b><i>(https://github.com/jquense/yup)</i> com as regras de validação.',
                    'Quando o campo for validado com sucesso, um evento chamado <i>validated</i> será emitido com o valor do campo.',
                    'Quando o campo for invalidado, um evento chamado <i>invalidated</i> será emitido com o a mensagem de erro. A mensagem de erro também será exibido automaticamente abaixo do campo.',
                    'Se o campo estiver dentro de um componente de formulário <b>CForm</b>, o componente será capaz de lidar com esses erros, impedindo o usuário de submeter o formulário, até que ele corrija o campo.'
                ]
            },
            {
                tag: 'h1',
                title: 'Field specificities',
                texts: [
                    'Veja abaixo em detalhes, cada tipo de componente.'
                ],
            },
            {
                tag: 'h2',
                title: 'CInput',
                texts: [
                    'Além de possuir todas as propriedades listadas mais cima, <b>CInput</b> também possui essas propriedades específicas.'
                ],
                componentDoc: {
                    props: [
                        {
                            name: 'modelValue',
                            type: 'string, number',
                            required: true,
                            desc: '',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'type',
                            type: 'string',
                            required: false,
                            desc: '',
                            allowedValues: 'text, email, password, number, date',
                            defaultValue: 'text'
                        }
                    ]
                }
            },
            {
                tag: 'h2',
                title: 'CSelect',
                texts: [
                    'Além de possuir todas as propriedades listadas mais cima, o componente <b>CSelect</b> também possui essas outras propriedades próprias.'
                ],
                componentDoc: {
                    props: [
                        {
                            name: 'modelValue',
                            type: 'string, number, object',
                            required: true,
                            desc: '',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'options',
                            type: 'Array<{ label: string, value: string | number }>',
                            required: true,
                            desc: '',
                            allowedValues: '---',
                            defaultValue: '---'
                        }
                    ]
                }
            },
            {
                tag: 'h2',
                title: 'CUpload',
                texts: [
                    'Componente de upload. Por padrão, esse componente aceita apenas a seleção de um arquivo, no entanto, é possível permitir múltiplos arquivos passando o limite via propriedade <b>limit</b>.',
                    'Abaixo, veja a lista de propriedades próprias de <b>CUpload</b> além das propridades base dos componentes.'
                ],
                componentDoc: {
                    props: [
                        {
                            name: 'modelValue',
                            type: 'File[]',
                            required: true,
                            desc: 'Component for selecting file(s) for upload.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'limit',
                            type: 'number',
                            required: false,
                            desc: 'File limit. Enter a value greater than 1 to allow selection of multiple files.',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'allowedMimeTypes',
                            type: 'string[]',
                            required: false,
                            desc: 'Mime types that can be accepted.',
                            allowedValues: '---',
                            defaultValue: '---'
                        }
                    ]
                }
            },
            {
                tag: 'h2',
                title: 'CToggle',
                texts: [],
                componentDoc: {
                    props: [
                        {
                            name: 'modelValue',
                            type: 'boolean',
                            required: true,
                            desc: '',
                            allowedValues: '---',
                            defaultValue: '---'
                        },
                        {
                            name: 'iconOnChecked',
                            type: 'string',
                            required: false,
                            desc: 'Icon name to display when component is checked. Requires a valid Bootstrap Icon class(https://icons.getbootstrap.com).',
                            allowedValues: '---',
                            defaultValue: 'check'
                        },
                        {
                            name: 'iconOnUnchecked',
                            type: 'string',
                            required: false,
                            desc: 'Icon name to display when component is unchecked. Requires a valid Bootstrap Icon class(https://icons.getbootstrap.com).',
                            allowedValues: '---',
                            defaultValue: 'x'
                        },
                        {
                            name: 'rightLabel',
                            type: 'boolean',
                            required: false,
                            desc: 'When true, the component label will be on the right side.',
                        }
                    ],
                    events: [
                        {
                            name: 'checked',
                            handlerSignature: '(checked: boolean) => void',
                            desc: 'Dispatched when checked.',
                        },
                        {
                            name: 'unchecked',
                            handlerSignature: '(checked: boolean) => void',
                            desc: 'Dispatched when unchecked.'
                        }
                    ]
                }
            }
        ]">
        </CDocSection>

    </CPage>
</template>

<script setup lang="ts">

import CDocSection from '@/components/dashboard/CDocSection.vue';
import CPage from '@/components/ui/layout/CPage.vue';

</script>

<style scoped></style>