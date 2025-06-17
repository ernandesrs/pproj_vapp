<template>
    <div>
        <label :for="getId"
            class="cursor-pointer relative flex items-center h-8 w-14 rounded-full transition-colors p-1" :class="{
                'bg-neutral-300': !checked,
                'bg-emerald-500': checked,
            }">
            <input @change="(a) => {
                checked = !checked;
            }" type="checkbox" :id="getId" class="peer sr-only z-0" />

            <div class="absolute z-10 flex justify-center items-center size-6 rounded-full bg-white text-neutral-700 transition-[inset-inline-start] text-xs"
                :class="checked ? 'right-1' : ''">
                <CIcon v-if="checked" :name="props.iconOnChecked" />
                <CIcon v-else="checked" :name="props.iconOnUnchecked" />
            </div>
        </label>
    </div>
</template>

<script setup lang="ts">

import type { ToggleProps } from '@/types/components/ui/toggle_type';
import CIcon from './CIcon.vue';
import { computed, ref, watch } from 'vue';

const emit = defineEmits(['update:modelValue', 'checked', 'unchecked']);

const props = withDefaults(defineProps<ToggleProps>(), {
    modelValue: false,
    iconOnChecked: 'check',
    iconOnUnchecked: 'x',
});

const checked = ref<boolean>(props.modelValue);

const getId = computed(() => {
    return props.id ?? 'toggle_auto_id' + crypto.randomUUID();
});

watch(() => props.modelValue, (n) => {
    checked.value = n;
}, { deep: false, immediate: false });

watch(() => checked.value, (n) => {
    emit('update:modelValue', n);
    n ? emit('checked', true) : emit('unchecked', false);
});

</script>

<style scoped></style>