import React from 'react';
import clsx from 'clsx';
import styles from './TableRow.module.css';

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {}

export function TableRow({ children, className, ...props }: TableRowProps) {
  return (
    <tr className={clsx([styles.tableRow, className])} {...props}>
      {children}
    </tr>
  );
}

export default TableRow;
