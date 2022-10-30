import React from 'react';
import styles from './Start.module.scss';
import Button from '../../components/Button/Button';
import { TStartProps } from '../../types';
import GameStageWrapper from '../../components/GameStageWrapper/GameStageWrapper';

function Start({ onBtnClick }: TStartProps) {
  return (
    <GameStageWrapper>
      <h1 className={styles.startScreen__title}>
        Who wants to be a millionaire?
      </h1>
      <div className={styles.startScreen__action}>
        <Button onClick={onBtnClick}>Start</Button>
      </div>
    </GameStageWrapper>
  );
}

export default Start;
