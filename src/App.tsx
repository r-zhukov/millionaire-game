import React, { useState } from 'react';
import Game from './screens/Game/Game';
import gameSettings from './game-config.json';
import PageWrapper from './components/PageWrapper/PageWrapper';

function App() {
  const [currentQuestionIndex] = useState(0);
  return (
    <PageWrapper>
      <Game
        currentQuestionIndex={currentQuestionIndex}
        costs={gameSettings.costs}
        question={gameSettings.questions[currentQuestionIndex]}
      />
    </PageWrapper>
  );
}

export default App;
