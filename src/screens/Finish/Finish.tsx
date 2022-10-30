import React from 'react';
import { TFinishProps } from '../../types';
import GameStageWrapper from '../../components/GameStageWrapper/GameStageWrapper';
import Button from '../../components/Button/Button';
import utilFormatMoney from '../../utils/utilFormatMoney';
import styles from './Finish.module.scss';

function Finish({ onBtnClick, amountWon }: TFinishProps) {
  return (
    <GameStageWrapper>
      <span className={styles.finishScreen__label}>Total score:</span>
      <h1 className={styles.finishScreen__value}>
        {`${utilFormatMoney(amountWon)} earned`}
      </h1>
      <div className={styles.finishScreen__action}>
        <Button onClick={onBtnClick}>TryAgain</Button>
      </div>
    </GameStageWrapper>
  );
}

export default Finish;
