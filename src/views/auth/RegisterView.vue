<template>
    <div class="bg-white shadow dark:bg-neutral-900 rounded-lg p-5 w-full max-w-[575px] mx-auto">
        <div class="text-xl font-medium text-center mb-5">
            REGISTER
        </div>

        <div class="grid grid-cols-12 gap-5">

            <CForm :on-submit="onSubmit" :data="formData" :validation-schema="formDataSchema"
                :external-errors="externalErrors" class="col-span-12">
                <CInput @validated="(e) => { console.log(e) }" @invalidated="(e) => { console.log(e) }"
                    class="col-span-12 sm:col-span-6" v-model="formData.first_name" id="first_name" label="First name"
                    type="text" :validation-rule="yupValidator.string().required().min(5)" />
                <CInput class="col-span-12 sm:col-span-6" v-model="formData.last_name" id="last_name" label="Last name"
                    type="text" />
                <CInput class="col-span-12 sm:col-span-6" v-model="formData.username" id="username" label="Username"
                    type="text" />
                <CSelect @validated="(e) => { console.log(e) }" @invalidated="(e) => { console.log(e) }"
                    class="col-span-12 sm:col-span-6" v-model="formData.gender" id="gender" label="Gender" :options="[
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
                    ]" :validation-rule="yupValidator.mixed().oneOf(['male', 'female'])" />
                <CInput class="col-span-12" v-model="formData.email" id="email" label="E-mail" type="email" />

                <CInput class="col-span-12 sm:col-span-6" v-model="formData.password" id="password" label="Password"
                    type="password" />
                <CInput class="col-span-12 sm:col-span-6" v-model="formData.password_confirmation"
                    id="password_confirmation" label="Password confirmation" type="password" />

                <div class="col-span-12 flex items-center justify-center gap-2.5">
                    <CToggle v-model="formData.accept_terms" id="accept_terms" label="Accept terms and conditions"
                        right-label :validation-rule="yupValidator.boolean().isFalse()" />
                </div>
            </CForm>

            <CUpload @validated="(e) => { console.log(e) }" @invalidated="(e) => { console.log(e) }" class="col-span-12"
                v-model="p" label="Upload" id="p"
                :validation-rule="yupValidator.mixed().allowedMimeTypes(['image/jpg', 'image/jpeg'])" />

        </div>
    </div>
</template>


<script setup lang="ts">

import CToggle from '@/components/ui/form/CToggle.vue';
import CForm from '@/components/ui/form/CForm.vue';
import CInput from '@/components/ui/form/CInput.vue';
import CSelect from '@/components/ui/form/CSelect.vue';
import { useAppSettings } from '@/composables/useAppSettings';
import { onMounted, ref } from 'vue';
import { yupValidator } from '@/utils/validator';
import CUpload from '@/components/ui/form/CUpload.vue';

const { setAppTitle } = useAppSettings();
const p = ref<Array<File>>([]);
const formDataSchema = yupValidator.object({
    first_name: yupValidator.string().required(),
    last_name: yupValidator.string().required(),
    username: yupValidator.string().required(),
    email: yupValidator.string().required().email(),
    gender: yupValidator.mixed().required().oneOf(Array().concat(['male', 'female'])),
    password: yupValidator.string().required().confirmedPassword(),
    accept_terms: yupValidator.boolean().isTrue('Accept our terms')
});

const externalErrors = ref<Record<string, string>>({});


const formData = ref<{
    first_name: string,
    last_name: string,
    username: string,
    gender: string,
    email: string,
    password: string,
    password_confirmation: string,
    accept_terms: boolean
}>({
    first_name: '',
    last_name: '',
    username: '',
    gender: '',
    email: '',
    password: '',
    password_confirmation: '',
    accept_terms: false
});

const onSubmit = async (validated: any): Promise<void | unknown> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(validated);
            resolve({});
        }, 2500);
    }).catch((e) => {
        externalErrors.value = e.validation_errors;
    });
};

onMounted(() => {

    setAppTitle('Create an account');

});

</script>

<style scoped></style>