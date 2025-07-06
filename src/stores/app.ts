import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore('app', () => {
    const loading = ref<boolean>(false);

    return {
        loading,
    };
});