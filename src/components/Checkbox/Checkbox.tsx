import { forwardRef, useEffect, useRef } from 'react';
import { mergeRefs } from 'react-merge-refs';
import clsx from 'clsx';
import styles from './Checkbox.module.css';

interface Props
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'type' | 'checked'
  > {
  // An `indeterminate` checkbox can be used to indicate partial selection, such as with nested checkboxes
  checked?: boolean | 'indeterminate';
}

const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ className, checked, ...props }, ref) => {
    const localRef = useRef<HTMLInputElement>();

    useEffect(() => {
      if (!localRef.current) return;

      if (checked === 'indeterminate') {
        localRef.current.indeterminate = true;
        localRef.current.checked = false;
      } else if (checked === true) {
        localRef.current.indeterminate = false;
        localRef.current.checked = true;
      } else {
        localRef.current.indeterminate = false;
        localRef.current.checked = false;
      }
    }, [checked]);

    return (
      <input
        type="checkbox"
        className={clsx([styles.checkbox, className])}
        ref={mergeRefs([localRef, ref])}
        {...props}
      />
    );
  }
);

export default Checkbox;
