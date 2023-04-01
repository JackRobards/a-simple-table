import Table from 'src/components/Table/Table';
import styles from './app.module.css';
import data from './data.json';

interface DataType {
  name: string;
  device: string;
  path: string;
  status: 'scheduled' | 'available';
}

export function App() {
  return (
    <div className={styles.tableCard}>
      <Table<DataType> data={[]} headers={[]} />
    </div>
  );
}

export default App;
