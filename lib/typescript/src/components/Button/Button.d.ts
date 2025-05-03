import React from 'react';
interface ButtonProps {
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    onClick: () => void;
    disabled?: boolean;
    loading?: boolean;
    children: string;
}
export declare const Button: React.FC<ButtonProps>;
export {};
//# sourceMappingURL=Button.d.ts.map