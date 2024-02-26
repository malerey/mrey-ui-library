import { ReactNode } from 'react';
export interface TextInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    placeholder?: string;
    value?: number | string;
    required?: boolean;
    labelText?: string;
    disabled?: boolean;
    icon?: ReactNode;
}
export declare const TextInput: ({ disabled, required, labelText, placeholder, icon }: TextInputProps) => import("react/jsx-runtime").JSX.Element;
