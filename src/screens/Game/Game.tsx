import React, { useState } from 'react';
import Answer from '../../components/Answer/Answer';
import styles from './Game.module.scss';
import IssuesCost from '../../components/IssuesCost/IssuesCost';
import { TGameProps } from '../../types';

function Game({ question, costs, currentQuestionIndex }: TGameProps) {
  const [selectedAnswerId, setSelectedAnswerId] = useState<null | string>(null);
  const onAnswerClick = (id: string) => {
    setSelectedAnswerId(id);
  };

  return (
    <div className={styles.game}>
      <div className={styles.question}>
        <h1 className={styles.question_title}>{question.question}</h1>
        <div className={styles.question__answers}>
          {question.answers.map((answer) => (
            <Answer
              selected={answer.id === selectedAnswerId}
              onAnswerClick={onAnswerClick}
              id={answer.id}
              key={answer.id}
              answer={answer.answer}
            />
          ))}
        </div>
      </div>
      <div className={styles.rightBar}>
        <IssuesCost costs={costs} currentCost={currentQuestionIndex} />
      </div>
    </div>
  );
}

export default Game;
