import React from 'react';
import clsx from 'clsx';
import Checkbox from 'src/components/Checkbox/Checkbox';
import Table from 'src/components/Table';
import { DataItem } from 'src/hooks/useData';
import styles from './DataTableCell.module.css';

interface Props {
  item: DataItem;
  selectedItems: DataItem[];
  setSelectedItems: React.Dispatch<React.SetStateAction<DataItem[]>>;
}

export function DataTableCell({
  item,
  selectedItems,
  setSelectedItems,
}: Props) {
  const isSelected = selectedItems.some(
    (selectedItem) => selectedItem.name === item.name
  );

  const toggleSelectedItem = (item: DataItem) => {
    if (item.status === 'scheduled') return;

    setSelectedItems((selected) => {
      const existingItemIndex = selected.findIndex(
        (selectedItem) => selectedItem.name === item.name
      );

      if (existingItemIndex === -1) {
        return [...selected, item];
      }

      const newlySelected = [...selected];
      newlySelected.splice(existingItemIndex, 1);

      return newlySelected;
    });
  };

  return (
    <Table.Row
      key={item.name}
      className={clsx(
        item.status === 'available' && styles.interactiveRow,
        isSelected && styles.selectedRow
      )}
      onClick={() => {
        toggleSelectedItem(item);
      }}
    >
      <Table.Cell>
        <Checkbox
          checked={isSelected}
          disabled={item.status === 'scheduled'}
          aria-label={`Select ${item.name}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              toggleSelectedItem(item);
            }
          }}
        />
      </Table.Cell>
      <Table.Cell>{item.name}</Table.Cell>
      <Table.Cell>{item.device}</Table.Cell>
      <Table.Cell>{item.path}</Table.Cell>
      <Table.Cell
        className={clsx(
          styles.statusCell,
          item.status === 'available' && styles.statusCellAvailable
        )}
      >
        {item.status}
      </Table.Cell>
    </Table.Row>
  );
}

export default DataTableCell;
