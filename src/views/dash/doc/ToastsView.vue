<template>
    <CPage title="Toast" without-header>

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'CToast',
                texts: [
                    '<b>CToast</b> é um componente para exibir mensagens rápidas em resposta a ações do usuário, como atualização de perfil, exclusão de alguma coisa, e por aí vai.',
                ]
            }
        ]">

        </CDocSection>

        <CDocSection :data="[
            {
                tag: 'h2',
                title: 'Uso',
                texts: [
                    'O uso é bastante simples, basta utilizar o método <b>addToast</b> contido no composable <i>@/composables/useToast.ts</i> ou <i>@/composables/useAppSettings.ts</i> e informar os dados do toast.',
                    'Para mais detalhes, veja os exemplos abaixo.'
                ]
            }
        ]">

            <template #previews>
                <CButton @click="testToast('default')" label="Default toast" color="dark" />
                <CButton @click="testToast('success')" label="Success toast" color="success" />
                <CButton @click="testToast('info')" label="Info toast" color="info" />
                <CButton @click="testToast('danger')" label="Danger toast" color="danger" />
                <CButton @click="testToast('error')" label="Error toast" color="danger" />
                <CButton @click="testToast('warning')" label="Warning toast" color="warning" />
            </template>

            <template #codes>
                <textarea>
                    <!-- Dispatchers -->
                    <CButton @click="testToast('default')" label="Default toast" color="dark" />
                    <CButton @click="testToast('success')" label="Success toast" color="success" />
                    <CButton @click="testToast('info')" label="Info toast" color="info" />
                    <CButton @click="testToast('danger')" label="Danger toast" color="danger" />
                    <CButton @click="testToast('error')" label="Error toast" color="danger" />
                    <CButton @click="testToast('warning')" label="Warning toast" color="warning" />
                    
                    <!-- Script -->
                     <script setup lang="ts">
                        import type { ToastType } from '@/types/components/ui/toast_type';
                        import { useToast } from '@/composables/useToast';

                        const toast = useToast();

                        const testToast = (type: ToastType) => {
                            toast.addToast({
                                permanent: false,
                                type: type as ToastType,
                                message: 'Lorem dolor toast message ' + Date.now(),
                                caption: 'This is a lorem dolor toast caption'
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
import CPage from '@/components/dashboard/CPage.vue';
import CButton from '@/components/ui/CButton.vue';
import { useToast } from '@/composables/useToast';
import type { ToastType } from '@/types/components/ui/toast_type';

const toast = useToast();

const testToast = (type: ToastType) => {
    toast.addToast({
        permanent: false,
        type: type as ToastType,
        message: 'Lorem dolor toast message ' + Date.now(),
        caption: 'This is a lorem dolor toast caption'
    });
};

</script>

<style scoped></style>