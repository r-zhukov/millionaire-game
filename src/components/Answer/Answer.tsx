import React from 'react';
import clsx from 'clsx';
import styles from './Answer.module.scss';
import { TAnswerProps } from '../../types';

function Answer({
  answer,
  id,
  onAnswerClick,
  variant,
  disabled,
}: TAnswerProps) {
  return (
    <button
      disabled={disabled}
      onClick={() => onAnswerClick(id)}
      className={clsx(styles.answer, variant && styles[`answer__${variant}`])}
    >
      <div className={styles.answer__number}>{id}</div>
      <div className={styles.answer__text}>{answer}</div>
    </button>
  );
}

export default Answer;
