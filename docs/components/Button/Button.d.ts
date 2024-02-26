export type ButtonProps = {
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    children?: React.ReactNode;
};
export declare const Button: ({ disabled, variant, children }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
