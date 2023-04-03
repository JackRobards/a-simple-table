import React from 'react';
import clsx from 'clsx';
import styles from './TableHeader.module.css';

export interface TableHeaderProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

export function TableHeader({
  children,
  className,
  ...props
}: TableHeaderProps) {
  return (
    <thead className={clsx([styles.tableHeader, className])} {...props}>
      {children}
    </thead>
  );
}

export default TableHeader;
