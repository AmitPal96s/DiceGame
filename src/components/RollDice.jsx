import React, { useState } from 'react'
import styled from 'styled-components'
import {media} from '../styled/hlo';


const RollDice = ({
  rollDice,
  currentDice,rolling, setRolling
}) => {


  return (
    <DiceContainer>
      <div>
        <img
          src={`/images/Dice/dice_${currentDice}.png`}
          alt="dice"
          onClick={rollDice}
          style={{ cursor: "pointer" }}
        />
      </div>
      <p>{rolling ? "Rolling..." : "Click to Roll"}</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;

  img {
    width: 120px;
    transition: transform 0.2s ease;
  }

  img:active {
    transform: scale(0.9);
  }
  @media ${media.tablet} {
    img {
      width: 120px;
    }
  }

  @media ${media.mobile} {
    img {
      width: 100px;
    }

    p {
      font-size: 1rem;
    }
  }
`;