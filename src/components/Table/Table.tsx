import clsx from 'clsx';
import styles from './Table.module.css';

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  caption?: string;
  captionClassName?: string;
  captionProps?: Omit<
    React.HtmlHTMLAttributes<HTMLTableCaptionElement>,
    'className'
  >;
}

export function Table({
  className,
  children,
  caption,
  captionClassName,
  captionProps,
  ...props
}: TableProps) {
  return (
    <table className={clsx([styles.table, className])} {...props}>
      {caption && (
        <caption
          className={clsx([styles.tableCaption, captionClassName])}
          {...captionProps}
        >
          {caption}
        </caption>
      )}

      {children}
    </table>
  );
}

export default Table;
