import React from 'react';
import clsx from 'clsx';
import styles from './TableBody.module.css';

export interface TableBodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

export function TableBody({ children, className, ...props }: TableBodyProps) {
  return (
    <tbody className={clsx([styles.tableBody, className])} {...props}>
      {children}
    </tbody>
  );
}

export default TableBody;
