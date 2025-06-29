import type { ToastLocation, ToastType } from "@/types/components/ui/toast_type";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export interface ToastData {
    message: string,
    caption?: string,
    type?: ToastType,
    icon?: string,
    location?: ToastLocation,
    duration?: number,
    permanent?: boolean
};

export const useToastStore = defineStore('toast', () => {
    // vars
    const toast = ref<ToastData | null>(null);

    // setters
    const add = (t: ToastData): void => {
        toast.value = t;
    };

    const clear = (): void => {
        toast.value = null;
    };

    // getters
    const get = computed((): ToastData | null => {
        return toast.value;
    });

    return {
        toast,

        add,
        clear,

        get
    };
});