import React from 'react';
import clsx from 'clsx';
import styles from './TableCell.module.css';

export interface TableCellProps
  extends React.HTMLAttributes<HTMLTableCellElement> {}

export function TableCell({ children, className, ...props }: TableCellProps) {
  return (
    <td className={clsx([styles.tableCell, className])} {...props}>
      {children}
    </td>
  );
}

export default TableCell;
