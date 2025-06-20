<template>
    <div>
        <CToggle v-model="checked" :id="getId" :label="props.rightLabel ? undefined : props.label"
            :append-label="props.rightLabel ? props.label : undefined" :class="{
                'text-red-500 dark:text-red-600': hasError
            }" />

        <small v-if="hasError" v-text="errorMessage" class="text-red-600 dark:text-red-700 ml-2"></small>
    </div>
</template>

<script setup lang="ts">

import type { ToggleProps } from '@/types/components/ui/form_type';
import { ref, watch } from 'vue';
import { useBaseFormFields } from '@/composables/useBaseFormFields';
import CToggle from '../CToggle.vue';

const emit = defineEmits(['update:modelValue', 'checked', 'unchecked']);

const props = withDefaults(defineProps<ToggleProps>(), {
    modelValue: false,
    iconOnChecked: 'check',
    iconOnUnchecked: 'x',
});

const { getId, hasError, errorMessage, validateField } = useBaseFormFields(props.id, () => props.error, () => props.validationRule);

const checked = ref<boolean>(props.modelValue);

watch(() => props.modelValue, (n) => {
    checked.value = n;
}, { deep: false, immediate: false });

watch(() => checked.value, (n) => {
    emit('update:modelValue', n);
    n ? emit('checked', true) : emit('unchecked', false);
    validateField(n);
});

</script>

<style scoped></style>