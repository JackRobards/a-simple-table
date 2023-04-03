import clsx from 'clsx';
import styles from './TableHeaderCell.module.css';

export interface TableHeaderCellProps
  extends React.HTMLAttributes<HTMLTableCellElement> {
  scope?: 'row' | 'col' | 'rowgroup' | 'colgroup' | false;
}

function TableHeaderCell({
  className,
  children,
  scope = 'col',
  ...props
}: TableHeaderCellProps) {
  return (
    <th
      scope={scope || undefined}
      className={clsx([styles.tableHeaderCell, className])}
      {...props}
    >
      {children}
    </th>
  );
}

export default TableHeaderCell;
