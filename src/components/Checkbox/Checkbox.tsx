import styles from './Checkbox.module.css';

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

function Checkbox({ ...props }: Props) {
  return <input type="checkbox" {...props} />;
}

export default Checkbox;
