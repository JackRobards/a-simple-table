import styles from './TableRow.module.css';

export interface TableRowProps {
  row: Record<string, string | number>;
}

export function TableRow({ row }: TableRowProps) {
  return (
    <td>
      {Object.values(row).map((value, index) => (
        <span key={index}>{value}</span>
      ))}
    </td>
  );
}

export default TableRow;
