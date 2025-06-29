import { useToastStore, type ToastData } from "@/stores/toast";

export function useToast() {
    const toastStore = useToastStore();

    const addToast = (toast: ToastData): void => {
        toastStore.add(toast);
    };

    return {
        addToast
    };
};