<template>
    <form @submit.prevent="onSubmit">
        <div class="grid grid-cols-12 gap-5">
            <slot />
        </div>

        <div class="w-full flex justify-center mt-5">
            <CButton type="submit" icon="check-lg" :label="props.submitText" />
        </div>
    </form>
</template>

<script setup lang="ts">

import type { FormProps } from '@/types/components/ui/form_type';
import CButton from '../CButton.vue';
import { provide, ref } from 'vue';

const props = withDefaults(defineProps<FormProps>(), {
    submitText: 'Submit form'
});

const validationErrors = ref<Record<string, string | string[]>>({});

const onSubmit = async () => {
    if (props.validationSchema && !(await validate())) {
        // Validation fail
        return;
    }

    // Validated
    console.log('Success!', props.data);
};

const validate = async (): Promise<boolean> => {
    validationErrors.value = {};

    try {
        await props.validationSchema.validate(props.data, { strict: true, abortEarly: false });
        return true;
    } catch (error) {
        const errors = error.inner as [];
        errors.map((err) => {
            validationErrors.value[err.path] = err.message;
        });
        return false;
    }
};

provide('errors', validationErrors);

</script>

<style scoped></style>