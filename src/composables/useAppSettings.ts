const currentTheme: string = localStorage.getItem('theme') ?? 'light';
const htmlElement = document.querySelector('html');
if (htmlElement) {
    htmlElement.setAttribute('class', currentTheme);
}

export function useAppSettings() {
    const setAppTitle = (title: string): void => {
        const baseTitle = document.title.split('|')[0];

        document.title = baseTitle + ' | ' + title;
    };

    const isDarkTheme = (): boolean => {
        return currentTheme === 'dark';
    };

    const darkModeToggle = (): void => {
        const currentTheme: string = localStorage.getItem('theme') ?? 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        if (!htmlElement) return;

        localStorage.setItem('theme', newTheme);
        htmlElement.setAttribute('class', newTheme);
    };

    return {
        setAppTitle,
        isDarkTheme,
        darkModeToggle
    };
};