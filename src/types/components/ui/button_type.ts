export type ButtonColor = "primary" | "secondary" | "info" | "warning" | "danger" | "light" | "dark";
export type ButtonVariant = "filled" | "text";

export interface ButtonProps {
    label?: string,
    color?: ButtonColor,
    variant?: ButtonVariant,
    icon?: string,
    appendIcon?: string,
    loading?: boolean,
};