<template>
    <Transition enter-from-class="opacity-0" enter-active-class="duration-200 ease-in-out" leave-to-class="opacity-0"
        leave-active-class="duration-300 ease-out">
        <div v-show="show" class="bg-neutral-200 dark:bg-neutral-900 absolute top-0 left-0 z-50 w-full h-1">
            <div class="relative h-full bg-violet-700 dark:bg-violet-800 animate-pulse"
                :style="'width:' + progress + '%'"></div>
        </div>
    </Transition>
</template>

<script setup lang="ts">

import { getRandomIntBetween } from '@/utils/functions';
import { ref, watch } from 'vue';

const props = withDefaults(defineProps<{
    loading: boolean
}>(), {
    loading: false
});

const intervalId = ref<number | null>(null);

const progress = ref<number>(0);

const show = ref<boolean>(false);

const start = (): void => {
    const ps = [0.25, 0.725, 0.725, 0.725, 0.525, 0.125, 0.0125, 0.125, 0.125, 0.25];

    progress.value = 0;
    intervalId.value = setInterval(() => {
        const p = ps[getRandomIntBetween(0, ps.length - 1)]

        if (progress.value < 90) {
            progress.value = Math.min(progress.value + p, 90);
        }
    }, 25);
};

watch(() => props.loading, (n) => {
    if (n) {
        setTimeout(() => {
            show.value = true;
            start();
        }, 250);
    } else if (progress.value !== 0) {
        progress.value = 100;
        setTimeout(() => {
            progress.value = 0;
            show.value = false;
            clearInterval(intervalId.value as number);
        }, 500);
    }
}, { immediate: true });

</script>

<style scoped></style>