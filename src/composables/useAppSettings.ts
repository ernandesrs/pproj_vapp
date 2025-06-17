export function useAppSettings() {
    const setAppTitle = (title: string): void => {
        const baseTitle = document.title.split('|')[0];

        document.title = baseTitle + ' | ' + title;
    };

    return {
        setAppTitle
    };
};