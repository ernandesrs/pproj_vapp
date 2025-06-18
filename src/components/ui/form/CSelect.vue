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
                <select @focusin="focused = true" @focusout="focused = false" v-model="value"
                    class="w-full h-full px-5 rounded-lg outline-0" :type="props.type" :id="getId" :name="getId">
                    <option v-for="(option, index) in props.options" :key="'select_option_' + (index + 1)"
                        :value="option.value" v-text="option.label">
                    </option>
                </select>

            </div>
        </div>

        <small v-if="hasError" v-text="props.error" class="text-red-600 dark:text-red-700 ml-2"></small>
    </div>
</template>

<script setup lang="ts">

import type { SelectProps } from '@/types/components/ui/form_type';
import { computed, ref, watch } from 'vue';

const emit = defineEmits(['update:modelValue']);

const props = withDefaults(defineProps<SelectProps>(), {});

const focused = ref<boolean>(false);
const value = ref<string | number | object>(props.modelValue);

const getId = computed((): string => {
    return props.id ?? 'form_select_' + crypto.randomUUID();
});

const hasError = computed((): boolean => {
    return (props.error ?? '').length == 0 ? false : true;
});

watch(() => value.value, (n) => {
    emit('update:modelValue', n);
});

</script>

<style scoped></style>