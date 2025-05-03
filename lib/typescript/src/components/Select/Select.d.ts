/**
 * @license
 * Copyright 2025 Aaskplanets
 */
import React from 'react';
interface SelectProps {
    options: Array<{
        label: string;
        value: string;
    }>;
    onChange: (value: string) => void;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    loading?: boolean;
}
export declare const Select: React.FC<SelectProps>;
export {};
//# sourceMappingURL=Select.d.ts.map