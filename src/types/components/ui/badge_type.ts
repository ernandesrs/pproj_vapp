export type BadgeColor = "default" | "success" | "info" | "warning" | "danger";

export type BadgeVariant = "filled" | "outlined";

export interface BadgeProps {
    color?: BadgeColor,
    label: string,
    icon?: string,
    appendIcon?: string,
    variant?: BadgeVariant
};