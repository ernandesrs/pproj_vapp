export type InputType = "text" | "email" | "password" | "number" | "date";

interface BaseFormFieldProps {
    label: string,
    id: string,
    error?: string
};

export interface InputProps extends BaseFormFieldProps {
    modelValue: string | number,
    type?: InputType,
};

export interface SelectOption {
    label: string,
    value: string | number
};

export interface SelectProps extends BaseFormFieldProps {
    modelValue: string | number | object,
    options: SelectOption[]
};

export interface UplaodProps extends BaseFormFieldProps {
    modelValue: Array<File>,
    multiple?: boolean
};

export interface FormProps {
    data: any,
    validationSchema?: any,
    submitText?: string
}