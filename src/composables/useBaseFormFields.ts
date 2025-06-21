import { computed, inject, ref, watch, type Ref } from "vue";
import type { Schema } from "yup";

export function useBaseFormFields(
    id: string,
    externalError?: () => string | undefined,
    validationRules?: () => Schema<any> | undefined,
    emit?: (event: 'validated' | 'invalidated', payload?: any) => void) {

    // vars
    const fieldsErrors = inject<Ref<Record<string, boolean>>>('fieldsErrors', ref({}));
    const errors = inject<Ref<Record<string, string>>>('errors', ref({}))
    const errorMessage = ref<string | null>(null);

    // methods
    const validateField = async (value: any) => {
        const schema = validationRules ? validationRules() : null;

        if (!schema) {
            emit ? emit('validated', value) : null;
            return true;
        }

        errorMessage.value = null;
        delete fieldsErrors.value[id];
        delete errors.value[id]; // errors.value[id] = '';

        try {
            await schema.validate(value);

            emit ? emit('validated', value) : null;

            return true;
        } catch (err) {
            if (err instanceof Error) {
                errorMessage.value = err.message;

                fieldsErrors.value[id] = true;
                errors.value[id] = err.message;
            }

            emit ? emit('invalidated', errorMessage.value) : null;

            return false;
        }
    };

    // computeds
    const getId = computed(() => id);
    const hasError = computed(() => !!errorMessage.value);

    // watchs
    watch(() => externalError?.(), (n) => {
        errorMessage.value = n ?? null;
    }, { immediate: true });

    watch(() => errors, () => {
        const inputError = Object.entries(errors.value).find((err) => err[0] === id);

        errorMessage.value = inputError ? inputError[1] : null;
    }, { deep: true });

    return {
        errorMessage,
        validateField,
        hasError,
        getId
    };
};