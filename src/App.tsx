import React, { useState } from 'react';
import Game from './screens/Game/Game';
import gameSettings from './game-config.json';

function App() {
  const [currentQuestionIndex] = useState(0);
  return (
    <Game
      currentQuestionIndex={currentQuestionIndex}
      costs={gameSettings.costs}
      question={gameSettings.questions[currentQuestionIndex]}
    />
  );
}

export default App;
