<template>
    <CPage title="Introduction" without-header>

        <CDocSection :data="[
            {
                tag: 'h1',
                title: 'Introduction',
                texts: [
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi adipisci, accusamus cupiditate qui aut doloremque odio sapiente est quasi. Ratione, adipisci eligendi sit delectus aliquam eos quam. Neque, vel aspernatur?'
                ],
            },
            {
                tag: 'h1',
                title: 'Icons',
                texts: [
                    'Esta aplicação utiliza a biblioteca de ícones <b>Bootstrap Icons</b><i>(https://icons.getbootstrap.com)</i>.',
                ],
            },
            {
                tag: 'h1',
                title: 'Layouts',
                texts: [
                    'Novos layouts podem ser facilmente construídos do zero, cujas funcionalidades mais essenciais como abrir/mostrar o sidebar, dark mode e título, são abstraídos em um composable <b>useAppSettings</b>.',
                ],
            }
        ]">
        </CDocSection>

    </CPage>
</template>

<script setup lang="ts">

import CDocSection from '@/components/dashboard/CDocSection.vue';
import CPage from '@/components/dashboard/CPage.vue';

</script>

<style scoped></style>