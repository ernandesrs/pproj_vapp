<template>
    <span @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" class="inline-flex gap-y-5 relative" :class="{
        'left': 'justify-start',
        'center': 'justify-center',
        'right': 'justify-end',
        'top-left': 'justify-start',
        'top-center': 'justify-center',
        'top-right': 'justify-end',
    }[props.location]">
        <span class="inline-block relative">
            <slot />
        </span>
        <Transition enter-from-class="opacity-0" enter-active-class="duration-200 ease-in-out"
            leave-to-class="opacity-0" leave-active-class="duration-200 ease-out">
            <span v-if="show"
                class="inline-block absolute z-50 bg-gray-400 dark:bg-gray-600 shadow text-white dark:text-zinc-100 px-2.5 py-1.5 rounded-lg"
                :class="(props.width ?? 'w-full') + ' ' + ({
                    'left': 'top-full mt-0.5',
                    'center': 'top-full mt-0.5',
                    'right': 'top-full mt-0.5',
                    'top-left': 'bottom-full mb-0.5',
                    'top-center': 'bottom-full mb-0.5',
                    'top-right': 'bottom-full mb-0.5'
                }[props.location])">
                <template v-if="$slots.tooltip">
                    <slot name="tooltip" />
                </template>
                <span v-else-if="props.text" v-text="props.text"></span>
            </span>
        </Transition>
    </span>
</template>

<script setup lang="ts">

import type { TooltipProps } from '@/types/components/ui/tooltip_type';
import { ref } from 'vue';

const props = withDefaults(defineProps<TooltipProps>(), {
    'location': 'left'
});

const show = ref<boolean>(false);

const onMouseEnter = () => {
    show.value = true;
};

const onMouseLeave = () => {
    show.value = false;
};

</script>

<style scoped></style>