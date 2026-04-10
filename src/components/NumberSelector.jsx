import React, { useState } from 'react';
import styled from 'styled-components';


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
align-items: end;
.flex{
    display: flex;
    gap: 24px;
}
p{
    font-size: 24px;
    font-weight: 500;
}
.err{
    color: red; }
  `

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;

  background-color: ${({ $isSelected }) =>
    $isSelected ? "black" : "white"};

  color: ${({ $isSelected }) =>
    $isSelected ? "white" : "black"};
`;