<template>
    <div class="relative flex items-center">
        <label class="absolute text-neutral-400 dark:text-neutral-500 ml-5 transition-all duration-200" :class="{
            'text-sm': !focused,
            'top-[5px] text-xs': focused || (value + '').length > 0
        }" :for="getId" v-text="props.label"></label>

        <div class="flex items-center w-full h-[60px] rounded-lg border border-zinc-300 dark:border-zinc-700" :class="{
            'bg-zinc-50 dark:bg-zinc-900': !focused,
            'bg-white dark:bg-zinc-800': focused,
        }">
            <input @focusin="focused = true" @focusout="focused = false" v-model="value"
                class="w-full h-full px-5 rounded-lg outline-0"
                :type="props.type == 'password' ? (showPassword ? 'text' : 'password') : props.type" :id="getId" :name="getId">

            <button @click="showPassword = !showPassword" v-if="props.type == 'password'"
                class="size-9 mr-2.5 cursor-pointer">
                <CIcon :name="showPassword ? 'eye-slash-fill' : 'eye-fill'" />
            </button>
        </div>

    </div>
</template>

<script setup lang="ts">

import type { InputProps } from '@/types/components/ui/form_type';
import { computed, ref, watch } from 'vue';
import CIcon from '../CIcon.vue';

const emit = defineEmits(['update:modelValue']);

const props = withDefaults(defineProps<InputProps>(), {
    type: 'text'
});

const showPassword = ref<boolean>(false);
const focused = ref<boolean>(false);
const value = ref<string | number>(props.modelValue);

const getId = computed((): string => {
    return props.id ?? 'form_input_' + crypto.randomUUID();
});

watch(() => value.value, (n) => {
    emit('update:modelValue', n);
});


</script>

<style scoped></style>