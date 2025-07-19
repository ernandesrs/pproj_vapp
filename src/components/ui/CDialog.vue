<template>
    <Teleport to="body">
        <Transition enter-from-class="opacity-0" enter-active-class="duration-200" leave-to-class="opacity-0"
            leave-active-class="duration-100">
            <div ref="dialogBackdrop" @click="closeDialog" v-show="visible"
                class="bg-black/75 dark:bg-black/90 fixed left-0 top-0 w-full h-screen flex justify-center p-6" :class="{
                    top: 'items-start',
                    center: 'items-center',
                    bottom: 'items-end'
                }[props.location]" style="z-index: 990;">

                <Transition enter-from-class="opacity-25 scale-105" enter-active-class="duration-200"
                    leave-to-class="opacity-25 scale-105" leave-active-class="duration-100">
                    <div ref="dialogContent" v-show="visibleContent" class="w-full flex" :class="{
                        'sm': 'max-w-[375px]',
                        'normal': 'max-w-[575px]',
                        'lg': 'max-w-[875px]',
                        'full': 'max-w-full',
                        'screen': 'max-w-full h-full'
                    }[props.size]">
                        <CCard class="flex-1 text-neutral-600 dark:text-neutral-50">
                            <template #header>
                                <div class="flex-1 flex items-center justify-between">
                                    <div class="w-full">
                                        <div class="cursor-default flex items-center" v-if="props.title">
                                            <CIcon v-if="props.icon" :name="props.icon" prepend />
                                            <h5 class="text-lg font-semibold" v-text="props.title"></h5>
                                        </div>
                                        <slot name="header" />
                                    </div>

                                    <button v-if="!props.hideCloseButton" ref="closeDialogButton" @click="closeDialog"
                                        type="button"
                                        class="bg-rose-300/25 hover:bg-rose-300/50 dark:hover:bg-rose-500/25 duration-300 text-rose-400 dark:text-rose-500 size-8 cursor-pointer rounded-full">
                                        <CIcon name="x" class="pointer-events-none" />
                                    </button>
                                </div>
                            </template>

                            <div class="overflow-y-auto max-h-[66vh] custom-scrollbar">
                                <slot />
                            </div>

                            <template v-if="$slots.footer" #footer>
                                <div ref="footerEl">
                                    <slot name="footer" />
                                </div>
                            </template>

                        </CCard>
                    </div>
                </Transition>

            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">

import type { DialogProps } from '@/types/components/ui/dialog_type';
import { nextTick, ref, watch } from 'vue';
import CCard from './CCard.vue';
import CIcon from './CIcon.vue';

const emit = defineEmits(['update:modelValue']);

const props = withDefaults(defineProps<DialogProps>(), {
    size: 'normal',
    location: 'top'
});

const dialogBackdrop = ref<HTMLElement | null>(null);
const dialogContent = ref<HTMLElement | null>(null);
const closeDialogButton = ref<HTMLElement | null>(null);

const visible = ref<boolean>(false);
const visibleContent = ref<boolean>(false);

const showDialog = () => {
    visible.value = true;
    setTimeout(() => {
        visibleContent.value = true;
        emit('update:modelValue', true);
    }, 75);
};

const closeDialog = (event?: Event) => {
    if (event?.target && !checkClosability(event.target)) {
        return;
    }

    visibleContent.value = false;
    setTimeout(() => {
        visible.value = false;
        emit('update:modelValue', false);
    }, 100);
};

const checkClosability = (target: EventTarget) => {
    if (target === dialogBackdrop.value) {
        if (props.persistent) {
            dialogContent.value?.classList.add('animate-shake');
            setTimeout(() => {
                dialogContent.value?.classList.remove('animate-shake');
            }, 500);
            return false;
        } else {
            return true;
        }
    }

    return target === closeDialogButton.value;
};

watch(() => props.modelValue, async (newValue: boolean, oldValue: boolean | undefined) => {
    if (newValue) {
        await nextTick();
        showDialog();
    } else {
        closeDialog();
    }
}, { immediate: true });

</script>

<style scoped></style>