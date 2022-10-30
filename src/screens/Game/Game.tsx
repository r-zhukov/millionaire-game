import React, { useState } from 'react';
import Answer from '../../components/Answer/Answer';
import styles from './Game.module.scss';
import IssuesCost from '../../components/IssuesCost/IssuesCost';
import { TGameProps, TQuestionStatus } from '../../types';

function Game({
  question,
  costs,
  currentQuestionIndex,
  checkResult,
}: TGameProps) {
  const [selectedAnswerId, setSelectedAnswerId] = useState<null | string>(null);
  const [questionStatus, setQuestionStatus] =
    useState<TQuestionStatus>('waitingAnswer');
  const [isButtonBlocked, setIsButtonBlocked] = useState(false);

  const getAnswerVariant = (isRight: boolean, answerId: string) => {
    if (questionStatus === 'waitingAnswer' && answerId === selectedAnswerId) {
      return 'selected';
    }
    if (questionStatus === 'checkResult') {
      if (isRight) {
        return 'correct';
      }
      if (!isRight && answerId === selectedAnswerId) {
        return 'wrong';
      }
    }
    return undefined;
  };

  const onAnswerClick = (id: string, isRight: boolean) => {
    setIsButtonBlocked(true);
    setSelectedAnswerId(id);
    const prom = new Promise((resolve) => {
      setTimeout(() => {
        setQuestionStatus('checkResult');
        resolve({ success: isRight });
      }, 1500);
    });

    prom.then(() => {
      setTimeout(() => {
        setSelectedAnswerId(null);
        setQuestionStatus('waitingAnswer');
        checkResult(isRight);
        setIsButtonBlocked(false);
      }, 1500);
    });
  };

  return (
    <div className={styles.game}>
      <div className={styles.question}>
        <h1 className={styles.question_title}>{question.question}</h1>
        <div className={styles.question__answers}>
          {question.answers.map((answer) => (
            <Answer
              disabled={isButtonBlocked}
              variant={getAnswerVariant(answer.isRight, answer.id)}
              onAnswerClick={() => onAnswerClick(answer.id, answer.isRight)}
              id={answer.id}
              key={answer.id}
              answer={answer.answer}
            />
          ))}
        </div>
      </div>
      <div className={styles.rightBar}>
        <IssuesCost
          costs={costs}
          currentCost={currentQuestionIndex as number}
        />
      </div>
    </div>
  );
}

export default Game;
