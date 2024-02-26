import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ disabled, required, labelText, placeholder, icon }: import("./TextInput").TextInputProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Disabled: Story;
