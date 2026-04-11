import React, { useState } from 'react';
import styled from 'styled-components';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RollDice from './RollDice';
import { Button } from '../styled/Buttons';
import { OutlinedButton } from '../styled/Buttons';
import Rules from './Rules';
import {media} from '../styled/hlo';

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [currentDice, setCurrentDice] = useState(1);
  const [totalScore, setTotalScore] = useState(0);
  const [rolling, setRolling] = useState(false);
  const [error, setError] = useState('');
  const [showRules, setShowRules] = useState(false);

  const rollDice = () => {
    if (rolling) return;

    setRolling(true);

    let count = 0;
    const interval = setInterval(() => {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      setCurrentDice(randomValue);
      count++;

      if (count > 10) {
        clearInterval(interval);
        setRolling(false);

        // Final dice value
        const finalValue = Math.floor(Math.random() * 6) + 1;
        setCurrentDice(finalValue);

        // Update score based on the selected number
        if(!selectedNumber){setError('Please select any number')
       return;}

        if (selectedNumber === finalValue) {
          setTotalScore((prev) => prev + finalValue);
        } else {
          setTotalScore((prev) => prev - 2);
        }
      }
    }, 100);
    setSelectedNumber(undefined);
  };

  const resetGame = () => {
    setSelectedNumber(1);
    setCurrentDice(1);
    setTotalScore(0);
    setRolling(false);
    setError('');
  }

  return (
    <MainContainer>
      <div className="topsection">
        <TotalScore totalScore={totalScore} />
        <NumberSelector
        setError={setError}
        error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>

      <RollDice
        rollDice={rollDice}
        currentDice={currentDice}
        rolling={rolling}
      />
      <div  className="btns">
        <Button
        onClick={resetGame}>
          Reset Game
        </Button>
         <OutlinedButton onClick={() => setShowRules(prev => !prev)}>
          {
            showRules ? "Hide Rules" : "Show Rules"
          }
        </OutlinedButton>
      </div>
      
        {showRules && <Rules/>}
      
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;

  .topsection {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    gap: 20px;
  }

  .btns {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    margin-top: 20px;
  }

  /* Tablet screens */
  @media ${media.tablet} {
    .topsection {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  /* Mobile screens */
  @media ${media.mobileL} {
    padding: 40px 10px;

    .btns button {
      width: 90%;
      max-width: 300px;
    }
  }
`;