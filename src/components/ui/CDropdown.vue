<template>
    <div class="flex flex-col justify-start relative" style="z-index: 999;" :class="{
        'left': 'items-start',
        'center': 'items-center',
        'right': 'items-end',
        'top-left': 'items-start',
        'top-center': 'items-center',
        'top-right': 'items-end',
    }[props.location]">
        <div ref="dropdownActivator" @click="dropdownToggle" role="button" class="cursor-pointer relative"
            style="z-index: 999;">
            <template v-if="$slots.activator">
                <slot name="activator" />
            </template>
            <div v-else v-text="props.activatorLabel"
                class="bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800 duration-300 text-neutral-600 dark:text-neutral-50 px-3 py-2 rounded-md select-none" />
        </div>
        <Transition
            :enter-from-class="['left', 'center', 'right'].includes(props.location) ? 'opacity-0 -translate-y-1/12' : 'opacity-0 translate-y-1/12'"
            enter-active-class="duration-300 ease-in-out"
            :leave-to-class="['left', 'center', 'right'].includes(props.location) ? 'opacity-0 -translate-y-1/12' : 'opacity-0 translate-y-1/12'"
            leave-active-class="duration-200 ease-out">
            <div ref="dropdownContent" v-show="show" class="absolute" :class="(props.width ?? 'w-full') + ' ' + ({
                'left': 'top-full mt-0.5',
                'center': 'top-full mt-0.5',
                'right': 'top-full mt-0.5',
                'top-left': 'bottom-full mb-0.5',
                'top-center': 'bottom-full mb-0.5',
                'top-right': 'bottom-full mb-0.5',
            }[props.location])" style="z-index: 998;">
                <slot />
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">

import type { DropdownProps } from '@/types/components/ui/dropdown_type';
import { ref } from 'vue';

const props = withDefaults(defineProps<DropdownProps>(), {
    activatorLabel: 'Dropdown',
    location: 'left'
});

const dropdownActivator = ref<HTMLElement | null>(null);
const dropdownContent = ref<HTMLElement | null>(null);

const show = ref<boolean>(false);

const clickoutMonitor = (event: Event) => {
    const target = event.target as HTMLElement;

    if (dropdownContent.value && !dropdownContent.value.contains(target)) {
        show.value = false;
        document.removeEventListener('click', clickoutMonitor);
    }
};

const dropdownToggle = () => {
    if (show.value) {
        show.value = false;
        document.removeEventListener('click', clickoutMonitor);
    } else {
        show.value = true;
        setTimeout(() => {
            document.addEventListener('click', clickoutMonitor);
        }, 0);
    }
};

</script>

<style scoped></style>