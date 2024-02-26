import { ReactNode } from 'react';
export type CardProps = {
    hoverEffect?: boolean;
    children: ReactNode;
};
export declare const Card: React.FC<CardProps>;
