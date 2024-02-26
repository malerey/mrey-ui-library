import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<import("./Text").TextProps>;
    tags: string[];
    argTypes: {
        variant: {
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const headingLG: Story;
export declare const headingMD: Story;
export declare const headingSM: Story;
export declare const paragraphLG: Story;
export declare const paragraphMD: Story;
export declare const paragraphSM: Story;
export declare const caption: Story;
