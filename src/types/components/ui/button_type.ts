export type ButtonColor = "primary" | "secondary" | "info" | "warning" | "danger" | "light" | "dark";
export type ButtonVariant = "filled" | "text";
export type ButtonType = "button" | "submit";

export interface ButtonProps {
    type?: ButtonType,
    label?: string,
    color?: ButtonColor,
    variant?: ButtonVariant,
    icon?: string,
    appendIcon?: string,
    loading?: boolean,
};