import styles from './TableLoadingCell.module.css';

interface Props {
  hidden: boolean;
}

/**
 * Accessible loading Skeletons based on this advice:
 * @link https://adrianroselli.com/2020/11/more-accessible-skeletons.html
 */

export function TableLoadingRow({ hidden }: Props) {
  return (
    <td
      aria-hidden={hidden}
      aria-busy={!hidden}
      className={styles.skeletonWrapper}
    >
      <div
        aria-hidden={hidden}
        aria-busy={!hidden}
        className={styles.skeleton}
      />
      <span className={styles.visuallyHidden}>Loading</span>
    </td>
  );
}

export default TableLoadingRow;
