import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useAppStore = defineStore('app', () => {
    const loading = ref<boolean>(false);

    return {
        loading,
    };
});