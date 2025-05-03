/**
 * @license
 * Copyright 2025 Aaskplanets
 */
import React from 'react';
interface TextFieldProps {
    label?: string;
    value?: string;
    type?: string;
    onChange?: (text: string) => void;
    placeholder?: string;
    disabled?: boolean;
    error?: string;
}
export declare const TextField: React.FC<TextFieldProps>;
export {};
//# sourceMappingURL=TextField.d.ts.map