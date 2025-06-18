<template>
    <div class="bg-white shadow dark:bg-neutral-900 rounded-lg p-5 w-full max-w-[575px] mx-auto">
        <div class="text-xl font-medium text-center mb-5">
            REGISTER
        </div>

        <div class="grid grid-cols-12 gap-5">

            <div class="col-span-12 flex justify-center">
                {{ formData }}
            </div>

            <CInput class="col-span-12 sm:col-span-6" v-model="formData.first_name" label="First name" type="text" />
            <CInput class="col-span-12 sm:col-span-6" v-model="formData.last_name" label="Last name" type="text" />
            <CInput class="col-span-12 sm:col-span-6" v-model="formData.username" label="Username" type="text" />
            <CInput class="col-span-12" v-model="formData.email" label="E-mail" type="email" />
            <CInput class="col-span-12 sm:col-span-6" v-model="formData.password" label="Password" type="password" />
            <CInput class="col-span-12 sm:col-span-6" v-model="formData.password_confirmation"
                label="Password confirmation" type="password" />

            <div class="col-span-12 flex justify-center">
                <CButton icon="check-lg" label="Submit form" />
            </div>

        </div>
    </div>
</template>


<script setup lang="ts">

import CButton from '@/components/ui/CButton.vue';
import CInput from '@/components/ui/form/CInput.vue';
import { useAppSettings } from '@/composables/useAppSettings';
import { onMounted, ref } from 'vue';

const { setAppTitle } = useAppSettings();

const formData = ref<{
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    password: string,
    password_confirmation: string,
}>({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
});

onMounted(() => {

    setAppTitle('Create an account');

});

</script>

<style scoped></style>