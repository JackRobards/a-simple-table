import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

const Button = ({ icon, className, children, ...props }: Props) => {
  return (
    <button className={clsx([styles.button, className])} {...props}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
