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

export function useAppSettings() {
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

    return {
        setAppTitle,
        isDarkTheme,
        darkModeToggle
    };
};