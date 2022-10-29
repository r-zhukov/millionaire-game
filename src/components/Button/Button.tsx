import React from 'react';
import styles from './Button.module.scss';
import { TButtonProps } from '../../types';

function Button({ children, type }: TButtonProps) {
  return (
    <button
      className={styles.button}
      data-testid="base-button"
      type={type || 'button'}
    >
      {children}
    </button>
  );
}

export default Button;
