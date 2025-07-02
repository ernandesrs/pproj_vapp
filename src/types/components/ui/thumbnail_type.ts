export interface ThumbnailProps {
    text: string,
    image?: string,
    size?: "sm" | "md" | "normal" | "lg" | "xl" | "custom",
    square?: boolean,
    circle?: boolean,
    loading?: boolean
};