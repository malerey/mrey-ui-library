import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ disabled, variant, children }: import("./Button").ButtonProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        disabled: {
            control: string;
        };
        variant: {
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
