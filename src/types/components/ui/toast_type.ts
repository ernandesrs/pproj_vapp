export type ToastType = "default" | "success" | "info" | "warning" | "danger" | "error";

export type ToastLocation = "top-center" | "bottom-center";

export interface ToastOptions {
    message: string | null,
    caption?: string,
    type: ToastType,
    icon: string,
    location: ToastLocation,
    duration: number,
    permanent?: boolean
};
