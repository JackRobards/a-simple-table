import styles from './Table.module.css';
import TableRow, { TableRowProps } from './TableRow/TableRow';

interface Props<TData = TableRowProps['row']> {
  data: TData[];
  headers: (keyof TData)[];

  caption?: string;
  isSelectable?: boolean;
}

export function Table<TData = TableRowProps['row']>({
  data,
  headers,
  caption,
  isSelectable,
}: Props<TData>) {
  return (
    <table>
      {caption && <caption>{caption}</caption>}
      <thead>
        <tr>
          {isSelectable && <th aria-label="Select Row" />}
          {headers.map((header) => (
            <th key={header} scope="col">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {data.map((row, index) => {
            return <TableRow key={index} row={row} />;
          })}
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
