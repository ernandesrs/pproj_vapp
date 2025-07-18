<template>
    <CDialog v-model="show" :title="props.title" :size="props.size" persistent hide-close-button>
        <template #footer>
            <div class="flex justify-between items-center gap-5">
                <CButton @click="cancel" :label="props.onCancel?.buttonLabel ?? 'Cancel'" :loading="cancelling" :class="{
                    'pointer-events-none opacity-50': confirming
                }" icon="x-lg" color="danger" variant="text" />
                <CButton @click="confirm" :label="props.onConfirm?.buttonLabel ?? 'Confirm'" :loading="confirming"
                    :class="{
                        'pointer-events-none opacity-50': cancelling
                    }" icon="check-lg" color="danger" variant="filled" />
            </div>
        </template>

        <template v-if="$slots.default">
            <slot />
        </template>
        <template v-else>
            {{ props.text }}
        </template>
    </CDialog>
</template>

<script setup lang="ts">

import type { DialogConfirmationProps } from '@/types/components/ui/dialog_type';
import CDialog from './CDialog.vue';
import { computed, ref } from 'vue';
import CButton from './CButton.vue';

const emit = defineEmits(['update:modelValue']);

const props = withDefaults(defineProps<DialogConfirmationProps>(), {
    title: 'Confirm action!',
    text: 'This action needs your confirmation.'
});

const show = computed({
    get: () => props.modelValue,
    set: (value: boolean) => {
        emit('update:modelValue', value)
    }
});

const confirming = ref<boolean>(false);
const cancelling = ref<boolean>(false);

const confirm = async (): Promise<void> => {
    confirming.value = true;
    try {
        return await props.onConfirm.callback();
    } finally {
        confirming.value = false;
        show.value = false;
        return;
    }
};

const cancel = async (): Promise<void> => {
    cancelling.value = true;
    try {
        return await props.onCancel?.callback?.();
    } finally {
        cancelling.value = false;
        show.value = false;
        return;
    }
};

</script>

<style scoped></style>