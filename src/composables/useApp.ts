import { computed, ref, watch } from "vue";
import { useToast } from "./useToast";

const MOBILE_WIDTH = 1024;

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

export function useApp() {
    const windowWidth = ref<number>(window.innerWidth);
    const inMobile = computed(() => windowWidth.value < MOBILE_WIDTH);
    const showSidebar = ref<boolean>(!inMobile.value);
    const darkMode = ref<boolean>(getThemeFromStorage() === 'dark');

    const { addToast } = useToast();

    window.addEventListener('resize', () => {
        windowWidth.value = window.innerWidth;
    });

    setAndStoreThemeOnStorage(getThemeFromStorage());

    const setAppTitle = (title: string): void => {
        const baseTitle = document.title.split('|')[0];

        document.title = baseTitle + ' | ' + title;
    };

    const isDarkTheme = (): boolean => {
        return getThemeFromStorage() === 'dark';
    };

    const darkModeToggle = (): void => {
        const newTheme = getThemeFromStorage() === 'dark' ? 'light' : 'dark';
        setAndStoreThemeOnStorage(newTheme);
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

        setAppTitle,
        addToast,

        isDarkTheme
    };
};