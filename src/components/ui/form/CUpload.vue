<template>
    <div>
        <div class="border border-dashed w-full h-[60px] rounded-lg duration-200" :class="{
            'border-neutral-400 dark:border-neutral-700 bg-zinc-100 dark:bg-zinc-900': !isDragging,
            'bg-white dark:bg-zinc-800 border-zinc-600 shadow': isDragging,

            'text-neutral-400 dark:text-neutral-500': !hasError,
            'text-rose-500 dark:text-rose-800': hasError,
            'border-zinc-300 dark:border-zinc-700': !hasError,
            'border-rose-500 dark:border-rose-800': hasError,
        }">
            <input @input="onFileInput" ref="inputRef" type="file" :id="getId" :name="getId" class="hidden"
                :multiple="isMultiple" :accept="props.allowedMimeTypes ? props.allowedMimeTypes.join(',') : ''">

            <div dropzone @dragover.prevent="isDragging = true" @dragleave.prevent="isDragging = false"
                @drop.prevent="onDropFiles" class="w-full h-full relative flex gap-2.5 items-center p-2.5 rounded-lg">
                <div class="w-full text-center text-zinc-400 dark:text-zinc-600 cursor-default pointer-events-none">
                    <span>{{ props.label }}</span>
                </div>

                <button type="button" @click="inputRef ? inputRef.click() : ''"
                    class="cursor-pointer bg-zinc-200 dark:bg-zinc-800 text-zinc-500 dark:text-white shadow-sm size-10 rounded-lg">
                    <CIcon name="upload" />
                </button>
            </div>
        </div>

        <!-- files list -->
        <div v-if="files.length > 0"
            class="pb-1.5 w-full flex items-center-safe gap-2.5 mt-1 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700 scrollbar-track-zinc-100 dark:scrollbar-track-zinc-800">
            <div v-for="(file, index) in renderableFiles" :key="'file_item_' + (index + 1)"
                class="bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-lg flex gap-2.5 items-center py-1 px-2.5 cursor-default">
                <div class="text-xs">
                    {{ file.name }}...{{ file.type }}
                </div>
                <button type="button" @click="deleteFile(index)"
                    class="cursor-pointer size-5 bg-rose-600 hover:bg-rose-700 duration-200 text-white rounded-full flex items-center justify-center">
                    <CIcon name="x" />
                </button>
            </div>
        </div>

        <small v-if="hasError" v-text="errorMessage" class="text-red-600 dark:text-red-700 ml-2"></small>
    </div>
</template>

<script setup lang="ts">

import { computed, ref, watch } from 'vue';
import CIcon from '../CIcon.vue';
import type { UploadProps } from '@/types/components/ui/form_type';
import { useBaseFormFields } from '@/composables/useBaseFormFields';

const emit = defineEmits(['update:modelValue']);
const props = withDefaults(defineProps<UploadProps>(), {
    allowedMimeTypes: () => []
});

const { getId, hasError, errorMessage, validateField } = useBaseFormFields(props.id, () => props.error, () => props.validationRule);

const isDragging = ref<boolean>(false);

const inputRef = ref<HTMLElement | null>(null);
const files = ref<Array<File>>([]);
const renderableFiles = ref<Array<{
    name: string,
    type: string
}>>([]);

const onFileInput = (e: Event) => {
    const target = e.target as HTMLInputElement | null;

    if (!target || !target?.files) return;

    addFiles(target.files);
};

const onDropFiles = (e: DragEvent) => {
    isDragging.value = false;

    if (e.dataTransfer) {
        addFiles(e.dataTransfer.files);
    }
};

const addFiles = (filesList: FileList) => {
    let count = 0;

    errorMessage.value = null;
    files.value = [];

    do {
        const file = filesList[count];

        if (props.allowedMimeTypes.length == 0) {
            files.value.push(file);
        } else if (props.allowedMimeTypes.includes(file.type)) {
            files.value.push(file);
        } else {
            files.value = [];
            errorMessage.value = 'One or more dropped file has invalid type';
            count = filesList.length;
        }

        count++;

        if (!isMultiple.value || props.limit == count) {
            count = filesList.length;
        }
    } while (count < filesList.length);

    validateField(files.value);
};

const deleteFile = (index: number) => {
    files.value = files.value.filter((file, fileIndex) => index !== fileIndex);
};

const isMultiple = computed((): boolean => {
    return props.limit && props.limit > 1 ? true : false;
});

watch(() => files.value, (n) => {
    emit('update:modelValue', n);

    renderableFiles.value = [];
    n.map((file) => {
        let fileExt = file.name.split('.').reverse()[0];
        let filename = file.name.replace('.' + fileExt, '');

        renderableFiles.value.push({
            name: filename.length > 4 ? filename.slice(0, 3) : filename,
            type: fileExt
        });
    });
}, { deep: true });

</script>

<style scoped></style>