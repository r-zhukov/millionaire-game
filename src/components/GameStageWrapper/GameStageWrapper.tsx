import React, { PropsWithChildren } from 'react';
import styles from './GameStageWrapper.module.scss';
import handImage from '../../assets/images/hand.png';

function GameStageWrapper({ children }: PropsWithChildren) {
  return (
    <div className={styles.gameStageWrapper}>
      <div className={styles.gameStageWrapper__wallpaper}>
        <img src={handImage} alt="stage-banner" />
      </div>
      <div className={styles.gameStageWrapper__content}>{children}</div>
    </div>
  );
}

export default GameStageWrapper;
