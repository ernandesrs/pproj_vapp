export interface DialogProps {
    modelValue: boolean,
    persistent?: boolean,
    icon?: string,
    title?: string,
    hideCloseButton?: boolean,
    size?: "sm" | "normal" | "lg" | "full"
};

export interface onConfirm {
    callback: () => void | Promise<void | any>
    buttonLabel?: string,
};

export interface onCancel {
    callback?: () => void | Promise<void | any>
    buttonLabel?: string,
};

export interface DialogConfirmationProps {
    modelValue: boolean,
    title?: string,
    text?: string,
    size?: "sm" | "normal" | "lg" | "full",
    onConfirm: onConfirm,
    onCancel?: onCancel,
};