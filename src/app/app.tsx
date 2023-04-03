import { useState } from 'react';
import Table from 'src/components/Table';
import { DataItem, useData } from 'src/hooks/useData';
import DataTableCell from './components/DataTableCell/DataTableCell';
import DataTableControls from './components/DataTableControls/DataTableControls';
import styles from './app.module.css';

interface Props {
  // To simplify testing, `skipLoading` can be used. In a real environment, we'd mock or provide stubbed data
  skipLoading?: boolean;
}

export function App({ skipLoading }: Props) {
  const { data, isLoading } = useData(!!skipLoading);

  const [selectedItems, setSelectedItems] = useState<DataItem[]>([]);

  return (
    <main>
      <h1>The Red Falcon's Table</h1>
      <DataTableControls
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        data={data}
      />
      <Table>
        <Table.Header>
          <Table.Row>
            {/* Empty cell, since this header has no content */}
            <td />
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Device</Table.HeaderCell>
            <Table.HeaderCell>Path</Table.HeaderCell>
            <Table.HeaderCell className={styles.statusColPadding}>
              Status
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {Array.from({ length: 4 }).map((_, index) => (
            <Table.Row key={index} aria-hidden={!isLoading}>
              <Table.LoadingCell hidden={!isLoading} />
              <Table.LoadingCell hidden={!isLoading} />
              <Table.LoadingCell hidden={!isLoading} />
              <Table.LoadingCell hidden={!isLoading} />
              <Table.LoadingCell hidden={!isLoading} />
            </Table.Row>
          ))}

          {data.map((item) => (
            <DataTableCell
              key={item.name}
              item={item}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
            />
          ))}
        </Table.Body>
      </Table>
    </main>
  );
}

export default App;
