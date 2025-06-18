<template>
    <div class="border border-dashed w-full h-[60px] rounded-lg duration-200" :class="{
        'border-neutral-400 dark:border-neutral-700 bg-zinc-100 dark:bg-zinc-900': !isDragging,
        'bg-white dark:bg-zinc-800 border-zinc-600 shadow': isDragging
    }">
        <input @input="onFileInput" ref="inputRef" type="file" class="hidden" :multiple="props.multiple ? true : false">

        <div dropzone @dragover.prevent="isDragging = true" @dragleave.prevent="isDragging = false"
            @drop.prevent="onDropFiles" class="w-full h-full relative flex gap-2.5 items-center p-2.5 rounded-lg">
            <div class="w-full text-center text-zinc-400 dark:text-zinc-600 cursor-default pointer-events-none">
                <span>{{ props.label }}</span>
            </div>

            <button @click="inputRef ? inputRef.click() : ''"
                class="cursor-pointer bg-zinc-200 dark:bg-zinc-800 shadow-sm size-10 rounded-lg">
                <CIcon name="upload" />
            </button>
        </div>

    </div>
</template>

<script setup lang="ts">

import { ref, watch } from 'vue';
import CIcon from '../CIcon.vue';
import type { UplaodProps } from '@/types/components/ui/form_type';

const emit = defineEmits(['update:modelValue']);
const props = withDefaults(defineProps<UplaodProps>(), {});

const isDragging = ref<boolean>(false);

const inputRef = ref<HTMLElement | null>(null);
const files = ref<Array<File>>([]);

const onFileInput = (e: Event) => {
    const target = e.target as HTMLInputElement | null;

    if (!target || !target?.files) return;

    addFiles(target.files);
};

const onDropFiles = (e: DragEvent) => {
    if (e.dataTransfer) {
        addFiles(e.dataTransfer.files);
    }
};

const addFiles = (filesList: FileList) => {
    let count = 0;
    files.value = [];
    do {
        files.value.push(filesList[count]);
        count++;
    } while (count < filesList.length);
};

watch(() => files.value, (n) => {
    emit('update:modelValue', n);
}, { deep: true });

</script>

<style scoped></style>