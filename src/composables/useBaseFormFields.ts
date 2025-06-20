import { computed, inject, ref, watch, type Ref } from "vue";
import type { Schema } from "yup";

export function useBaseFormFields(id: string, externalError?: () => string | undefined, validationRules?: () => Schema<any> | undefined) {
    // vars
    const errors = inject<Ref<Record<string, string>>>('errors', ref({}))
    const errorMessage = ref<string | null>(null);

    // methods
    const validateField = async (value: any) => {
        if (!validationRules) {
            return true;
        }

        const schema = validationRules();
        if (!schema) return true;

        errorMessage.value = null;
        delete errors.value[id]; // errors.value[id] = '';

        try {
            await schema.validate(value);
            return true;
        } catch (err) {
            if (err instanceof Error) {
                errorMessage.value = err.message;
                errors.value[id] = err.message;
            }
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