import React, { useState } from 'react';
import styled from 'styled-components';
import {media} from '../styled/hlo';
const NumberSelector = ({ setError, error, selectedNumber, setSelectedNumber }) => {
const array = [1, 2, 3, 4, 5, 6];

const handleSelect = (value) => {
  setSelectedNumber(value);
  setError('');
};

  return (
    <NumberSelectorContainer>
      <p className="err">{error}</p>
    <div className="flex">
      {array.map((value, i) => (
        <Box
          $isSelected={value === selectedNumber}
          key={i}
          onClick={() => handleSelect(value)}
        >
          {value}
        </Box>
      ))}
    </div>
    <p> Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;
const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;

  .flex {
    display: flex;
    gap: 24px;
    flex-wrap: wrap; /* Allows wrapping on smaller screens */
    justify-content: center;
  }

  .label {
    font-size: 24px;
    font-weight: 500;
  }

  .err {
    color: red;
    font-size: 14px;
    min-height: 20px; /* Prevents layout shift */
  }

  /* Tablet Screens */
  @media ${media.tablet} {
    align-items: center;

    .label {
      font-size: 20px;
    }

    .flex {
      gap: 16px;
    }
  }

  /* Mobile Screens */
  @media ${media.mobile} {
    .label {
      font-size: 18px;
    }

    .err {
      text-align: center;
    }
  }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 2px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s ease;

  background-color: ${({ $isSelected }) =>
    $isSelected ? "black" : "white"};

  color: ${({ $isSelected }) =>
    $isSelected ? "white" : "black"};

  &:hover {
    transform: scale(1.05);
  }

  /* Tablet Screens */
  @media ${media.tablet} {
    width: 60px;
    height: 60px;
    font-size: 20px;
  }

  /* Mobile Screens */
  @media ${media.mobile} {
    width: 48px;
    height: 48px;
    font-size: 16px;
  }
`;