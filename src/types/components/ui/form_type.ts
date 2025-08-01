import type { AnySchema, Schema } from "yup";

export type InputType = "text" | "email" | "password" | "number" | "date";

interface BaseFormFieldProps {
    label: string,
    id: string,
    error?: string,
    validationRule?: Schema<any>
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

export interface UploadProps extends BaseFormFieldProps {
    modelValue: Array<File>,
    limit?: number,
    allowedMimeTypes?: Array<string>
};

export interface ToggleProps extends BaseFormFieldProps {
    modelValue: boolean,
    iconOnChecked?: string,
    iconOnUnchecked?: string,
    rightLabel?: boolean
};

export interface FormProps {
    data: any,
    validationSchema?: AnySchema,
    externalErrors?: Record<string, string>,
    submitText?: string,

    onSubmit: (validated: any) => Promise<void | unknown> | void
};