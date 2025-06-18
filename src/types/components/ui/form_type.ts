export type InputType = "text" | "email" | "password" | "number" | "date";

interface BaseFormFieldProps {
    label: string,
    type?: InputType,
    id?: string,
    error?: string
};

export interface InputProps extends BaseFormFieldProps {
    modelValue: string | number,
};

export interface SelectOption {
    label: string,
    value: string | number
};

export interface SelectProps extends BaseFormFieldProps {
    modelValue: string | number | object,
    options: SelectOption[]
};