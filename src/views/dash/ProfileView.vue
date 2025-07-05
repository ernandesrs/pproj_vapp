<template>
    <CPage title="My profile">
        <CPageSection with-grid>
            <CCard class="col-span-12 lg:col-span-8">
                <CForm @invalidated="validationFailed" :on-submit="formSubmit" :external-errors="externalErrors"
                    :data="profileDataForm" :validation-schema="profileDataValidation" submit-text="Update form">
                    <CInput class="col-span-12 sm:col-span-6" v-model="profileDataForm.first_name" label="First name"
                        id="first_name" />
                    <CInput class="col-span-12 sm:col-span-6" v-model="profileDataForm.last_name" label="Last name"
                        id="last_name" />
                    <CInput class="col-span-12 sm:col-span-6" v-model="profileDataForm.username" label="Username"
                        id="username" />
                    <CSelect class="col-span-12 sm:col-span-6" v-model="profileDataForm.gender" id="gender"
                        label="Gender" :options="[
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
                    <CUpload class="col-span-12" v-model="profileDataForm.photo" id="photo"
                        label="Drag and drop here, your profile photo"
                        :allowed-mime-types="['image/jpeg', 'image/jpg', 'image/png']" :limit="1" />
                    <CInput class="col-span-12" v-model="profileDataForm.email" id="email" label="E-mail"
                        type="email" />

                    <CInput class="col-span-12 sm:col-span-6" v-model="profileDataForm.password" id="password"
                        label="Password" type="password" />
                    <CInput class="col-span-12 sm:col-span-6" v-model="profileDataForm.password_confirmation"
                        id="password_confirmation" label="Password confirmation" type="password" />
                </CForm>
            </CCard>

            <CCard class="col-span-12 lg:col-span-4"></CCard>
        </CPageSection>
    </CPage>
</template>

<script setup lang="ts">

import CPage from '@/components/ui/layout/CPage.vue';
import CPageSection from '@/components/ui/layout/CPageSection.vue';
import CCard from '@/components/ui/CCard.vue';
import CForm from '@/components/ui/form/CForm.vue';
import CInput from '@/components/ui/form/CInput.vue';
import CSelect from '@/components/ui/form/CSelect.vue';
import CUpload from '@/components/ui/form/CUpload.vue';
import { useApp } from '@/composables/useApp';
import { yupValidator } from '@/utils/validator';
import { ref } from 'vue';

const { addToast } = useApp();

const externalErrors = ref<Record<string, string>>({});

const profileDataValidation = yupValidator.object({
    first_name: yupValidator.string().required(),
    last_name: yupValidator.string().required(),
    username: yupValidator.string().required(),
    email: yupValidator.string().required().email(),
    photo: yupValidator.mixed().allowedMimeTypes(['image/jpeg', 'image/jpg', 'image/png']).maxSize(0.5),
    gender: yupValidator.mixed().required().oneOf(Array().concat(['male', 'female'])),
    password: yupValidator.string().confirmedPassword()
});

const profileDataForm = ref<{
    first_name: string,
    last_name: string,
    username: string,
    gender: string,
    email: string,
    photo: Array<File>,
    password: string,
    password_confirmation: string
}>({
    first_name: '',
    last_name: '',
    username: '',
    gender: '',
    email: '',
    photo: [],
    password: '',
    password_confirmation: ''
});

const validationFailed = () => {
    addToast({
        location: 'top-center',
        type: 'error',
        message: 'One or more provided data is invalid!'
    });
};

const formSubmit = async () => {
    // 
};

</script>

<style scoped></style>