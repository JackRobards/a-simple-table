import Button from 'src/components/Button/Button';
import Checkbox from 'src/components/Checkbox/Checkbox';
import { DataItem } from 'src/hooks/useData';
import DownloadIcon from '../DownloadIcon';
import styles from './DataTableControls.module.css';

interface Props {
  selectedItems: DataItem[];
  setSelectedItems: React.Dispatch<React.SetStateAction<DataItem[]>>;
  data: DataItem[];
}

export function DataTableControls({
  selectedItems,
  setSelectedItems,
  data,
}: Props) {
  const allSelectableItems = data.filter((item) => item.status === 'available');
  const areAllItemsSelected =
    allSelectableItems.length > 0 &&
    allSelectableItems.length === selectedItems.length;
  const areNoItemsSelected = selectedItems.length === 0;

  const toggleSelectAllCheckbox = () => {
    if (areAllItemsSelected) {
      setSelectedItems([]);
    } else {
      setSelectedItems(allSelectableItems);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Checkbox
        checked={
          areAllItemsSelected
            ? true
            : areNoItemsSelected
            ? false
            : 'indeterminate'
        }
        onClick={toggleSelectAllCheckbox}
        onKeyDown={(e) => {
          if (e.key === 'Enter') toggleSelectAllCheckbox();
        }}
        aria-label={areAllItemsSelected ? 'Unselect all' : 'Select all'}
        className={styles.selectAllCheckbox}
      />
      <p className={styles.selectedCountText}>
        {areNoItemsSelected
          ? 'None Selected'
          : `Selected ${selectedItems.length}`}
      </p>
      <div className={styles.buttonContainer}>
        <Button
          icon={<DownloadIcon />}
          disabled={areNoItemsSelected}
          onClick={() => {
            window.alert(
              `Huzzah! You have downloaded these files:\n ${selectedItems
                .map((item) => `-For device ${item.device} from ${item.path}\n`)
                .join('')}`
            );
          }}
        >
          Download Selected
        </Button>
      </div>
    </div>
  );
}

export default DataTableControls;
