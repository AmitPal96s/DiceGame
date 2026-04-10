import React, { useState } from 'react';
import styled from 'styled-components';
import Home from './components/Home';
import GamePlay from './components/GamePlay';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGame = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
    {
        isGameStarted ? <GamePlay /> : <Home
        toggle={
            toggleGame
        }
        />
    }
      
    </>
  );
}

export default App;