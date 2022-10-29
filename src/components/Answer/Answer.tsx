import React from 'react';
import clsx from 'clsx';
import styles from './Answer.module.scss';

function Answer({
  answer,
  id,
  onAnswerClick,
  selected,
}: {
  answer: string;
  id: string;
  onAnswerClick: (id: string) => void;
  selected: boolean;
}) {
  return (
    <div
      onClick={() => onAnswerClick(id)}
      className={clsx(styles.answer, selected && styles.answer__selected)}
    >
      <div className={styles.answer__number}>{id}</div>
      <div className={styles.answer__text}>{answer}</div>
    </div>
  );
}

export default Answer;
