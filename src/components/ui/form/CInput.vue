<template>
    <div>
        <div class="relative flex items-center">
            <label class="absolute ml-5 transition-all duration-200" :class="{
                'text-sm': !focused,
                'top-[5px] text-xs': focused || (value + '').length > 0,

                'text-neutral-400 dark:text-neutral-500': !hasError,
                'text-rose-500 dark:text-rose-800': hasError,
            }" :for="getId" v-text="props.label"></label>

            <div class="flex items-center w-full h-[60px] rounded-lg border" :class="{
                'bg-zinc-50 dark:bg-zinc-900': !focused,
                'bg-white dark:bg-zinc-800': focused,

                'border-zinc-300 dark:border-zinc-700': !hasError,
                'border-rose-500 dark:border-rose-800': hasError,
            }">
                <input @focusin="focused = true" @focusout="focused = false" v-model="value"
                    class="w-full h-full px-5 rounded-lg outline-0"
                    :type="props.type == 'password' ? (showPassword ? 'text' : 'password') : props.type" :id="getId"
                    :name="getId">

                <button @click="showPassword = !showPassword" v-if="props.type == 'password'"
                    class="size-9 mr-2.5 cursor-pointer">
                    <CIcon :name="showPassword ? 'eye-slash-fill' : 'eye-fill'" />
                </button>
            </div>
        </div>

        <small v-if="hasError" v-text="errorMessage" class="text-red-600 dark:text-red-700 ml-2"></small>
    </div>
</template>

<script setup lang="ts">

import type { InputProps } from '@/types/components/ui/form_type';
import { ref, watch } from 'vue';
import CIcon from '../CIcon.vue';
import { useBaseFormFields } from '@/composables/useBaseFormFields';

const emit = defineEmits(['update:modelValue']);

const props = withDefaults(defineProps<InputProps>(), {
    type: 'text'
});

const { getId, hasError, errorMessage } = useBaseFormFields(props.id, () => props.error);

const showPassword = ref<boolean>(false);
const focused = ref<boolean>(false);
const value = ref<string | number>(props.modelValue);

watch(() => value.value, (n) => {
    emit('update:modelValue', n);
});

</script>

<style scoped></style>