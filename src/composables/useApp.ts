import { computed, ref, watch } from "vue";
import { useToast } from "./useToast";
import { useAppStore } from "@/stores/app";

const MOBILE_WIDTH = 1024;

export function useApp() {
    const appStore = useAppStore();

    const windowWidth = ref<number>(window.innerWidth);
    const inMobile = computed(() => windowWidth.value < MOBILE_WIDTH);
    const showSidebar = ref<boolean>(!inMobile.value);
    const darkMode = ref<boolean>(appStore.themeName === 'dark');
    const inLoadingMode = computed(() => appStore.loading);

    const { addToast } = useToast();

    window.addEventListener('resize', () => {
        windowWidth.value = window.innerWidth;
    });

    const setAppTitle = (title: string): void => {
        const baseTitle = document.title.split('|')[0];

        document.title = baseTitle + ' | ' + title;
    };

    const addInLoadingMode = (): void => {
        appStore.loading = true;
    };

    const removeLoadingMode = (): void => {
        appStore.loading = false;
    };

    const isDarkTheme = (): boolean => {
        return appStore.themeName === 'dark';
    };

    const darkModeToggle = (): void => {
        appStore.themeName = appStore.themeName === 'dark' ? 'light' : 'dark';
    };

    watch(() => darkMode.value, (n) => {
        darkModeToggle();
    });

    watch(() => inMobile.value, (n) => {
        showSidebar.value = !n;
    });

    return {
        windowWidth,
        inMobile,
        showSidebar,
        darkMode,
        inLoadingMode,

        setAppTitle,
        addInLoadingMode,
        removeLoadingMode,
        addToast,

        isDarkTheme
    };
};