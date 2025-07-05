<template>
    <div class="fixed z-40 w-full flex justify-center" :class="{
        'top-4': props.location == 'top-center',
        'bottom-4': props.location == 'bottom-center',
    }">

        <Transition :enter-from-class="'opacity-0 ' + {
            'top-center': '-translate-y-6/12',
            'bottom-center': 'translate-y-6/12',
        }[props.location]" enter-active-class="duration-500 ease-in-out" :leave-to-class="'opacity-0 ' + {
            'top-center': '-translate-y-6/12',
            'bottom-center': 'translate-y-6/12',
        }[props.location]" leave-active-class="duration-200 ease-out">
            <div v-show="show"
                class="absolute mx-2.5 flex items-start gap-x-2.5 py-2.5 px-5 rounded-lg shadow-md text-base text-neutral-50 cursor-default"
                :class="colors[props.type] + ' ' + {
                    'top-center': 'top-0',
                    'bottom-center': 'bottom-0'
                }[props.location]">

                <div class="text-xl flex items-center justify-center">
                    <CIcon :name="props.icon" />
                </div>

                <div>
                    <div v-html="props.message"></div>
                    <div v-if="props.caption" class="text-xs" v-html="props.caption"></div>
                </div>

                <button @click="closeToast"
                    class="text-xl size-7 flex items-center justify-center rounded-full hover:bg-rose-500/20 dark:hover:bg-rose-600/hover:bg-rose-500/20 duration-200 cursor-pointer"
                    type="button">
                    <CIcon name="x" />
                </button>
            </div>
        </Transition>

    </div>
</template>

<script setup lang="ts">

const icons = {
    'default': 'info-circle',
    'success': 'check-circle',
    'info': 'info-circle',
    'warning': 'exclamation-triangle',
    'danger': 'exclamation-octagon',
    'error': 'x-octagon',
};

const colors = {
    'default': 'bg-neutral-600 dark:bg-neutral-700',
    'success': 'bg-emerald-500 dark:bg-emerald-700',
    'info': 'bg-sky-600 dark:bg-sky-600',
    'warning': 'bg-orange-400 dark:bg-orange-500',
    'danger': 'bg-red-500 dark:bg-red-600',
    'error': 'bg-red-500 dark:bg-red-600',
};

import { nextTick, ref, watch } from 'vue';
import type { ToastOptions } from '@/types/components/ui/toast_type';
import { useToastStore } from '@/stores/toast';
import CIcon from '../CIcon.vue';

const toastStore = useToastStore();

const props = ref<ToastOptions>({
    message: null,
    type: 'default',
    icon: icons['default'],
    location: 'top-center',
    duration: 5000
});

const durationTimeoutHandlerId = ref<number | null>(null);

const show = ref<boolean>(false);

const showToast = (): void => {
    show.value = true;

    if (!props.value.permanent) {
        durationTimeoutHandlerId.value = setTimeout(() => {
            closeToast();
        }, props.value.duration + 500);
    }
};

const closeToast = (): void => {
    show.value = false;

    if (durationTimeoutHandlerId.value) {
        clearTimeout(durationTimeoutHandlerId.value);
        durationTimeoutHandlerId.value = null;
    }

    setTimeout(() => {
        props.value.message = null;
    }, 200);
};

watch(() => toastStore.get, (t) => {
    if (!t) return;

    const add = () => {
        props.value = {
            message: t.message,
            caption: t.caption,
            type: t.type ?? 'default',
            icon: t.icon ?? icons[t.type ?? 'default'],
            location: t.location ?? 'top-center',
            duration: t.duration ?? 5000,
            permanent: t.permanent
        };
    };

    if (show.value) {
        closeToast();
        setTimeout(() => {
            add();
        }, 200);
        return;
    }

    add();
}, { immediate: true, deep: true });

watch(() => props.value, (p) => {
    nextTick(() => {
        if (p.message) {
            showToast();
        }
    });
}, { immediate: true, deep: true });

</script>

<style scoped></style>