<template>
    <div class="bg-white shadow dark:bg-neutral-900 rounded-lg p-5 w-full max-w-[475px] mx-auto">
        <div class="text-xl font-medium text-center mb-5">
            LOGIN
        </div>

        <div>
            <CForm :on-submit="onSubmit" :data="loginForm" :validation-schema="loginValidationSchema"
                submit-text="Login">
                <CInput class="col-span-12" v-model="loginForm.email" type="email" label="E-mail" id="email" />
                <CInput class="col-span-12" v-model="loginForm.password" type="password" label="Password"
                    id="password" />

                <div class="col-span-12 flex justify-center">
                    <CToggle v-model="loginForm.remember" label="Remember-me" right-label id="remember" />
                </div>
            </CForm>
        </div>
    </div>
</template>

<script setup lang="ts">

import CForm from '@/components/ui/form/CForm.vue';
import CInput from '@/components/ui/form/CInput.vue';
import CToggle from '@/components/ui/form/CToggle.vue';
import { useAppSettings } from '@/composables/useAppSettings';
import { yupValidator } from '@/utils/validator';
import { onMounted, ref } from 'vue';

const { setAppTitle } = useAppSettings();

const loginValidationSchema = yupValidator.object({
    email: yupValidator.string().required('Required field').email('Requires a valid e-mail'),
    password: yupValidator.string().required('Required field'),
    remember: yupValidator.boolean()
});

const loginForm = ref<{
    email: string,
    password: string,
    remember: boolean
}>({
    email: '',
    password: '',
    remember: false
});

const onSubmit = async (validated: any): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(validated);
            resolve();
        }, 5000);
    });
};

onMounted(() => {

    setAppTitle('Access your account');

});

</script>

<style scoped></style>