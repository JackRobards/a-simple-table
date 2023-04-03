import { Table as BaseTable } from './Table';
import TableBody from './TableBody/TableBody';
import TableCell from './TableCell/TableCell';
import TableHeader from './TableHeader/TableHeader';
import TableHeaderCell from './TableHeaderCell/TableHeaderCell';
import TableLoadingCell from './TableLoadingCell/TableLoadingCell';
import TableRow from './TableRow/TableRow';

const Table = Object.assign(BaseTable, {
  Body: TableBody,
  Cell: TableCell,
  Header: TableHeader,
  HeaderCell: TableHeaderCell,
  LoadingCell: TableLoadingCell,
  Row: TableRow,
});

export default Table;
