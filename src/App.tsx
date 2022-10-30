import React, { useState } from 'react';
import clsx from 'clsx';
import gameSettings from '@mmillionaire-game/outside-dist/game-config.json';
import Game from './screens/Game/Game';
import PageWrapper from './components/PageWrapper/PageWrapper';
import Start from './screens/Start/Start';
import { TGameStages } from './types';
import Finish from './screens/Finish/Finish';
import styles from './App.module.scss';

function App() {
  const [gameStage, setGameStage] = useState<TGameStages>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<
    number | null
  >(null);

  const startGame = () => {
    setCurrentQuestionIndex(0);
    setGameStage('game');
  };

  const checkResult = (isRight: boolean) => {
    if (
      isRight &&
      (currentQuestionIndex as number) + 1 === gameSettings.questions.length
    ) {
      setGameStage('finish');
    }
    if (isRight) {
      setCurrentQuestionIndex((prevState) => {
        if (prevState !== null) {
          return prevState + 1;
        }
        return prevState;
      });
    }
    if (!isRight) {
      setGameStage('finish');
    }
  };

  return (
    <div
      data-testid="app-container"
      className={clsx(
        styles.appContainer,
        styles[`appContainer__${gameStage}`]
      )}
    >
      <PageWrapper>
        {gameStage === 'start' && <Start onBtnClick={startGame} />}
        {gameStage === 'game' && (
          <Game
            checkResult={checkResult}
            currentQuestionIndex={currentQuestionIndex}
            costs={gameSettings.costs}
            question={gameSettings.questions[currentQuestionIndex as number]}
          />
        )}
        {gameStage === 'finish' && (
          <Finish
            onBtnClick={startGame}
            amountWon={
              gameSettings.costs[(currentQuestionIndex as number) - 1] || 0
            }
          />
        )}
      </PageWrapper>
    </div>
  );
}

export default App;
