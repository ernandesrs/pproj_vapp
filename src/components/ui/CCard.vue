<template>
    <div
        class="bg-white border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 rounded-lg transition-all">
        <div v-if="withHeader"
            class="bg-white dark:bg-neutral-900 flex items-center gap-2.5 py-5 px-6 border-b border-neutral-200 dark:border-neutral-800 relative z-10 rounded-tl-lg rounded-tr-lg"
            :class="{
                'rounded-bl-lg rounded-br-lg': show && !$slots.footer
            }">

            <div class="flex-1 flex items-center relative">

                <!-- skeleton -->
                <Transition enter-from-class="opacity-0" enter-active-class="duration-100 ease-in-out"
                    leave-to-class="opacity-0" leave-active-class="duration-200 ease-out">
                    <div v-if="isLoading"
                        class="w-full h-full absolute z-50 top-0 left-0 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                        <div
                            class="w-full h-full bg-gradient-to-r from-neutral-200 dark:from-neutral-900 via-neutral-100 dark:via-neutral-800 to-neutral-100 dark:to-neutral-800 animate-pulse rounded-lg">
                        </div>
                    </div>
                </Transition>

                <Component v-if="props.title" :is="props.titleTag" v-html="props.title"
                    class="text-base font-semibold" />
                <div class="flex-1 flex items-center">
                    <template v-if="$slots.header">
                        <slot name="header" />
                    </template>

                    <button v-if="props.minimizable" @click="show = !show"
                        class="cursor-pointer size-7 rounded ml-auto text-xl">
                        <CIcon :name="show ? 'plus-lg' : 'dash-lg'" />
                    </button>
                </div>
            </div>

        </div>

        <Transition enter-from-class="opacity-0 -translate-y-4/12" enter-active-class="duration-200"
            leave-to-class="opacity-0 -translate-y-4/12" leave-active-class="duration-100">
            <div v-show="!show" class="p-6 relative z-0">
                <div class="relative">

                    <!-- skeleton -->
                    <Transition enter-from-class="opacity-0" enter-active-class="duration-100 ease-in-out"
                        leave-to-class="opacity-0" leave-active-class="duration-200 ease-out">
                        <div v-if="isLoading"
                            class="w-full h-full absolute z-50 top-0 left-0 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                            <div
                                class="w-full h-full bg-gradient-to-r from-neutral-200 dark:from-neutral-900 via-neutral-100 dark:via-neutral-800 to-neutral-100 dark:to-neutral-800 animate-pulse rounded-lg">
                            </div>
                        </div>
                    </Transition>

                    <slot />
                </div>
            </div>
        </Transition>

        <div v-if="withFooter"
            class="flex items-center gap-2.5 py-5 px-6 border-t border-neutral-200 dark:border-neutral-800">

            <div class="flex-1">
                <slot name="footer" />
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">

import type { CardProps } from '@/types/components/ui/card_type';
import { computed, ref, useSlots, watch } from 'vue';
import CIcon from './CIcon.vue';
import { useApp } from '@/composables/useApp';

const emit = defineEmits(['minimize']);

const slots = useSlots();

const props = withDefaults(defineProps<CardProps>(), {
    titleTag: 'h5'
});

const { inLoadingMode } = useApp();

const isLoading = ref<boolean>(false);

const show = ref<boolean>(props.minimized ? true : false);

const withHeader = computed((): boolean => {
    return props.title || props.minimizable || slots.header ? true : false;
});

const withFooter = computed((): boolean => {
    return slots.footer ? true : false;
});

watch(() => show.value, (n) => {
    emit('minimize', n);
});

watch(() => props.loading, (n) => {
    isLoading.value = n;
}, { immediate: true });

watch(() => inLoadingMode.value, (n) => {
    if (props.globalLoading) {
        isLoading.value = n;
    }
}, { immediate: true });

</script>

<style scoped></style>