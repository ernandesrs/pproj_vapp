export type InputType = "text" | "email" | "password" | "number" | "date";

export interface InputProps {
    modelValue: string | number,
    label: string,
    type?: InputType,
    id?: string,
    error?: string
}