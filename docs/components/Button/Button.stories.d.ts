import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ disabled, variant, children }: {
        disabled?: boolean | undefined;
        variant?: "primary" | "secondary" | "outline" | "ghost" | undefined;
        children?: import("react").ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        disabled: {
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Secondary: Story;
export declare const Outline: Story;
export declare const Ghost: Story;
export declare const Disabled: Story;
