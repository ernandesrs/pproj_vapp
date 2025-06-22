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
import { computed } from 'vue';
import { useBaseFormFields } from '@/composables/useBaseFormFields';
import CToggle from '../CToggle.vue';

const emit = defineEmits(['update:modelValue', 'checked', 'unchecked', 'validated', 'invalidated']);

const props = withDefaults(defineProps<ToggleProps>(), {
    modelValue: false,
    iconOnChecked: 'check',
    iconOnUnchecked: 'x',
});

const { getId, hasError, errorMessage, validateField } = useBaseFormFields(props.id, () => props.error, () => props.validationRule, emit);

const checked = computed({
    get: () => props.modelValue,
    set: (val) => {
        emit('update:modelValue', val);
        val ? emit('checked', true) : emit('unchecked', false);
        validateField(val);
    }
});
</script>

<style scoped></style>