<template>
    <form @submit.prevent="onSubmit">
        <div class="grid grid-cols-12 gap-5">
            <slot />
        </div>

        <div class="w-full flex justify-center mt-5 relative">
            <div v-if="submitting" class="w-full h-full absolute z-10 top-0 left-0"></div>
            <CButton type="submit" icon="check-lg" :label="props.submitText" :loading="submitting" :class="{
                'relative z-0': submitting
            }" />
        </div>
    </form>
</template>

<script setup lang="ts">

import type { FormProps } from '@/types/components/ui/form_type';
import CButton from '../CButton.vue';
import { provide, ref, watch } from 'vue';
import { ValidationError } from 'yup';

const props = withDefaults(defineProps<FormProps>(), {
    submitText: 'Submit form'
});

const fieldsValidationErrors = ref<Record<string, boolean>>({});
const validationErrors = ref<Record<string, string>>({});

const submitting = ref<boolean>(false);

const onSubmit = async () => {
    if (Object.entries(fieldsValidationErrors.value).length > 0) {
        // Validation on one or more fields, with validation rule fails
        return;
    }

    const validatedData = await validate();

    if (!validatedData) {
        // Validation on form, with validation schema fails
        return;
    }

    // Validated
    submitting.value = true;
    try {
        await props.onSubmit(validatedData);
    } finally {
        submitting.value = false;
    }
};

const validate = async (): Promise<any> => {
    validationErrors.value = {};

    if (!props.validationSchema) {
        return true;
    }

    try {
        const validated = await props.validationSchema.validate(props.data, {
            strict: true,
            abortEarly: false,
            stripUnknown: true,
        });
        return validated;
    } catch (error: unknown) {
        if (error instanceof ValidationError) {
            error.inner.forEach((err: ValidationError) => {
                if (err.path) {
                    validationErrors.value[err.path] = err.message;
                }
            });
        } else {
            console.error('Unexpected error:', error);
        }
        return null;
    }
};

watch(() => props.externalErrors, (n) => {
    if (n) {
        validationErrors.value = n;
    }
}, { deep: true, immediate: true });

provide('fieldsErrors', fieldsValidationErrors);
provide('errors', validationErrors);

</script>

<style scoped></style>