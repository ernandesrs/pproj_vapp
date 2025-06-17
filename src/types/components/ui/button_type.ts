export type ButtonColor = "primary" | "secondary" | "info" | "warning" | "danger" | "light" | "dark";

export interface ButtonProps {
    label?: string,
    color?: ButtonColor,
    icon?: string,
    appendIcon?: string,
    loading?: boolean,
};