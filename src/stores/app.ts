import { defineStore } from "pinia";
import { ref, watch } from "vue";

const getThemeFromStorage = (): string => {
    return localStorage.getItem('theme') ?? 'light';
};

const setAndStoreThemeOnStorage = (theme: string): void => {
    const htmlElement = document.querySelector('html');

    if (htmlElement) {
        htmlElement.setAttribute('class', theme);
    }

    localStorage.setItem('theme', theme);
};

export const useAppStore = defineStore('app', () => {
    const loading = ref<boolean>(false);
    const themeName = ref<string>(getThemeFromStorage());

    setAndStoreThemeOnStorage(getThemeFromStorage());

    watch(() => themeName.value, (newThemeName) => {
        setAndStoreThemeOnStorage(newThemeName);
    }, { immediate: true });

    return {
        loading,
        themeName,
    };
});