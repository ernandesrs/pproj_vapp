<template>
    <div class="bg-white shadow dark:bg-neutral-900 rounded-lg p-5 w-full max-w-[475px] mx-auto">
        <div class="text-xl font-medium text-center mb-5">
            LOGIN
        </div>

        <div>
            <CForm :on-submit="onSubmit" :data="loginForm" :external-errors="externalErrors" submit-text="Login">
                <CInput class="col-span-12" v-model="loginForm.email" type="email" label="E-mail" id="email"
                    :validation-rule="yupValidator.string().required('Required field').email('Requires a valid e-mail')" />
                <CInput class="col-span-12" v-model="loginForm.password" type="password" label="Password" id="password"
                    :validation-rule="yupValidator.string().required('Required field')" />

                <div class="col-span-12 flex justify-center">
                    <CToggle v-model="loginForm.remember" label="Remember-me" right-label id="remember"
                        :validation-rule="yupValidator.boolean()" />
                </div>
            </CForm>
        </div>
    </div>
</template>

<script setup lang="ts">

import CForm from '@/components/ui/form/CForm.vue';
import CInput from '@/components/ui/form/CInput.vue';
import CToggle from '@/components/ui/form/CToggle.vue';
import { useApp } from '@/composables/useApp';
import { yupValidator } from '@/utils/validator';
import { onMounted, ref } from 'vue';

const { setAppTitle } = useApp();

const externalErrors = ref<Record<string, string>>({});

const loginForm = ref<{
    email: string,
    password: string,
    remember: boolean
}>({
    email: '',
    password: '',
    remember: false
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

    setAppTitle('Access your account');

});

</script>

<style scoped></style>