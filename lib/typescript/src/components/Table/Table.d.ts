import React from 'react';
interface TableProps {
    headings: string[];
    rows: string[][];
    onRowPress?: (row: string[], rowIndex: number) => void;
    disabledRows?: number[];
}
export declare const Table: React.FC<TableProps>;
export {};
//# sourceMappingURL=Table.d.ts.map