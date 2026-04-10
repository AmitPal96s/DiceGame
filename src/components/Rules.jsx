import React from 'react'
import styled from 'styled-components'
const Rules = () => {
    return (
        <Container>
            <h3>How to Play</h3>
            <p className="text">
                 Dice Game: Select a number between 1 and 6</p>
                 <p>Roll the dice.</p>
                <p> If your selected number matches the dice result, you earn points equal to the dice value</p>
                <p> otherwise, 2 points are deducted.</p>
                    <p>The objective is to achieve the highest possible score.</p>
        </Container>
    )
}

export default Rules
const Container = styled.div`
  display: flex;
  background-color: #ffeaff;
  flex-direction: column;
  padding: 20px;
  align-items:left;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 8px;
  margin-top: 40px;
  ali
    h3 {
        font-size: 32px;
    }
    .text{
        margin-top: 24px;

    }
  
  `