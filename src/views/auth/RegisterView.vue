<template>
    <div class="bg-white shadow dark:bg-neutral-900 rounded-lg p-5 w-full max-w-[575px] mx-auto">
        <div class="text-xl font-medium text-center mb-5">
            REGISTER
        </div>

        <div class="grid grid-cols-12 gap-5">

            <div class="col-span-12 flex justify-center">
                {{ formData }}
            </div>

            <CForm :data="formData" :validation-schema="formDataSchema" class="col-span-12">
                <CInput class="col-span-12 sm:col-span-6" v-model="formData.first_name" id="first_name"
                    label="First name" type="text" />
                <CInput class="col-span-12 sm:col-span-6" v-model="formData.last_name" id="last_name" label="Last name"
                    type="text" />
                <CInput class="col-span-12 sm:col-span-6" v-model="formData.username" id="username" label="Username"
                    type="text" />
                <CSelect class="col-span-12 sm:col-span-6" v-model="formData.gender" id="gender" label="Gender"
                    :options="[
                        {
                            label: 'None',
                            value: 'none'
                        },
                        {
                            label: 'Female',
                            value: 'female'
                        },
                        {
                            label: 'Male',
                            value: 'male'
                        }
                    ]" />
                <CInput class="col-span-12" v-model="formData.email" id="email" label="E-mail" type="email" />

                <CInput class="col-span-12 sm:col-span-6" v-model="formData.password" id="password" label="Password"
                    type="password" />
                <CInput class="col-span-12 sm:col-span-6" v-model="formData.password_confirmation"
                    id="password_confirmation" label="Password confirmation" type="password" />

                <div class="col-span-12 flex items-center justify-center gap-2.5">
                    <CToggle v-model="formData.accept_terms" /> Accept <a href="#" class="text-violet-500">terms and
                        conditions</a>
                </div>
            </CForm>

        </div>
    </div>
</template>


<script setup lang="ts">

import CToggle from '@/components/ui/CToggle.vue';
import CForm from '@/components/ui/form/CForm.vue';
import CInput from '@/components/ui/form/CInput.vue';
import CSelect from '@/components/ui/form/CSelect.vue';
import { useAppSettings } from '@/composables/useAppSettings';
import { onMounted, ref } from 'vue';
import * as yup from 'yup';

const { setAppTitle } = useAppSettings();

const formDataSchema = yup.object({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    username: yup.string().required(),
    email: yup.string().required().email(),
    gender: yup.mixed().required().oneOf(Array().concat(['male', 'female']))
});

const formData = ref<{
    first_name: string,
    last_name: string,
    username: string,
    gender: string,
    email: string,
    password: string,
    password_confirmation: string,
    photo: Array<File>,
    accept_terms: boolean
}>({
    first_name: '',
    last_name: '',
    username: '',
    gender: '',
    email: '',
    password: '',
    password_confirmation: '',
    photo: [],
    accept_terms: false
});

onMounted(() => {

    setAppTitle('Create an account');

});

</script>

<style scoped></style>