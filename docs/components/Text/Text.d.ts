import React, { ReactNode } from 'react';
export type TextProps = {
    variant: 'headingLG' | 'headingMD' | 'headingSM' | 'paragraphLG' | 'paragraphMD' | 'paragraphSM' | 'caption';
    children: ReactNode;
};
declare const Text: React.FC<TextProps>;
export default Text;
