export type ButtonProps = {
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size: 'default' | 'small';
    children?: React.ReactNode;
};
export declare const Button: ({ disabled, variant, size, children }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
