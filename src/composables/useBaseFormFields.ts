import { computed, inject, ref, watch } from "vue";

export function useBaseFormFields(id: string, externalError?: () => string | undefined) {
    // vars
    const errors = inject<Record<string, string>>('errors', {});
    const errorMessage = ref<string | null>(null);

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
        hasError,
        getId
    };
};